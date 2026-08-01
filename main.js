// ── DATOS ──
// Número de WhatsApp del negocio (formato internacional sin + ni espacios)
const WHATSAPP='59894421186';
const P={
  c:{label:'Compacto',    basico:790, completo:1000,premium:1680,exterior:560,interior:700,artesanal:700},
  a:{label:'Auto/Cross.', basico:890, completo:1110,premium:1960,exterior:670,interior:800,artesanal:800},
  s:{label:'SUV/Pick-Up', basico:1090,completo:1220,premium:2240,exterior:780,interior:950,artesanal:900},
  x:{label:'XXL',         basico:1110,completo:1390,premium:2400,exterior:900,interior:1050,artesanal:1000}
};
const SVCS=[
  {nm:'BÁSICO',badge:'Más popular',feat:true,key:'basico',desc:'Exterior + interior + vidrios + ruedas.',inc:['Lavado exterior completo','Aspirado interior','Vidrios internos y externos','Ruedas y llantas']},
  {nm:'COMPLETO',badge:'Recomendado',feat:false,key:'completo',desc:'Básico + cera + plásticos exteriores.',inc:['Todo el Básico','Cera líquida aplicada','Plásticos exteriores tratados']},
  {nm:'PREMIUM',badge:'Top nivel',feat:false,key:'premium',desc:'Completo + espuma + mano + renovador.',inc:['Todo el Completo','Espuma activa','Tratamiento a mano','Renovador int/ext']},
  {nm:'EXTERIOR',badge:'',feat:false,key:'exterior',desc:'Solo carrocería, vidrios y ruedas.',inc:['Carrocería exterior','Vidrios exteriores','Ruedas y llantas']},
  {nm:'INTERIOR',badge:'',feat:false,key:'interior',desc:'Limpieza interior con aspirado profundo.',inc:['Aspirado profundo','Tablero','Tapizados']},
  {nm:'ARTESANAL',badge:'',feat:false,key:'artesanal',desc:'Lavado a mano en pasta.',inc:['Lavado manual','Pasta premium','Acabado a mano']}
];
const PLANS=[
  {id:'esen',nm:'ESENCIAL',pill:'esen',hd:'esen',lavs:4,desc:'1 lavado por semana',disc:.16,btn:'out',feats:['Básico completo','Aspirado interior','Vidrios y ruedas','Ambas sucursales','10% dto. extras']},
  {id:'comp',nm:'COMPLETO',pill:'comp',hd:'comp',lavs:6,desc:'1 lavado cada 5 días',disc:.22,btn:'',feat:true,feats:['Básico completo','Aspirado interior','Cera líquida incluida','Plásticos tratados','Ambas sucursales','15% dto. extras']},
  {id:'prem',nm:'PREMIUM',pill:'prem',hd:'prem',lavs:8,desc:'2 lavados por semana',disc:.27,btn:'out',feats:['Todo el Completo','Espuma activa','Renovador int/ext','1 interior/mes','Prioridad turno']}
];
const VL={c:'Compact.',a:'Auto',s:'SUV',x:'XXL'};

const MENU={
  bebidas:[
    {icon:'☕',nm:'Café Espresso',desc:'Doble shot premium.',price:'$120',promo:false},
    {icon:'🥛',nm:'Café con Leche',desc:'Con leche cremosa al vapor.',price:'$160',promo:false},
    {icon:'🧃',nm:'Jugo Natural',desc:'Naranja, pomelo o manzana.',price:'$180',promo:false},
    {icon:'🧉',nm:'Mate Cocido',desc:'Con leche o agua.',price:'$100',promo:false},
    {icon:'🥤',nm:'Licuados',desc:'Frutilla, banana, mango.',price:'$220',promo:false},
    {icon:'💧',nm:'Agua / Bebidas',desc:'Agua mineral y refrescos.',price:'Desde $80',promo:false}
  ],
  comidas:[
    {icon:'🥐',nm:'Medialunas (x3)',desc:'Frescas del día.',price:'$150',promo:true},
    {icon:'🥪',nm:'Sándwich Clásico',desc:'Jamón y queso, caprese o veg.',price:'$320',promo:false},
    {icon:'🧇',nm:'Tostadas Completas',desc:'Con manteca, mermelada y queso.',price:'$220',promo:false},
    {icon:'🍩',nm:'Facturas Variadas',desc:'Selección del día.',price:'$90 c/u',promo:false},
    {icon:'🥗',nm:'Ensalada Fresca',desc:'Estacional con aderezo.',price:'$280',promo:false},
    {icon:'🍫',nm:'Snacks y Golosinas',desc:'Alfajores, chocolates.',price:'Desde $60',promo:false}
  ],
  combos:[
    {icon:'⭐',nm:'Combo Desayuno',desc:'Café + 2 medialunas + jugo.',price:'$320',promo:true},
    {icon:'🚗',nm:'Combo Lavado + Café',desc:'Con ticket de lavado: -15%.',price:'-15%',promo:true},
    {icon:'🥪',nm:'Combo Almuerzo',desc:'Sándwich + bebida + fruta.',price:'$450',promo:false},
    {icon:'☕',nm:'Combo Café Doble',desc:'Dos cafés + 4 medialunas.',price:'$390',promo:false}
  ]
};

const GALLERY=[
  {cat:'lavadero',title:'Lavado automático',desc:'Tecnología ISTOBAL M\'NEX22 en acción',icon:'🚗',size:'wide',tag:'Lavadero'},
  {cat:'lavadero',title:'Sistema de cepillos',desc:'Cuidado profesional para cada superficie',icon:'🧽',size:'',tag:'Lavadero'},
  {cat:'equipo',title:'Nuestro equipo',desc:'Profesionales capacitados',icon:'👥',size:'',tag:'Equipo'},
  {cat:'lubri',title:'Cambio de aceite',desc:'Servicio rápido y profesional',icon:'🛢️',size:'tall',tag:'Lubricentro'},
  {cat:'cafe',title:'Cafetería',desc:'Espacio cómodo mientras esperás',icon:'☕',size:'',tag:'Cafetería'},
  {cat:'pista',title:'Surtidores ANCAP',desc:'Pista de combustibles',icon:'⛽',size:'wide',tag:'Pista'},
  {cat:'lavadero',title:'Resultado final',desc:'Brillo profesional',icon:'✨',size:'',tag:'Lavadero'},
  {cat:'cafe',title:'Menú variado',desc:'Café de especialidad y más',icon:'🥐',size:'',tag:'Cafetería'},
  {cat:'lubri',title:'Servicio profesional',desc:'Atención experta',icon:'🔧',size:'',tag:'Lubricentro'},
  {cat:'equipo',title:'Atención al cliente',desc:'Siempre a tu disposición',icon:'🤝',size:'wide',tag:'Equipo'},
  {cat:'lavadero',title:'Detallado interior',desc:'Aspirado y limpieza completa',icon:'🚿',size:'',tag:'Lavadero'},
  {cat:'pista',title:'Sucursales',desc:'Las Focas y Roosevelt',icon:'📍',size:'',tag:'Pista'}
];

let cv='c', selDate=null, selTime=null, resType='lavadero';

// ── BANNER ROTATIVO ──
let bannerIdx=0;
const totalBanners=4;
function setBanner(i){
  bannerIdx=i;
  document.getElementById('bannerTrack').style.transform=`translateX(-${i*100}%)`;
  document.querySelectorAll('.banner-dot').forEach((d,idx)=>d.classList.toggle('active',idx===i));
}
function nextBanner(){setBanner((bannerIdx+1)%totalBanners)}
function initBanner(){
  const dotsEl=document.getElementById('bannerDots');
  for(let i=0;i<totalBanners;i++){
    const d=document.createElement('div');
    d.className='banner-dot'+(i===0?' active':'');
    d.onclick=()=>setBanner(i);
    dotsEl.appendChild(d);
  }
  setInterval(nextBanner,5000);
}

// ── SERVICIOS ──
function setV(v,btn){
  cv=v;
  document.querySelectorAll('.vtab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  renderSvc();
}
function renderSvc(){
  const p=P[cv];
  document.getElementById('svcGrid').innerHTML=SVCS.map(s=>`
    <div class="svc-card${s.feat?' feat':''}">
      ${s.badge?`<div class="sc-badge">${s.badge}</div>`:'<div style="height:22px"></div>'}
      <div class="sc-name">${s.nm}</div>
      <div class="sc-desc">${s.desc}</div>
      <ul class="sc-inc">${s.inc.map(i=>`<li>${i}</li>`).join('')}</ul>
      <div class="sc-price-box"><div class="pv">${p.label}</div><div class="pn">$${p[s.key].toLocaleString('es-UY')}<span> UY</span></div></div>
    </div>`).join('');
}

// ── PLANES ──
function renderPlans(){
  document.getElementById('plansGrid').innerHTML=PLANS.map(pl=>{
    const base=P.c[pl.id==='esen'?'basico':pl.id==='comp'?'completo':'premium'];
    const unit=Math.round(base*(1-pl.disc)/10)*10;
    const tot=unit*pl.lavs, sav=base*pl.lavs-tot;
    return`<div class="plan-card${pl.feat?' feat':''}">
      <div class="plan-hd ${pl.hd}">
        <div class="plan-pill ${pl.pill}">${pl.nm}</div>
        <div class="plan-name">${pl.nm}</div>
        <div class="plan-lavs">${pl.lavs} lavados · ${pl.desc}</div>
        <div class="plan-pr"><div class="plan-big" id="pb-${pl.id}">$${tot.toLocaleString('es-UY')}</div><div class="plan-unit">/mes</div></div>
        <div class="plan-save">Ahorrás $<span id="ps-${pl.id}">${sav.toLocaleString('es-UY')}</span>/mes</div>
      </div>
      <div class="plan-bd">
        <div class="pvtabs">${Object.entries(VL).map(([k,v])=>`<button class="pvtab${k==='c'?' active':''}" onclick="updPlan('${pl.id}','${k}',${pl.disc},${pl.lavs},'${pl.id==='esen'?'basico':pl.id==='comp'?'completo':'premium'}',this)">${v}</button>`).join('')}</div>
        ${pl.feats.map(f=>`<div class="pf"><span class="ck">✓</span><span>${f}</span></div>`).join('')}
        <a href="#" onclick="suscribirWA('${pl.nm}');return false;" class="plan-btn ${pl.btn}">Suscribirme →</a>
      </div>
    </div>`;
  }).join('');
}
function updPlan(id,v,disc,lavs,skey,btn){
  btn.closest('.pvtabs').querySelectorAll('.pvtab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const base=P[v][skey],unit=Math.round(base*(1-disc)/10)*10;
  document.getElementById('pb-'+id).textContent='$'+(unit*lavs).toLocaleString('es-UY');
  document.getElementById('ps-'+id).textContent=(base*lavs-unit*lavs).toLocaleString('es-UY');
}

// ── RESERVAS — LAVADERO o LUBRICENTRO ──
const SVC_LAVADERO=[
  {v:'basico',n:'Car Wash Básico'},
  {v:'completo',n:'Car Wash Completo'},
  {v:'premium',n:'Car Wash Premium'},
  {v:'exterior',n:'Solo Exterior'},
  {v:'interior',n:'Solo Interior'},
  {v:'artesanal',n:'Artesanal'},
  {v:'detail',n:'Car Detail (consultar)'}
];
const SVC_LUBRI=[
  {v:'aceite',n:'Cambio de aceite (30 min)'},
  {v:'filtros',n:'Cambio de filtros (20 min)'},
  {v:'aceite-filtros',n:'Aceite + filtros (45 min)'},
  {v:'fluidos',n:'Revisión de fluidos (20 min)'},
  {v:'lubricantes',n:'Colocación de lubricantes (30 min)'},
  {v:'revision',n:'Revisión general (25 min)'}
];

function setResType(type,btn){
  resType=type;
  document.querySelectorAll('.res-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  // Toggle UI
  document.getElementById('lubriInfo').style.display=type==='lubricentro'?'block':'none';
  document.getElementById('vehDataExtra').style.display=type==='lubricentro'?'block':'none';
  document.getElementById('resFormTitle').textContent=type==='lavadero'?'COMPLETAR RESERVA — LAVADERO':'COMPLETAR RESERVA — LUBRICENTRO';
  document.getElementById('lblServicio').textContent=type==='lavadero'?'Servicio de lavado':'Servicio del lubricentro';
  // Repoblar select de servicios
  const sel=document.getElementById('resServicio');
  const opts=type==='lavadero'?SVC_LAVADERO:SVC_LUBRI;
  sel.innerHTML='<option value="">Elegí un servicio</option>'+opts.map(o=>`<option value="${o.v}">${o.n}</option>`).join('');
}

// ── CALENDARIO ──
let calYear, calMonth;
const today=new Date();
calYear=today.getFullYear(); calMonth=today.getMonth();
const MESES=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

function renderCal(){
  document.getElementById('calTitle').textContent=MESES[calMonth]+' '+calYear;
  const firstDay=new Date(calYear,calMonth,1).getDay();
  const daysInMonth=new Date(calYear,calMonth+1,0).getDate();
  let html='';
  for(let i=0;i<firstDay;i++) html+=`<div class="cal-day empty"></div>`;
  for(let d=1;d<=daysInMonth;d++){
    const date=new Date(calYear,calMonth,d);
    const isPast=date<new Date(today.getFullYear(),today.getMonth(),today.getDate());
    const isToday=(calYear===today.getFullYear()&&calMonth===today.getMonth()&&d===today.getDate());
    const isSel=(selDate&&selDate.d===d&&selDate.m===calMonth&&selDate.y===calYear);
    const dow=date.getDay();
    const isClosed=(dow===0&&d%3===0);
    const avail=isPast||isClosed?'':d%5===0?'full':d%3===0?'busy':'available';
    let cls='cal-day';
    if(isPast) cls+=' past';
    else if(isClosed) cls+=' past';
    else if(isSel) cls+=' selected';
    else if(isToday) cls+=' today';
    if(!isPast&&!isClosed) cls+=` ${avail}`;
    const click=(!isPast&&!isClosed)?`onclick="selectDate(${d},${calMonth},${calYear},'${avail}')"`:'';
    html+=`<div class="${cls}" ${click}>${d}</div>`;
  }
  document.getElementById('calGrid').innerHTML=html;
}
function changeMonth(dir){
  calMonth+=dir;
  if(calMonth>11){calMonth=0;calYear++;}
  if(calMonth<0){calMonth=11;calYear--;}
  renderCal();
}
function selectDate(d,m,y,avail){
  if(avail==='full'){showToast('Sin turnos disponibles para ese día.');return;}
  selDate={d,m,y};
  const rfSel=document.getElementById('rfSelected');
  rfSel.textContent=`📅 ${d} de ${MESES[m]} de ${y}`;
  rfSel.classList.add('show');
  renderCal();
  renderTimeSlots();
}
function renderTimeSlots(){
  const suc=document.getElementById('resSucursal').value;
  const tg=document.getElementById('timeGrid');
  if(!selDate||!suc){tg.innerHTML='<div style="grid-column:1/-1;font-size:13px;color:var(--gray);padding:10px 0">Seleccioná sucursal y fecha primero</div>';return;}
  const slots=['08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30'];
  const fullSlots=[2,5,8,11,14];
  tg.innerHTML=slots.map((t,i)=>{
    const isFull=fullSlots.includes(i);
    return`<button class="time-slot${isFull?' ts-full':''}" onclick="${isFull?'':'selectTime(\''+t+'\',this)'}">${t}${isFull?'<br><span style=\'font-size:9px\'>Lleno</span>':''}</button>`;
  }).join('');
}
function selectTime(t,btn){
  selTime=t;
  document.querySelectorAll('.time-slot').forEach(b=>b.classList.remove('ts-selected'));
  btn.classList.add('ts-selected');
}
function submitReserva(){
  const nm=document.getElementById('resNombre').value.trim();
  const tel=document.getElementById('resTel').value.trim();
  const pat=document.getElementById('resPatente').value.trim();
  const suc=document.getElementById('resSucursal').value;
  const svc=document.getElementById('resServicio').value;
  if(!nm||!tel||!pat||!suc||!svc||!selDate||!selTime){showToast('⚠ Completá todos los campos.');return;}
  const sucLabel=suc==='2030'?'Las Focas / El Remanso (20/30)':'Naciones Unidas / Roosevelt';
  const dateStr=`${selDate.d} de ${MESES[selDate.m]} de ${selDate.y}`;
  const tipo=resType==='lavadero'?'Lavadero':'Lubricentro';
  const svcList=resType==='lavadero'?SVC_LAVADERO:SVC_LUBRI;
  const svcObj=svcList.find(s=>s.v===svc);
  const svcName=svcObj?svcObj.n:svc;
  const vehExtra=document.getElementById('resVehiculo')?document.getElementById('resVehiculo').value.trim():'';
  let msg=`Hola! Quiero reservar un turno de *${tipo}* en Veinte&30 CarWash.\n\n`;
  msg+=`📋 *Servicio:* ${svcName}\n`;
  msg+=`📅 *Fecha:* ${dateStr}\n`;
  msg+=`🕐 *Hora:* ${selTime}\n`;
  msg+=`📍 *Sucursal:* ${sucLabel}\n`;
  msg+=`🚗 *Matrícula:* ${pat.toUpperCase()}\n`;
  if(vehExtra) msg+=`🔧 *Vehículo:* ${vehExtra}\n`;
  msg+=`\n👤 *Nombre:* ${nm}\n`;
  msg+=`📱 *Teléfono:* ${tel}\n`;
  msg+=`\n¡Quedo a la espera de la confirmación! Gracias.`;
  const url=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  showToast('✓ Abriendo WhatsApp para confirmar tu reserva...');
  setTimeout(()=>window.open(url,'_blank'),600);
}
function toggleSubmit(){
  document.getElementById('resSubmit').disabled=!document.getElementById('resCheck').checked;
}
function submitContacto(){
  const nm=document.getElementById('ctNombre').value.trim();
  const tel=document.getElementById('ctTel').value.trim();
  const mot=document.getElementById('ctMotivo').value;
  const suc=document.getElementById('ctSuc').value;
  const consulta=document.getElementById('ctMsg').value.trim();
  if(!nm||!consulta){showToast('⚠ Completá al menos tu nombre y la consulta.');return;}
  let msg=`Hola! Tengo una consulta para Veinte&30 CarWash.\n\n`;
  msg+=`👤 *Nombre:* ${nm}\n`;
  if(tel) msg+=`📱 *Teléfono:* ${tel}\n`;
  if(mot) msg+=`📋 *Motivo:* ${mot}\n`;
  if(suc) msg+=`📍 *Sucursal:* ${suc}\n`;
  msg+=`\n💬 *Consulta:* ${consulta}`;
  const url=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  showToast('✓ Abriendo WhatsApp...');
  setTimeout(()=>window.open(url,'_blank'),600);
}
function suscribirWA(plan){
  const msg=`Hola! Me interesa la suscripción *${plan}* de Veinte&30 CarWash. ¿Me pueden dar más info para suscribirme? Gracias!`;
  const url=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  window.open(url,'_blank');
}

// ── MENÚ CAFETERÍA ──
let menuTab='bebidas';
function setMenuTab(tab,btn){
  menuTab=tab;
  document.querySelectorAll('.menu-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  renderMenu();
}
function renderMenu(){
  document.getElementById('menuGrid').innerHTML=MENU[menuTab].map(it=>`
    <div class="menu-item${it.promo?' promo':''}">
      ${it.promo?'<div class="promo-badge">Promo</div>':''}
      <div class="mi-icon">${it.icon}</div>
      <div class="mi-name">${it.nm}</div>
      <div class="mi-desc">${it.desc}</div>
      <div class="mi-price">${it.price}</div>
    </div>`).join('');
}

// ── GALERÍA ──
let galleryFilter='all';
function filterGallery(cat,btn){
  galleryFilter=cat;
  document.querySelectorAll('.gf-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderGallery();
}
function renderGallery(){
  const items=galleryFilter==='all'?GALLERY:GALLERY.filter(g=>g.cat===galleryFilter);
  document.getElementById('galleryGrid').innerHTML=items.map((g,i)=>`
    <div class="gallery-item ${g.size}" onclick="openLightbox(${GALLERY.indexOf(g)})">
      <div class="gi-grid-bg"></div>
      <div class="gi-tag">${g.tag}</div>
      <div class="gi-icon">${g.icon}</div>
      <div class="gi-overlay">
        <div class="gi-title">${g.title}</div>
        <div class="gi-cat">${g.tag}</div>
      </div>
    </div>`).join('');
}
function openLightbox(idx){
  const g=GALLERY[idx];
  document.getElementById('lbIcon').textContent=g.icon;
  document.getElementById('lbTitle').textContent=g.title;
  document.getElementById('lbCat').textContent=g.tag;
  document.getElementById('lbDesc').textContent=g.desc;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow='';
}

// ── MODAL T&C ──
function openModal(){document.getElementById('tcModal').classList.add('open');document.body.style.overflow='hidden'}
function closeModal(){document.getElementById('tcModal').classList.remove('open');document.body.style.overflow=''}
function closeModalOutside(e){if(e.target===document.getElementById('tcModal'))closeModal()}
function acceptTC(){
  document.getElementById('resCheck').checked=true;
  toggleSubmit();
  closeModal();
  showToast('✓ Términos y condiciones aceptados.');
}

// ── UTILS ──
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),4000);
}
function closeMob(){document.getElementById('mm').classList.remove('open')}

const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis')})},{threshold:.08});
document.querySelectorAll('.fi').forEach(el=>obs.observe(el));

// ── INIT ──
renderSvc();renderPlans();renderCal();renderMenu();renderGallery();initBanner();
setResType('lavadero',document.querySelector('.res-tab.active'));