(() => {
  const DB_NAME='khairpur_media_library',STORE='media';let connection;
  const open=()=>connection||(connection=new Promise((resolve,reject)=>{const request=indexedDB.open(DB_NAME,1);request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains(STORE))db.createObjectStore(STORE,{keyPath:'id'})};request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error)}));
  const transact=async(mode,operation)=>{const db=await open();return new Promise((resolve,reject)=>{const transaction=db.transaction(STORE,mode),store=transaction.objectStore(STORE),request=operation(store);request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error)})};
  const api={all:()=>transact('readonly',(store)=>store.getAll()),put:(record)=>transact('readwrite',(store)=>store.put(record)),remove:(id)=>transact('readwrite',(store)=>store.delete(id))};
  window.MediaDB=api;
  const grids=[...document.querySelectorAll('[data-public-gallery]')];if(!grids.length)return;
  const fallbackAll=[
    {id:'field-installation',title:'Mature palm installation',category:'Projects',type:'image',src:'assets/real-palm-installation.webp'},
    {id:'harvest',title:'Seasonal farm harvest',category:'Harvest',type:'image',src:'assets/facebook/mango-harvest.jpg'},
    {id:'sorting',title:'Farm sorting activity',category:'Harvest',type:'image',src:'assets/facebook/mango-sorting.jpg'},
    {id:'packing',title:'Product packing activity',category:'Delivery',type:'image',src:'assets/facebook/mango-packing.jpg'},
    {id:'products',title:'Date product range',category:'Products',type:'image',src:'assets/facebook/product-range.jpg'},
    {id:'install-2',title:'Field installation crew',category:'Installation',type:'image',src:'assets/real-palm-installation.webp'}
  ];
  const urls=[];const esc=(value)=>String(value||'').replace(/[&<>"]/g,(char)=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char]));
  async function fetchCloud(category,limit){const config=window.KHAIRPUR_SUPABASE;if(!config?.url||!config?.anonKey)return[];let url=`${config.url}/rest/v1/media?select=title,category,description,media_type,public_url,created_at&published=eq.true&order=sort_order.asc,created_at.desc&limit=${limit}`;if(category)url+=`&category=eq.${encodeURIComponent(category)}`;const response=await fetch(url,{headers:{apikey:config.anonKey,Authorization:`Bearer ${config.anonKey}`}});if(!response.ok)return[];return(await response.json()).map((item)=>({...item,type:item.media_type,src:item.public_url}))}
  async function fetchLocal(category,limit){const all=(await api.all()).filter((item)=>item.published&&(!category||item.category===category)).sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).slice(0,limit);return all.map((item)=>{const src=URL.createObjectURL(item.blob);urls.push(src);return{...item,src}})}
  function markup(items){return items.map((item)=>`<figure class="public-media-item">${item.type==='video'?`<video src="${item.src}" controls playsinline preload="metadata" aria-label="${esc(item.title)}"></video><span class="media-play" aria-hidden="true">▶</span>`:`<img src="${item.src}" alt="${esc(item.title)}" loading="lazy">`}<figcaption><span>${esc(item.category)}</span><strong>${esc(item.title)}</strong></figcaption></figure>`).join('')}
  async function renderGrid(grid){
    const category=grid.dataset.publicGallery||null,limit=Number(grid.dataset.galleryLimit)||9;
    try{
      const cloud=await fetchCloud(category,limit);
      const local=cloud.length?[]:await fetchLocal(category,limit);
      const fallback=category?fallbackAll.filter((item)=>item.category===category):fallbackAll;
      const items=cloud.length?cloud:(local.length?local:fallback);
      grid.innerHTML=items.length?markup(items):'<p class="media-empty-public">No media published yet — check back soon.</p>';
    }catch{
      grid.innerHTML='<p class="media-empty-public">Gallery is temporarily unavailable.</p>';
    }
  }
  grids.forEach(renderGrid);
  addEventListener('beforeunload',()=>urls.forEach((url)=>URL.revokeObjectURL(url)));
})();
