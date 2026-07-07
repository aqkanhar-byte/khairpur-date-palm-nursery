(() => {
  const DB_NAME='khairpur_media_library',STORE='media';let connection;
  const open=()=>connection||(connection=new Promise((resolve,reject)=>{const request=indexedDB.open(DB_NAME,1);request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains(STORE))db.createObjectStore(STORE,{keyPath:'id'})};request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error)}));
  const transact=async(mode,operation)=>{const db=await open();return new Promise((resolve,reject)=>{const transaction=db.transaction(STORE,mode),store=transaction.objectStore(STORE),request=operation(store);request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error)})};
  const api={all:()=>transact('readonly',(store)=>store.getAll()),put:(record)=>transact('readwrite',(store)=>store.put(record)),remove:(id)=>transact('readwrite',(store)=>store.delete(id))};
  window.MediaDB=api;
  const grid=document.querySelector('#public-media-grid');if(!grid)return;
  const fallback=[
    {id:'field-installation',title:'Mature palm installation',category:'Projects',type:'image',src:'assets/real-palm-installation.webp'},
    {id:'harvest',title:'Seasonal farm harvest',category:'Harvest',type:'image',src:'assets/facebook/mango-harvest.jpg'},
    {id:'sorting',title:'Farm sorting activity',category:'Harvest',type:'image',src:'assets/facebook/mango-sorting.jpg'},
    {id:'packing',title:'Product packing activity',category:'Delivery',type:'image',src:'assets/facebook/mango-packing.jpg'},
    {id:'products',title:'Date product range',category:'Products',type:'image',src:'assets/facebook/product-range.jpg'}
  ];
  const urls=[];const esc=(value)=>String(value||'').replace(/[&<>"]/g,(char)=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char]));
  async function render(){try{let cloud=[];const config=window.KHAIRPUR_SUPABASE;if(config?.url&&config?.anonKey){const response=await fetch(`${config.url}/rest/v1/media?select=title,category,description,media_type,public_url,created_at&published=eq.true&order=sort_order.asc,created_at.desc&limit=9`,{headers:{apikey:config.anonKey,Authorization:`Bearer ${config.anonKey}`}});if(response.ok)cloud=(await response.json()).map((item)=>({...item,type:item.media_type,src:item.public_url}))}const local=(await api.all()).filter((item)=>item.published).sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).slice(0,9).map((item)=>{const src=URL.createObjectURL(item.blob);urls.push(src);return {...item,src}});const items=cloud.length?cloud:(local.length?local:fallback);grid.innerHTML=items.map((item)=>`<figure class="public-media-item">${item.type==='video'?`<video src="${item.src}" controls playsinline preload="metadata" aria-label="${esc(item.title)}"></video><span class="media-play" aria-hidden="true">▶</span>`:`<img src="${item.src}" alt="${esc(item.title)}" loading="lazy">`}<figcaption><span>${esc(item.category)}</span><strong>${esc(item.title)}</strong></figcaption></figure>`).join('')}catch{grid.innerHTML='<p class="media-empty-public">Gallery is temporarily unavailable.</p>'}}
  render();addEventListener('beforeunload',()=>urls.forEach((url)=>URL.revokeObjectURL(url)));
})();
