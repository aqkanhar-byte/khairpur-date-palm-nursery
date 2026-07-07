(() => {
  const PHONE = '923023111589';
  const K = [
    [['aseel aur qarbala','aseel vs qarbala','aseel qarbala difference','dono varieties'],'Aseel Khairpur ki signature commercial variety hai aur public catalogue mein approximately 1–20 ft listed hai; Qarbala approximately 1–10 ft listed hai. Best choice intended use aur current stock dekh kar hoti hai.'],
    [['aseel','aseel palm','aseel plant','aseel variety'],'Aseel Khairpur ki mashhoor date palm variety hai. Public catalogue mein plants approximately 1–20 ft listed hain; current stock WhatsApp par confirm hota hai.'],
    [['qarbala','karbala','qarbala palm','qarbala plant'],'Qarbala palms approximately 1–10 ft listed hain. Exact height, quantity aur availability nursery confirm karti hai.'],
    [['variety','palm types','konsi palm','which palm'],'Highlighted varieties Aseel aur Qarbala hain. Farm, home ya project aur preferred height batayein taa-ke suitable option suggest ho.'],
    [['height','size','kitne foot','feet available'],'Aseel approximately 1–20 ft aur Qarbala 1–10 ft listed hain. Har size har waqt available nahi hota.'],
    [['price','rate','cost','kitne ka','quotation'],'Rate variety, height, quantity, destination aur installation par depend karta hai. In details ke baghair accurate price dena responsible nahi.'],
    [['availability','stock','available now','ready stock'],'Stock change hota rehta hai. Variety, height aur quantity WhatsApp par bhej kar current dated photos mangwayein.'],
    [['male female','gender','female palm','fruiting'],'Gender aur fruiting status specific plant ke liye written confirm karein. Sirf height fruiting guarantee nahi hoti.'],
    [['age','plant age','years old','kitna purana'],'Age specific stock record se confirm hoti hai. Measured height, condition, gender aur age jahan applicable ho, written lein.'],
    [['health','quality','best plant','selection'],'Healthy crown, balanced structure, roots aur intended use selection mein matter karte hain. Current stock video mangwana best hai.'],
    [['home','house','garden','ghar ke liye'],'Home ke liye available space, mature canopy aur desired visual impact dekha jata hai. Site photo aur dimensions share karein.'],
    [['farmhouse','farm house','villa','residential'],'Farmhouse ke liye statement palms achi hoti hain, magar gate width, access aur long-term spacing pehle plan karein.'],
    [['orchard','farm','bagh','plantation'],'Orchard enquiry mein land area, irrigation, variety, spacing objective aur quantity share karein. Final advice site-specific honi chahiye.'],
    [['commercial','landscape project','government','large order'],'Large project ke liye quantity schedule, access, delivery phases aur installation scope bhejein taa-ke structured quote ban sake.'],
    [['delivery','transport','shipping plants','outside khairpur'],'Delivery palm size, quantity, route aur destination access par depend karti hai. City aur order details bhejein.'],
    [['delivery charges','transport cost','freight','shipping cost'],'Transport cost distance, vehicle, palm size, loading aur unloading requirements se calculate hota hai.'],
    [['installation','planting service','lagana','install palm'],'Professional installation available hai subject to site assessment. Final inclusions quotation mein confirm hote hain.'],
    [['mature palm','large palm','big tree','relocation'],'Mature palm ke liye machinery, lifting plan, road/gate access aur prepared site chahiye. Photos, dimensions aur quantity bhejein.'],
    [['site visit','survey','inspection','consultation'],'Site visit availability location aur project scope ke mutabiq confirm hoti hai. City aur required service WhatsApp par bhejein.'],
    [['aftercare','maintenance','watering','plant care'],'Watering aur establishment soil, weather, drainage aur size par depend karta hai. Project-specific written instructions lein.'],
    [['guarantee','survival','warranty','replacement'],'Survival guarantee assume na karein. Guarantee, aftercare responsibility aur replacement terms quotation mein written confirm karein.'],
    [['date products','products of dates','khajoor products','kya products hain'],'Available range mein fresh Aseel dates, dry dates / chuhara, date paste, date syrup aur date powder ki enquiries shamil hain. Current availability aur packaging confirm karein.'],
    [['fresh dates','aseel dates','khajoor fruit','seasonal dates'],'Fresh Aseel dates seasonal hain. Grade, pack, price aur dispatch date current season ke liye confirm hoti hai.'],
    [['dry dates','chuhara','chuara','dried dates'],'Dry dates / chuhara retail aur bulk enquiry ke liye hain. Grade, pack size, quantity aur city bhejein.'],
    [['date paste','khajoor paste','bakery paste','date filling'],'Date paste bakery aur food production ke liye useful hai. MOQ, pack, ingredients aur shelf life confirm karein.'],
    [['date syrup','khajoor syrup','liquid date','natural sweetener'],'Date syrup ke liye current availability, bottle/bulk pack, specification aur shelf life confirm karein.'],
    [['date powder','khajoor powder','date sugar','powder sweetener'],'Date powder ke liye texture, ingredients, pack size, MOQ aur shelf life purchase se pehle confirm karein.'],
    [['wholesale','bulk','dealer','reseller'],'Wholesale message mein product, grade, volume, packaging, destination aur required date share karein.'],
    [['export','international','abroad','overseas'],'Export campaigns public page par rahe hain, lekin countries, documents, MOQ aur terms har shipment ke liye reconfirm hote hain.'],
    [['packaging','pack size','packing','pouch'],'Retail pack, bulk carton aur food-service requirement alag hoti hai. Product aur required format clear likhein.'],
    [['minimum order','moq','minimum quantity','small order'],'MOQ product, packaging aur destination se change hota hai. Required quantity bhej kar feasible option confirm karein.'],
    [['sample','test order','trial order','product sample'],'Sample availability product aur destination par depend karti hai. Product, city aur commercial requirement share karein.'],
    [['mango','mango export','aam','mango shipment'],'Facebook archive mein seasonal mango activity hai. Current season, variety, destination aur availability WhatsApp par confirm karein.'],
    [['location','address','where','kahan'],'Business Khairpur Mirs, Sindh mein listed hai. Visit se pehle exact pin aur appointment confirm karein.'],
    [['timing','hours','open','kab khulte'],'Facebook “Always open” show karta hai, magar physical visit se pehle call/WhatsApp karna behtar hai.'],
    [['phone','number','contact','call'],'Direct mobile/WhatsApp 0302 3111589 hai.'],
    [['whatsapp','message','chat','rabta'],'WhatsApp 0302 3111589. Product, quantity, city, size/pack aur timeline ek message mein bhejein.'],
    [['email','mail','email address','business email'],'Public business email kanhar4u@yahoo.com hai.'],
    [['facebook','social page','followers','official page'],'Official Facebook link footer mein hai. Audit ke waqt public profile par approximately 29K followers listed thay.'],
    [['reviews','testimonial','feedback','reliable'],'Authentic field media aur public activity trust signals hain. Phir bhi written quote, current stock media aur terms zaroor lein.'],
    [['payment','advance','bank transfer','cash'],'Payment policy public sources se verify nahi. Payment se pehle official number, quote aur beneficiary details confirm karein.'],
    [['order','how to order','booking','purchase'],'Product, size/pack, quantity, city aur timeline bhejein. Availability aur quotation confirm hone ke baad terms finalize honge.'],
    [['response','reply','jawab kab','urgent'],'WhatsApp fastest route hai. Complete details response ko useful banati hain; exact response-time guarantee listed nahi.'],
    [['photos','video','stock image','current picture'],'Specific palm ke current dated photos/video mangwayein. Editorial website image ko individual stock confirmation na samjhein.'],
    [['certificate','certification','license','award'],'Certifications aur awards public audit mein verify nahi huay. Procurement ke liye official documents directly request karein.'],
    [['experience','years','company history','team'],'Exact years aur team biographies public sources se verify nahi huin; website invented experience claim nahi karti.'],
    [['return','refund','cancel','cancellation'],'Return/refund terms public content mein verified nahi. Order se pehle written commercial terms lein.'],
    [['invoice','bill','tax invoice','receipt'],'Invoice aur tax-document availability directly confirm karein; required documents quote request mein mention karein.'],
    [['soil','zameen','salty soil','drainage'],'Drainage, irrigation aur site conditions establishment mein matter karti hain. Final agronomic advice site assessment se honi chahiye.'],
    [['spacing','distance','plant distance','layout'],'Spacing objective, variety, machinery aur mature canopy par depend karti hai. Farm layout site-specific plan karein.'],
    [['season','best time','planting time','kab lagayen'],'Planting window location, heat, irrigation aur palm size se change hoti hai. City aur timeline share karein.'],
    [['assistant','offline','internet','app install'],'Yeh curated assistant install ke baad offline chal sakta hai. Live stock, rates aur final terms ke liye nursery confirmation zaroori hai.']
  ];
  const norm = (s) => s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
  const words = (s) => norm(s).split(' ').filter((w) => w.length > 1);
  const answer = (question) => {
    const q = norm(question), qt = new Set(words(q)); let best, top = 0;
    K.forEach(([topics,text]) => topics.forEach((topic) => { const p=norm(topic); let score=q.includes(p)?8+words(p).length:0; words(p).forEach((w)=>{if(qt.has(w))score+=w.length>4?2:1}); if(score>top){top=score;best=text} }));
    return top >= 2 ? best : null;
  };
  const ui=document.createElement('aside'); ui.className='assistant-shell';
  ui.innerHTML=`<button class="assistant-trigger" type="button" aria-expanded="false"><span class="assistant-trigger-logo"><img src="assets/khairpur-logo.jpg" alt=""></span><b>Palm & Date Guide</b><small><i></i> Ready to help</small></button><section class="assistant-panel" hidden><header><div class="assistant-identity"><span class="assistant-brandmark"><img src="assets/khairpur-logo.jpg" alt=""></span><div><strong>Khairpur Guide</strong><small><i></i> Available offline</small></div></div><button class="assistant-close" type="button" aria-label="Close">×</button></header><div class="assistant-messages" aria-live="polite"><div class="assistant-message bot"><b>Assalam-o-Alaikum!</b> Common sawal select karein ya apna sawal Roman Urdu / English mein type karein.</div></div><div class="assistant-suggestions"><button>Aseel ki price?</button><button>Delivery hoti hai?</button><button>Date products?</button><button class="assistant-browse" aria-expanded="false">＋ View all</button></div><div class="assistant-question-library" hidden><strong>Popular questions</strong><div><button>Aseel aur Qarbala mein kya farq hai?</button><button>Kaun se sizes available hain?</button><button>Current stock kaise check karun?</button><button>Female fruiting palm milti hai?</button><button>Farmhouse ke liye konsi palm?</button><button>Orchard plantation karte hain?</button><button>Delivery charges kitne hain?</button><button>Installation service available hai?</button><button>Mature palm kaise install hoti hai?</button><button>Aftercare aur watering kya hogi?</button><button>Fresh Aseel dates kab milti hain?</button><button>Dry dates / chuhara available?</button><button>Date paste ka MOQ kya hai?</button><button>Date syrup available hai?</button><button>Wholesale order kaise karein?</button><button>Export kin countries mein hota hai?</button><button>Packaging options kya hain?</button><button>Nursery location aur timing?</button></div></div><form class="assistant-form"><label class="sr-only" for="assistant-question">Sawal</label><input id="assistant-question" maxlength="180" autocomplete="off" placeholder="Type your question…"><button aria-label="Send"><span>→</span></button></form><p class="assistant-note"><span>Private by design</span> • Live stock aur rate nursery se confirm karein.</p></section>`;
  document.body.append(ui); const panel=ui.querySelector('.assistant-panel'), trigger=ui.querySelector('.assistant-trigger'), input=ui.querySelector('input'), messages=ui.querySelector('.assistant-messages');
  const toggle=(open)=>{panel.hidden=!open;trigger.setAttribute('aria-expanded',String(open));if(open)input.focus()}; trigger.onclick=()=>toggle(panel.hidden); ui.querySelector('.assistant-close').onclick=()=>toggle(false);
  const ask=(q)=>{if(!q.trim())return;const user=document.createElement('div');user.className='assistant-message user';user.textContent=q;messages.append(user);const bot=document.createElement('div');bot.className='assistant-message bot';const reply=answer(q);if(reply)bot.textContent=reply;else bot.innerHTML=`Verified offline jawab nahi mila. <a target="_blank" rel="noopener" href="https://wa.me/${PHONE}?text=${encodeURIComponent('Assalam-o-Alaikum, mera sawal hai: '+q)}">WhatsApp par poochain →</a>`;messages.append(bot);messages.scrollTop=messages.scrollHeight};
  ui.querySelector('form').onsubmit=(e)=>{e.preventDefault();ask(input.value);input.value=''};
  const library=ui.querySelector('.assistant-question-library'), browse=ui.querySelector('.assistant-browse');
  browse.onclick=()=>{const open=library.hidden;library.hidden=!open;browse.setAttribute('aria-expanded',String(open));browse.textContent=open?'− Hide':'＋ View all'};
  ui.querySelectorAll('.assistant-suggestions button:not(.assistant-browse),.assistant-question-library button').forEach((b)=>b.onclick=()=>{ask(b.textContent);library.hidden=true;browse.setAttribute('aria-expanded','false');browse.textContent='＋ View all'});
  let installPrompt; const install=document.createElement('button');install.type='button';install.className='install-app';install.innerHTML='<span>↓</span><b>Install website app</b><small>Fast access • Works offline</small>';document.body.append(install);if(/android|iphone|ipad|ipod/i.test(navigator.userAgent)&&!matchMedia('(display-mode: standalone)').matches)install.classList.add('is-ready');
  addEventListener('beforeinstallprompt',(e)=>{e.preventDefault();installPrompt=e;install.classList.add('is-ready')});addEventListener('appinstalled',()=>install.remove());
  install.onclick=async()=>{if(installPrompt){installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;install.classList.remove('is-ready')}else if(/iphone|ipad|ipod/i.test(navigator.userAgent))alert('Safari mein Share dabayein, phir “Add to Home Screen” select karein.');else alert('Browser menu mein “Install app” ya “Add to Home screen” select karein. Website HTTPS par open honi chahiye.')};
  if('serviceWorker' in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('sw.js');
})();
