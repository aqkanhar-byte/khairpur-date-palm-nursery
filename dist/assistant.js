(() => {
  const PHONE = '923023111589';
  const K = [
    [['aseel aur qarbala','aseel vs qarbala','aseel qarbala difference','dono varieties','difference between aseel and qarbala'],
      'Aseel Khairpur ki signature commercial variety hai aur public catalogue mein approximately 1–20 ft listed hai; Qarbala approximately 1–10 ft listed hai. Best choice intended use aur current stock dekh kar hoti hai.',
      'Aseel is Khairpur\'s signature commercial variety, listed at approximately 1–20 ft. Qarbala is listed at approximately 1–10 ft. The best choice depends on your intended use and current nursery stock.'],
    [['aseel','aseel palm','aseel plant','aseel variety'],
      'Aseel Khairpur ki mashhoor date palm variety hai. Public catalogue mein plants approximately 1–20 ft listed hain; current stock WhatsApp par confirm hota hai.',
      'Aseel is Khairpur\'s well-known date palm variety. Plants are listed at approximately 1–20 ft; current stock is confirmed directly on WhatsApp.'],
    [['qarbala','karbala','qarbala palm','qarbala plant'],
      'Qarbala palms approximately 1–10 ft listed hain. Exact height, quantity aur availability nursery confirm karti hai.',
      'Qarbala palms are listed at approximately 1–10 ft. Exact height, quantity and availability are confirmed directly by the nursery.'],
    [['variety','palm types','konsi palm','which palm','what varieties'],
      'Highlighted varieties Aseel aur Qarbala hain. Farm, home ya project aur preferred height batayein taa-ke suitable option suggest ho.',
      'Our highlighted varieties are Aseel and Qarbala. Tell us whether it\'s for a farm, home or project, and your preferred height, so we can suggest the right option.'],
    [['height','size','kitne foot','feet available','what sizes'],
      'Aseel approximately 1–20 ft aur Qarbala 1–10 ft listed hain. Har size har waqt available nahi hota.',
      'Aseel is listed at approximately 1–20 ft, and Qarbala at 1–10 ft. Not every size is available at all times — please confirm current stock.'],
    [['price','rate','cost','kitne ka','quotation','how much'],
      'Rate variety, height, quantity, destination aur installation par depend karta hai. In details ke baghair accurate price dena responsible nahi.',
      'Price depends on variety, height, quantity, destination and installation. We can\'t responsibly quote a price without these details — please share them on WhatsApp for an accurate quote.'],
    [['availability','stock','available now','ready stock','in stock'],
      'Stock change hota rehta hai. Variety, height aur quantity WhatsApp par bhej kar current dated photos mangwayein.',
      'Stock changes regularly. Send the variety, height and quantity you need on WhatsApp and ask for current, dated photos.'],
    [['male female','gender','female palm','fruiting'],
      'Gender aur fruiting status specific plant ke liye written confirm karein. Sirf height fruiting guarantee nahi hoti.',
      'Get gender and fruiting status confirmed in writing for the specific plant. Height alone is not a guarantee of fruiting.'],
    [['age','plant age','years old','kitna purana'],
      'Age specific stock record se confirm hoti hai. Measured height, condition, gender aur age jahan applicable ho, written lein.',
      'Age is confirmed from the specific stock record. Get measured height, condition, gender and age (where applicable) in writing.'],
    [['health','quality','best plant','selection'],
      'Healthy crown, balanced structure, roots aur intended use selection mein matter karte hain. Current stock video mangwana best hai.',
      'A healthy crown, balanced structure, roots and your intended use all matter when selecting a plant. Asking for a current video of the actual stock is the best way to check.'],
    [['home','house','garden','ghar ke liye','for my house'],
      'Home ke liye available space, mature canopy aur desired visual impact dekha jata hai. Site photo aur dimensions share karein.',
      'For a home, we look at available space, mature canopy size and the visual impact you want. Share a site photo and dimensions for a proper recommendation.'],
    [['farmhouse','farm house','villa','residential'],
      'Farmhouse ke liye statement palms achi hoti hain, magar gate width, access aur long-term spacing pehle plan karein.',
      'Statement palms work well for farmhouses, but plan gate width, access and long-term spacing before ordering.'],
    [['orchard','farm','bagh','plantation'],
      'Orchard enquiry mein land area, irrigation, variety, spacing objective aur quantity share karein. Final advice site-specific honi chahiye.',
      'For an orchard enquiry, share land area, irrigation setup, variety, spacing goals and quantity. Final advice should always be site-specific.'],
    [['commercial','landscape project','government','large order'],
      'Large project ke liye quantity schedule, access, delivery phases aur installation scope bhejein taa-ke structured quote ban sake.',
      'For a large project, send the quantity schedule, site access, delivery phases and installation scope so we can prepare a structured quotation.'],
    [['delivery','transport','shipping plants','outside khairpur'],
      'Delivery palm size, quantity, route aur destination access par depend karti hai. City aur order details bhejein.',
      'Delivery depends on palm size, quantity, route and destination access. Send your city and order details for an assessment.'],
    [['delivery charges','transport cost','freight','shipping cost'],
      'Transport cost distance, vehicle, palm size, loading aur unloading requirements se calculate hota hai.',
      'Transport cost is calculated from distance, vehicle type, palm size, and loading/unloading requirements.'],
    [['installation','planting service','lagana','install palm'],
      'Professional installation available hai subject to site assessment. Final inclusions quotation mein confirm hote hain.',
      'Professional installation is available, subject to a site assessment. Final inclusions are confirmed in the quotation.'],
    [['mature palm','large palm','big tree','relocation'],
      'Mature palm ke liye machinery, lifting plan, road/gate access aur prepared site chahiye. Photos, dimensions aur quantity bhejein.',
      'A mature palm needs machinery, a lifting plan, road/gate access and a prepared site. Send photos, dimensions and quantity.'],
    [['site visit','survey','inspection','consultation','can i visit'],
      'Site visit availability location aur project scope ke mutabiq confirm hoti hai. City aur required service WhatsApp par bhejein.',
      'Site visit availability is confirmed based on location and project scope. Send your city and the service you need on WhatsApp.'],
    [['aftercare','maintenance','watering','plant care'],
      'Watering aur establishment soil, weather, drainage aur size par depend karta hai. Project-specific written instructions lein.',
      'Watering and establishment care depend on soil, weather, drainage and plant size. Get project-specific written instructions.'],
    [['watering frequency','how often water','summer watering','winter watering'],
      'Watering frequency mausam, soil drainage aur palm ki age par depend karti hai — garmi mein zyada, sardi mein kam. Nursery se apne site ke liye exact schedule confirm karein.',
      'Watering frequency depends on season, soil drainage and plant age — more in summer, less in winter. Confirm an exact schedule for your site with the nursery.'],
    [['guarantee','survival','warranty','replacement'],
      'Survival guarantee assume na karein. Guarantee, aftercare responsibility aur replacement terms quotation mein written confirm karein.',
      'Do not assume a survival guarantee exists by default. Confirm guarantee, aftercare responsibility and replacement terms in writing in the quotation.'],
    [['plant died','dead on arrival','palm mar gaya','plant dead after delivery'],
      'Agar plant delivery ke baad affected lage, foran photo/video ke sath nursery ko WhatsApp par contact karein. Resolution written terms (jo quotation mein confirm huay thay) ke mutabiq hoga.',
      'If a plant looks affected after delivery, contact the nursery on WhatsApp immediately with photos/video. Resolution will follow whatever written terms were confirmed in your quotation.'],
    [['date products','products of dates','khajoor products','kya products hain','what products'],
      'Available range mein fresh Aseel dates, dry dates / chuhara, date paste, date syrup aur date powder ki enquiries shamil hain. Current availability aur packaging confirm karein.',
      'Our range includes fresh Aseel dates, dry dates / chuhara, date paste, date syrup and date powder. Please confirm current availability and packaging.'],
    [['fresh dates','aseel dates','khajoor fruit','seasonal dates'],
      'Fresh Aseel dates seasonal hain. Grade, pack, price aur dispatch date current season ke liye confirm hoti hai.',
      'Fresh Aseel dates are seasonal. Grade, pack, price and dispatch date are confirmed for the current season.'],
    [['dry dates','chuhara','chuara','dried dates'],
      'Dry dates / chuhara retail aur bulk enquiry ke liye hain. Grade, pack size, quantity aur city bhejein.',
      'Dry dates / chuhara are available for both retail and bulk enquiries. Send grade, pack size, quantity and your city.'],
    [['date paste','khajoor paste','bakery paste','date filling'],
      'Date paste bakery aur food production ke liye useful hai. MOQ, pack, ingredients aur shelf life confirm karein.',
      'Date paste is useful for bakery and food production. Confirm MOQ, pack size, ingredients and shelf life.'],
    [['date syrup','khajoor syrup','liquid date','natural sweetener'],
      'Date syrup ke liye current availability, bottle/bulk pack, specification aur shelf life confirm karein.',
      'For date syrup, confirm current availability, bottle/bulk packaging, specification and shelf life.'],
    [['date powder','khajoor powder','date sugar','powder sweetener'],
      'Date powder ke liye texture, ingredients, pack size, MOQ aur shelf life purchase se pehle confirm karein.',
      'For date powder, confirm texture, ingredients, pack size, MOQ and shelf life before purchasing.'],
    [['wholesale','bulk','dealer','reseller'],
      'Wholesale message mein product, grade, volume, packaging, destination aur required date share karein.',
      'For wholesale, share the product, grade, volume, packaging, destination and required date in your message.'],
    [['bulk discount','group discount','quantity discount','discount'],
      'Discount fixed listed nahi hai — yeh quantity, variety aur order value par depend karta hai. Required quantity bhej kar direct confirm karein.',
      'There\'s no fixed listed discount — it depends on quantity, variety and order value. Send your required quantity and confirm directly with the nursery.'],
    [['export','international','abroad','overseas'],
      'Export campaigns public page par rahe hain, lekin countries, documents, MOQ aur terms har shipment ke liye reconfirm hote hain.',
      'Export campaigns have appeared on our public page, but countries, documents, MOQ and terms are reconfirmed for every shipment.'],
    [['packaging','pack size','packing','pouch'],
      'Retail pack, bulk carton aur food-service requirement alag hoti hai. Product aur required format clear likhein.',
      'Retail packs, bulk cartons and food-service requirements differ. Please state the product and required format clearly.'],
    [['minimum order','moq','minimum quantity','small order'],
      'MOQ product, packaging aur destination se change hota hai. Required quantity bhej kar feasible option confirm karein.',
      'MOQ changes by product, packaging and destination. Send your required quantity to confirm a feasible option.'],
    [['sample','test order','trial order','product sample'],
      'Sample availability product aur destination par depend karti hai. Product, city aur commercial requirement share karein.',
      'Sample availability depends on the product and destination. Share the product, city and commercial requirement.'],
    [['single plant','one plant only','buy one palm','just one'],
      'Single plant orders bhi lete hain, sirf bulk zaroori nahi. Ek palm ke liye bhi variety, height aur city batayein.',
      'We do take single-plant orders too, bulk is not required. Even for one palm, tell us the variety, height and city.'],
    [['mango','mango export','aam','mango shipment'],
      'Facebook archive mein seasonal mango activity hai. Current season, variety, destination aur availability WhatsApp par confirm karein.',
      'Our Facebook archive shows seasonal mango activity. Confirm current season, variety, destination and availability on WhatsApp.'],
    [['location','address','where','kahan','showroom'],
      'Business Khairpur Mirs, Sindh mein listed hai. Visit se pehle exact pin aur appointment confirm karein.',
      'The business is located in Khairpur Mirs, Sindh. Confirm the exact map pin and appointment before visiting.'],
    [['timing','hours','open','kab khulte','business hours'],
      'Facebook “Always open” show karta hai, magar physical visit se pehle call/WhatsApp karna behtar hai.',
      'Facebook shows "Always open," but it\'s best to call or WhatsApp before a physical visit to confirm someone is there.'],
    [['phone','number','contact','call'],
      'Direct mobile/WhatsApp 0302 3111589 hai.',
      'Direct mobile/WhatsApp number is 0302 3111589.'],
    [['whatsapp','message','chat','rabta'],
      'WhatsApp 0302 3111589. Product, quantity, city, size/pack aur timeline ek message mein bhejein.',
      'WhatsApp: 0302 3111589. Send product, quantity, city, size/pack and timeline all in one message for the fastest response.'],
    [['email','mail','email address','business email'],
      'Public business email kanhar4u@yahoo.com hai.',
      'Public business email is kanhar4u@yahoo.com.'],
    [['facebook','social page','followers','official page'],
      'Official Facebook link footer mein hai. Audit ke waqt public profile par approximately 29K followers listed thay.',
      'The official Facebook link is in the footer. At the time of our audit, the public profile listed approximately 29K followers.'],
    [['reviews','testimonial','feedback','reliable','trustworthy'],
      'Authentic field media aur public activity trust signals hain. Phir bhi written quote, current stock media aur terms zaroor lein.',
      'Authentic field media and public activity are our trust signals. Still, always get a written quote, current stock media and clear terms.'],
    [['payment','advance','bank transfer','cash','how to pay'],
      'Payment policy public sources se verify nahi. Payment se pehle official number, quote aur beneficiary details confirm karein.',
      'Payment policy isn\'t independently verified from public sources. Before paying, confirm the official number, written quote and beneficiary details directly with the nursery.'],
    [['cash on delivery','cod','pay on arrival'],
      'Cash on delivery har order ke liye standard confirm nahi hai. Payment terms order confirm karte waqt directly poochain.',
      'Cash on delivery is not confirmed as standard for every order. Ask about payment terms directly when confirming your order.'],
    [['order','how to order','booking','purchase'],
      'Product, size/pack, quantity, city aur timeline bhejein. Availability aur quotation confirm hone ke baad terms finalize honge.',
      'Send the product, size/pack, quantity, city and timeline. Terms are finalized once availability and quotation are confirmed.'],
    [['track order','order status','kahan pahunchi delivery'],
      'Order tracking ka koi automated system listed nahi hai. Status directly WhatsApp par apna order number/naam bhej kar poochain.',
      'There\'s no listed automated order-tracking system. Ask about status directly on WhatsApp with your order number or name.'],
    [['response','reply','jawab kab','urgent'],
      'WhatsApp fastest route hai. Complete details response ko useful banati hain; exact response-time guarantee listed nahi.',
      'WhatsApp is the fastest route. Complete details make the response more useful; there is no listed guaranteed response time.'],
    [['photos','video','stock image','current picture'],
      'Specific palm ke current dated photos/video mangwayein. Editorial website image ko individual stock confirmation na samjhein.',
      'Ask for current, dated photos/video of the specific palm. Don\'t treat editorial website images as confirmation of individual stock.'],
    [['certificate','certification','license','award'],
      'Certifications aur awards public audit mein verify nahi huay. Procurement ke liye official documents directly request karein.',
      'Certifications and awards were not verified in our public audit. For procurement purposes, request official documents directly.'],
    [['experience','years','company history','team'],
      'Exact years aur team biographies public sources se verify nahi huin; website invented experience claim nahi karti.',
      'Exact years in business and team biographies were not verified from public sources; this website does not invent experience claims.'],
    [['ceo','founder','owner','who runs this'],
      'Khairpur Date Palm & Nursery ke Founder & CEO Tanveer Hussain Kanhar hain — About page par unka poora profile aur direct WhatsApp contact mojood hai.',
      'The Founder & CEO of Khairpur Date Palm & Nursery is Tanveer Hussain Kanhar — his full profile and direct WhatsApp contact are on the About page.'],
    [['return','refund','cancel','cancellation'],
      'Return/refund terms public content mein verified nahi. Order se pehle written commercial terms lein.',
      'Return/refund terms are not verified from public content. Get written commercial terms before ordering.'],
    [['invoice','bill','tax invoice','receipt'],
      'Invoice aur tax-document availability directly confirm karein; required documents quote request mein mention karein.',
      'Confirm invoice and tax-document availability directly; mention any required documents in your quote request.'],
    [['soil','zameen','salty soil','drainage'],
      'Drainage, irrigation aur site conditions establishment mein matter karti hain. Final agronomic advice site assessment se honi chahiye.',
      'Drainage, irrigation and site conditions all matter for establishment. Final agronomic advice should come from a site assessment.'],
    [['fertilizer','khaad','fertilizer schedule','feeding'],
      'Fertilizer schedule palm ki age, soil aur growth stage par depend karta hai. Generic schedule follow karne se pehle nursery se apne plant ke liye confirm karein.',
      'Fertilizer schedule depends on the palm\'s age, soil and growth stage. Confirm a plan for your specific plant with the nursery before following any generic schedule.'],
    [['pest','disease','bimari','keeda','pest control'],
      'Pest ya disease dikhne par current dated photo/video nursery ko bhejein — generic advice se specific issue diagnose nahi ho sakta.',
      'If you notice a pest or disease, send a current, dated photo/video to the nursery — generic advice can\'t diagnose a specific issue.'],
    [['pruning','trimming','katai','leaf cutting'],
      'Pruning service site assessment ke baad confirm hoti hai. Palm ki age aur condition dekh kar scope tay hota hai.',
      'Pruning service is confirmed after a site assessment. Scope is decided based on the palm\'s age and condition.'],
    [['spacing','distance','plant distance','layout'],
      'Spacing objective, variety, machinery aur mature canopy par depend karti hai. Farm layout site-specific plan karein.',
      'Spacing depends on your objective, variety, machinery access and mature canopy size. Plan your farm layout on a site-specific basis.'],
    [['season','best time','planting time','kab lagayen','best time to plant'],
      'Planting window location, heat, irrigation aur palm size se change hoti hai. City aur timeline share karein.',
      'The planting window changes with location, heat, irrigation and palm size. Share your city and timeline for advice.'],
    [['climate','hot weather','dry area','heat tolerant'],
      'Date palms generally garam aur dry climate mein achi tarah grow karti hain, magar establishment period mein irrigation zaroori hoti hai.',
      'Date palms generally grow well in hot, dry climates, but irrigation is essential during the establishment period.'],
    [['assistant','offline','internet','app install'],
      'Yeh curated assistant install ke baad offline chal sakta hai. Live stock, rates aur final terms ke liye nursery confirmation zaroori hai.',
      'This curated assistant can work offline once installed. Live stock, rates and final terms always need direct nursery confirmation.'],
    [['hello','hi','salam','assalam','good morning'],
      'Assalam-o-Alaikum! Khush aamdeed. Aap date palms, date products, delivery ya installation ke baare mein kuch bhi pooch saktay hain.',
      'Hello, welcome! You can ask me anything about date palms, date products, delivery or installation.'],
    [['thank you','thanks','shukriya','jazakallah'],
      'Khushi hui madad kar ke! Kisi aur sawal ke liye yahan maujood hoon, ya seedha WhatsApp par baat karein.',
      'Happy to help! I\'m here for any other questions, or you can message us directly on WhatsApp.']
  ];
  const norm = (s) => s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
  const words = (s) => norm(s).split(' ').filter((w) => w.length > 1);
  const ENGLISH_MARKERS = new Set(['the','is','are','what','how','can','you','your','do','does','will','price','cost','when','where','which','have','has','delivery','install','plant','plants','palm','palms','available','much','many','need','want','please','tell','about','with','for','and','a','an','of','to']);
  const URDU_MARKERS = new Set(['hai','hain','kya','kaise','kitna','kitne','kitni','chahiye','mein','ka','ki','ke','aur','se','wala','wali','hoga','hogi','milta','milti','karte','karti','karein','bhejein','krna','krni','pata','btao','bata','ho','hota','hoti','sakta','sakte','kar']);
  const detectLang = (q) => {
    let en = 0, ur = 0;
    words(q).forEach((w) => { if (ENGLISH_MARKERS.has(w)) en++; if (URDU_MARKERS.has(w)) ur++; });
    return en > ur ? 'en' : 'ur';
  };
  const HEIGHT_ANSWER = {
    ur: 'Aseel approximately 1–20 ft aur Qarbala 1–10 ft tak available hain. Aap jo height chahiye us ke liye current stock aur price WhatsApp par confirm karein — har size har waqt available nahi hota.',
    en: 'Aseel is available at approximately 1–20 ft and Qarbala at 1–10 ft. For the exact height you want, confirm current stock and price on WhatsApp — not every size is in stock at all times.'
  };
  const answer = (question) => {
    const q = norm(question), qt = new Set(words(q)); let best, top = 0;
    // Direct height query, e.g. "10ft", "6 feet", "12 foot", "8 fit" — customers often
    // just type a number + unit. Map straight to the height/availability answer.
    if (/\b\d{1,2}\s?(ft|fit|feet|foot|foota?n?)\b/.test(q) || /^\d{1,2}$/.test(q)) return HEIGHT_ANSWER;
    K.forEach(([topics, ur, en]) => topics.forEach((topic) => {
      const p = norm(topic);
      let score = q.includes(p) ? 8 + words(p).length : 0;
      words(p).forEach((w) => { if (qt.has(w)) score += w.length > 4 ? 2 : 1; });
      if (score > top) { top = score; best = { ur, en }; }
    }));
    return top >= 2 ? best : null;
  };
  const ui=document.createElement('aside'); ui.className='assistant-shell';
  ui.innerHTML=`<button class="assistant-trigger" type="button" aria-expanded="false"><span class="assistant-trigger-logo"><img src="assets/khairpur-logo.jpg" alt=""></span><b>Palm & Date Guide</b><small><i></i> Ready to help</small></button><section class="assistant-panel" hidden><header><div class="assistant-identity"><span class="assistant-brandmark"><img src="assets/khairpur-logo.jpg" alt=""></span><div><strong>Khairpur Guide</strong><small><i></i> Available offline</small></div></div><button class="assistant-close" type="button" aria-label="Close">×</button></header><div class="assistant-messages" aria-live="polite"><div class="assistant-message bot"><b>Assalam-o-Alaikum!</b> Common sawal select karein ya apna sawal Roman Urdu / English mein type karein.</div></div><div class="assistant-suggestions"><button>Aseel ki price?</button><button>Delivery hoti hai?</button><button>Date products?</button><button class="assistant-browse" aria-expanded="false">＋ View all</button></div><div class="assistant-question-library" hidden><strong>Popular questions</strong><div><button>Aseel aur Qarbala mein kya farq hai?</button><button>Kaun se sizes available hain?</button><button>Current stock kaise check karun?</button><button>Female fruiting palm milti hai?</button><button>Farmhouse ke liye konsi palm?</button><button>Orchard plantation karte hain?</button><button>Delivery charges kitne hain?</button><button>Installation service available hai?</button><button>Mature palm kaise install hoti hai?</button><button>Aftercare aur watering kya hogi?</button><button>Fresh Aseel dates kab milti hain?</button><button>Dry dates / chuhara available?</button><button>Date paste ka MOQ kya hai?</button><button>Date syrup available hai?</button><button>Wholesale order kaise karein?</button><button>Export kin countries mein hota hai?</button><button>Packaging options kya hain?</button><button>Nursery location aur timing?</button><button>Bulk order pe discount milta hai?</button><button>Fertilizer schedule kya hai?</button><button>What is the price of Aseel palm?</button><button>Do you deliver outside Khairpur?</button></div></div><form class="assistant-form"><label class="sr-only" for="assistant-question">Sawal</label><input id="assistant-question" maxlength="180" autocomplete="off" placeholder="Type your question…"><button aria-label="Send"><span>→</span></button></form><p class="assistant-note"><span>Private by design</span> • Live stock aur rate nursery se confirm karein.</p></section>`;
  document.body.append(ui); const panel=ui.querySelector('.assistant-panel'), trigger=ui.querySelector('.assistant-trigger'), input=ui.querySelector('input'), messages=ui.querySelector('.assistant-messages');
  const toggle=(open)=>{panel.hidden=!open;trigger.setAttribute('aria-expanded',String(open));if(open)input.focus()}; trigger.onclick=()=>toggle(panel.hidden); ui.querySelector('.assistant-close').onclick=()=>toggle(false);
  const ask=(q)=>{
    if(!q.trim())return;
    const user=document.createElement('div');user.className='assistant-message user';user.textContent=q;messages.append(user);
    const bot=document.createElement('div');bot.className='assistant-message bot';
    const lang=detectLang(q);
    const reply=answer(q);
    if(reply){bot.textContent=reply[lang]||reply.ur}
    else{
      const fallback=lang==='en'?'I don’t have a direct answer to that here — the team will help you quickly on WhatsApp.':'Is sawal ka seedha jawab yahan mere paas nahi — team WhatsApp par foran madad kar degi.';
      const cta=lang==='en'?'Ask on WhatsApp →':'WhatsApp par poochein →';
      bot.innerHTML=`${fallback} <a target="_blank" rel="noopener" href="https://wa.me/${PHONE}?text=${encodeURIComponent('Assalam-o-Alaikum, mera sawal hai: '+q)}">${cta}</a>`;
    }
    messages.append(bot);messages.scrollTop=messages.scrollHeight;
  };
  ui.querySelector('form').onsubmit=(e)=>{e.preventDefault();ask(input.value);input.value=''};
  const library=ui.querySelector('.assistant-question-library'), browse=ui.querySelector('.assistant-browse');
  browse.onclick=()=>{const open=library.hidden;library.hidden=!open;browse.setAttribute('aria-expanded',String(open));browse.textContent=open?'− Hide':'＋ View all'};
  ui.querySelectorAll('.assistant-suggestions button:not(.assistant-browse),.assistant-question-library button').forEach((b)=>b.onclick=()=>{ask(b.textContent);library.hidden=true;browse.setAttribute('aria-expanded','false');browse.textContent='＋ View all'});
  let installPrompt; const install=document.createElement('button');install.type='button';install.className='install-app';install.innerHTML='<span>↓</span><b>Install website app</b><small>Fast access • Works offline</small>';document.body.append(install);if(/android|iphone|ipad|ipod/i.test(navigator.userAgent)&&!matchMedia('(display-mode: standalone)').matches)install.classList.add('is-ready');
  addEventListener('beforeinstallprompt',(e)=>{e.preventDefault();installPrompt=e;install.classList.add('is-ready')});addEventListener('appinstalled',()=>install.remove());
  install.onclick=async()=>{if(installPrompt){installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;install.classList.remove('is-ready')}else if(/iphone|ipad|ipod/i.test(navigator.userAgent))alert('Safari mein Share dabayein, phir “Add to Home Screen” select karein.');else alert('Browser menu mein “Install app” ya “Add to Home screen” select karein. Website HTTPS par open honi chahiye.')};
  if('serviceWorker' in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('sw.js');
})();
