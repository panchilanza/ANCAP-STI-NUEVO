/* ==========================================================================
   DATOS DEL NEGOCIO — editá acá para actualizar contenido, precios y textos.
   Los valores marcados como EJEMPLO son estimados: reemplazar por cifras
   reales antes de publicar el sitio. Los datos SIN esa marca (direcciones,
   teléfono, RUT, precios de lubricentro y Car Detail) son los que ya tenías
   cargados y se mantuvieron tal cual.
   ========================================================================== */

const EMPRESA = {
  nombre:'Veinte&30',
  razonSocial:'STI Ltda.',
  rut:'100062160016',
  telefono:'+598 94 421 186',
  horarioGeneral:'Lun a Vie 08:00–19:00 · Sáb 08:00–18:00 · Dom y feriados 09:00–15:00',
  sucursales:[
    {id:'2030', badge:'Sucursal 20/30', nombre:'Las Focas &amp; El Remanso',
      direccion:'Calle Las Focas 0006 esq. El Remanso, Punta del Este, Maldonado',
      mapsQuery:'Calle+Las+Focas+Punta+del+Este+Uruguay'},
    {id:'roos', badge:'Sucursal Roosevelt', nombre:'Naciones Unidas &amp; Roosevelt',
      direccion:'Calle Naciones Unidas 0055 — Parada 11, Punta del Este, Maldonado',
      mapsQuery:'Naciones+Unidas+55+Punta+del+Este+Uruguay'}
  ]
};

// PROMOCIONES — banner rotativo
const PROMOS = [
  '15% OFF en tu primer lavado al suscribirte hoy.',
  'Nuevo: reservá tu cambio de aceite online.',
  'Ganá puntos en cada servicio con el programa de fidelidad.',
  'Cargá +30L y llevate $100 de descuento en tu lavado.'
];

// ESTADÍSTICAS DEL HERO (marcadas EJEMPLO donde no hay cifra real confirmada)
const HERO_STATS = [
  {valor:'2', label:'sucursales'},
  {valor:'+10K', label:'lavados por año (EJEMPLO)'},
  {valor:'7', label:'días por semana'},
  {valor:'ANCAP', label:'estación oficial'}
];

// TIPOS DE VEHÍCULO (tabs de servicios)
const VEHICULOS = [
  {id:'compacto', label:'Compacto'},
  {id:'auto', label:'Auto / Crossover'},
  {id:'suv', label:'SUV / Pick-Up'},
  {id:'xxl', label:'XXL'}
];

// SERVICIOS DE LAVADO — precios EJEMPLO en $UY por tipo de vehículo, reemplazar por valores reales
const SERVICIOS_LAVADO = [
  {id:'expres', nombre:'Lavado Exprés', badge:'', desc:'Lavado exterior automático, rápido.',
    incluye:['Lavado exterior automático','Secado'],
    precios:{compacto:180, auto:200, suv:230, xxl:260}},
  {id:'completo', nombre:'Lavado Completo', badge:'Más elegido', desc:'Exterior + aspirado interior + vidrios + ruedas.',
    incluye:['Lavado exterior automático','Aspirado interior','Vidrios y ruedas','Secado a mano'],
    precios:{compacto:250, auto:280, suv:320, xxl:370}},
  {id:'premium', nombre:'Lavado Premium', badge:'Alta gama', desc:'Lavado completo + cera protectora + plásticos.',
    incluye:['Todo lo del Lavado Completo','Cera protectora','Abrillantado de plásticos'],
    precios:{compacto:350, auto:390, suv:450, xxl:520}}
];

// SERVICIOS DEL LUBRICENTRO (precios ya provistos)
const LUBRICENTRO = [
  {nombre:'Cambio de aceite', duracion:'30 min', precio:'Desde $900'},
  {nombre:'Cambio de filtros', duracion:'20 min', precio:'Desde $450'},
  {nombre:'Aceite + filtros', duracion:'45 min', precio:'Desde $1.250'},
  {nombre:'Revisión de fluidos', duracion:'20 min', precio:'$300'},
  {nombre:'Colocación lubricantes', duracion:'30 min', precio:'Consultar'},
  {nombre:'Revisión general', duracion:'25 min', precio:'$400'}
];

// TIPOS DE RESERVA Y HORARIOS
const TIPOS_RESERVA = [
  {id:'lavadero', label:'Lavadero'},
  {id:'lubricentro', label:'Lubricentro'}
];
const HORARIOS = {
  lavadero:['09:00','10:00','11:00','12:00','14:00','15:00','16:00','17:00'],
  lubricentro:['09:00','11:00','14:00','16:00']
};

// PLANES WASH CLUB — precios EJEMPLO en $UY/mes, reemplazar por valores reales
const PLANES = [
  {id:'basico', nombre:'Básico', precio:450, recomendado:false, incluye:'4 Lavados Completos al mes',
    beneficios:['4 Lavados Completos al mes','Válido en ambas sucursales','10% off en lavados extra']},
  {id:'ilimitado', nombre:'Ilimitado', precio:890, recomendado:true, incluye:'Lavados Exprés y Completos ilimitados',
    beneficios:['Lavados Exprés y Completos ilimitados','Válido en ambas sucursales','Prioridad de turno','10% off en Car Detail']},
  {id:'premium', nombre:'Premium', precio:1490, recomendado:false, incluye:'Ilimitado + 1 detailing acrílico al mes',
    beneficios:['Todo lo del plan Ilimitado','1 Tratamiento Acrílico incluido por mes','15% off en Car Detail','Atención prioritaria']}
];
const PRECIO_LAVADO_SUELTO = 280; // referencia: Lavado Completo, vehículo "Auto" — para la calculadora de planes

// PROGRAMA DE FIDELIDAD — niveles por puntos acumulados
const NIVELES = [
  {id:'bronce', nombre:'Bronce', min:0, max:999, multiplicador:'1 punto por cada $50',
    beneficios:['Acceso a promociones exclusivas','Avisos prioritarios por WhatsApp']},
  {id:'plata', nombre:'Plata', min:1000, max:2999, multiplicador:'1,25 puntos por cada $50',
    beneficios:['5% descuento en cafetería','1 lavado básico de regalo en tu cumple']},
  {id:'oro', nombre:'Oro', min:3000, max:7999, multiplicador:'1,5 puntos por cada $50',
    beneficios:['10% descuento en cafetería','Prioridad en turnos','2 lavados de regalo al año']},
  {id:'platino', nombre:'Platino', min:8000, max:Infinity, multiplicador:'2 puntos por cada $50',
    beneficios:['15% descuento en cafetería','Atención preferencial','1 detailing al año de regalo','Invitaciones a eventos VIP']}
];
const PASOS_FIDELIDAD = [
  'Registrate y asocialo a tu patente. Sin tarjetas físicas, sin apps que instalar.',
  'Consumí y acumulá: cada lavado, café, carga de combustible o servicio del lubricentro suma puntos automáticamente.',
  'Canjeá tus puntos cuando quieras, en cualquiera de nuestras sucursales. Sin vencimiento durante 12 meses.'
];
const CANJES = [
  {icon:'☕', nombre:'Café Espresso', desc:'Doble shot a elección', costo:150},
  {icon:'🥐', nombre:'Medialunas (x3)', desc:'Frescas del día', costo:200},
  {icon:'🚗', nombre:'Lavado Básico', desc:'Compacto · incluye aspirado', costo:800},
  {icon:'✨', nombre:'Lavado Completo', desc:'Con cera + plásticos', costo:1200},
  {icon:'🛢️', nombre:'$500 descuento aceite', desc:'Aplicable en cambio de aceite', costo:600},
  {icon:'💎', nombre:'Abrillantado', desc:'Brillo profesional para tu auto', costo:350}
];

// MENÚ DE CAFETERÍA — EJEMPLO, reemplazar por carta real
const MENU_TABS = [{id:'bebidas',label:'☕ Bebidas'},{id:'comidas',label:'🥐 Comidas'},{id:'combos',label:'⭐ Combos'}];
const MENU = {
  bebidas:[
    {nombre:'Espresso', desc:'Simple o doble', precio:'$90'},
    {nombre:'Café con leche', desc:'Grande', precio:'$110'},
    {nombre:'Capuccino', desc:'Con canela o cacao', precio:'$130'},
    {nombre:'Jugo de naranja', desc:'Exprimido natural', precio:'$120'},
    {nombre:'Agua saborizada', desc:'500 ml', precio:'$80'},
    {nombre:'Té / mate cocido', desc:'Variedad de sabores', precio:'$90'}
  ],
  comidas:[
    {nombre:'Medialunas (x2)', desc:'Dulces o saladas', precio:'$100'},
    {nombre:'Tostado jamón y queso', desc:'Pan de campo', precio:'$180'},
    {nombre:'Sándwich de miga', desc:'x3 unidades', precio:'$160'},
    {nombre:'Alfajor', desc:'Artesanal', precio:'$90'},
    {nombre:'Barrita de cereal', desc:'Avena y frutos secos', precio:'$85'},
    {nombre:'Fruta de estación', desc:'Porción', precio:'$70'}
  ],
  combos:[
    {nombre:'Combo Mañana', desc:'Café + medialunas (x2)', precio:'$170'},
    {nombre:'Combo Ejecutivo', desc:'Café + tostado', precio:'$240'},
    {nombre:'Combo Fit', desc:'Jugo + barrita + fruta', precio:'$220'}
  ]
};

// CAR DETAIL — precios ya provistos, por tamaño de vehículo
const DETAILING = [
  {nombre:'Abrillantado', desc:'Todos los tamaños',
    precios:[{label:'Compact.',valor:'$240'},{label:'Auto',valor:'$275'},{label:'SUV',valor:'$315'},{label:'XXL',valor:'$370'}]},
  {nombre:'Tratamiento Acrílico', desc:'Protección duradera con cera acrílica',
    precios:[{label:'Compact.',valor:'$360'},{label:'Auto',valor:'$390'},{label:'SUV',valor:'$430'},{label:'XXL',valor:'$480'}]},
  {nombre:'Tratamiento Cerámico', desc:'Máxima protección. Hidrofóbico',
    precios:[{label:'Compact.',valor:'$500'},{label:'Auto',valor:'$540'},{label:'SUV',valor:'$645'},{label:'XXL',valor:'$690'}]},
  {nombre:'Limpieza Interior Profunda', desc:'Tapizados, tablero, plásticos y techos',
    precios:[{label:'Completo',valor:'USD 3.5'}]}
];
const ADICIONALES = [
  {nombre:'Chasis', precio:'USD 1.5'},
  {nombre:'Motor', precio:'USD 1.5'},
  {nombre:'Ópticas', precio:'$1.000 c/u'},
  {nombre:'Alquitrán', precio:'Desde $500'},
  {nombre:'Butaca', precio:'USD 1'},
  {nombre:'Techo/Piso', precio:'USD 1'}
];

// PISTA ANCAP — combustibles y servicios de estación
const PISTA = [
  {icon:'⛽', nombre:'Combustibles', desc:'Gasolina, Súper y Gasoil ANCAP.', precio:'Precio oficial ANCAP'},
  {icon:'🛢️', nombre:'Lubricantes', desc:'Cambio de aceite y filtros.', precio:'Desde consultar'},
  {icon:'🔧', nombre:'Check rápido', desc:'Revisión express de niveles y presión.', precio:'Sin cargo con combustible'},
  {icon:'💨', nombre:'Inflado', desc:'Estaciones de aire en ambas sucursales.', precio:'Sin cargo'}
];

// NOSOTROS — pilares y estadísticas (EJEMPLO donde corresponde)
const PILARES = [
  {icon:'⚡', titulo:'Rapidez', texto:'Ciclo de lavado completo en minutos.'},
  {icon:'🛡️', titulo:'Calidad garantizada', texto:'Control de calidad en cada lavado.'},
  {icon:'☕', titulo:'Experiencia completa', texto:'Lavadero, lubricentro y cafetería en un mismo lugar.'},
  {icon:'📍', titulo:'Dos ubicaciones', texto:'Cobertura en accesos principales de Punta del Este.'}
];
const ABOUT_STATS = [
  {valor:'+10K', label:'lavados por año (EJEMPLO)'},
  {valor:'2', label:'sucursales'},
  {valor:'7', label:'días por semana'},
  {valor:'100%', label:'control de calidad'}
];

/* ==========================================================================
   ESTADO Y LÓGICA — no hace falta editar de acá para abajo
   ========================================================================== */
function showToast(msg, type){
  const c = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = 'toast' + (type==='error' ? ' error' : '');
  el.textContent = msg;
  c.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='opacity .3s ease'; setTimeout(()=>el.remove(),300); }, 4200);
}

function sendWhatsApp(lineas, fallbackEl){
  const texto = encodeURIComponent(lineas.join('\n'));
  const telefonoWa = EMPRESA.telefono.replace(/[^0-9]/g,'');
  const url = `https://wa.me/${telefonoWa}?text=${texto}`;
  const link = document.createElement('a');
  link.href = url; link.target = '_blank'; link.rel = 'noopener';
  document.body.appendChild(link); link.click(); document.body.removeChild(link);
  if(fallbackEl){ fallbackEl.href = url; fallbackEl.style.display = 'flex'; }
  return url;
}

/* ---- NAV ---- */
const navBurger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');
navBurger.addEventListener('click', ()=>{
  navBurger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
  navBurger.classList.remove('open'); navLinks.classList.remove('open');
}));

const sections = document.querySelectorAll('main section[id], header#inicio');
const navLinkEls = document.querySelectorAll('.nav-link');
const navObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id = entry.target.getAttribute('id');
      navLinkEls.forEach(a=>{
        a.classList.toggle('active', a.getAttribute('href') === '#'+id);
      });
    }
  });
},{rootMargin:'-45% 0px -50% 0px'});
sections.forEach(s=>navObserver.observe(s));

/* ---- REVEAL ON SCROLL ---- */
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

/* ---- PROMO BANNER ---- */
(function initBanner(){
  const track = document.getElementById('promoTrack');
  const dots = document.getElementById('promoDots');
  const banner = document.getElementById('promoBanner');
  let current = 0, timer;
  PROMOS.forEach((p,i)=>{
    const s = document.createElement('div');
    s.className = 'promo-slide' + (i===0?' active':'');
    s.textContent = p;
    track.appendChild(s);
    const d = document.createElement('button');
    d.type = 'button';
    d.className = i===0 ? 'active' : '';
    d.addEventListener('click', ()=>goTo(i));
    dots.appendChild(d);
  });
  function goTo(i){
    track.children[current].classList.remove('active');
    dots.children[current].classList.remove('active');
    current = i;
    track.children[current].classList.add('active');
    dots.children[current].classList.add('active');
  }
  function next(){ goTo((current+1) % PROMOS.length); }
  function start(){ timer = setInterval(next, 5000); }
  banner.addEventListener('mouseenter', ()=>clearInterval(timer));
  banner.addEventListener('mouseleave', start);
  requestAnimationFrame(()=>banner.classList.add('ready'));
  start();
})();

/* ---- HERO STATS ---- */
(function(){
  const wrap = document.getElementById('heroStats');
  HERO_STATS.forEach(s=>{
    const d = document.createElement('div');
    d.className = 'stat';
    d.innerHTML = `<b>${s.valor}</b><span>${s.label}</span>`;
    wrap.appendChild(d);
  });
})();

/* ---- SERVICIOS DE LAVADO: tabs por vehículo ---- */
(function(){
  const tabsWrap = document.getElementById('vehicleTabs');
  const grid = document.getElementById('svcGrid');
  let activeVeh = VEHICULOS[0].id;

  VEHICULOS.forEach(v=>{
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab-btn' + (v.id===activeVeh?' active':'');
    b.textContent = v.label;
    b.addEventListener('click', ()=>{
      activeVeh = v.id;
      [...tabsWrap.children].forEach(c=>c.classList.remove('active'));
      b.classList.add('active');
      render();
    });
    tabsWrap.appendChild(b);
  });

  function render(){
    grid.innerHTML = '';
    SERVICIOS_LAVADO.forEach(s=>{
      const precio = s.precios[activeVeh];
      const card = document.createElement('div');
      card.className = 'svc-card card-frame';
      card.innerHTML = `
        <div class="top"><h3>${s.nombre}</h3>${s.badge?`<span class="badge badge-alt">${s.badge}</span>`:''}</div>
        <p class="desc">${s.desc}</p>
        <ul>${s.incluye.map(i=>`<li>${i}</li>`).join('')}</ul>
        <div class="svc-price">$${precio}<span> UYU</span></div>
      `;
      grid.appendChild(card);
    });
  }
  render();
})();

/* ---- RESERVAS: tipo + lubricentro info + calendario + horarios + form ---- */
(function(){
  const tabsWrap = document.getElementById('resTypeTabs');
  const lubriInfo = document.getElementById('lubriInfo');
  const lubriGrid = document.getElementById('lubriGrid');
  const servicioSelect = document.getElementById('r-servicio');
  const lblServicio = document.getElementById('lblServicio');
  const vehiculoField = document.getElementById('f-vehiculo');
  let activeTipo = TIPOS_RESERVA[0].id;

  LUBRICENTRO.forEach(l=>{
    const d = document.createElement('div');
    d.className = 'lubri-item';
    d.innerHTML = `<div class="ln">${l.nombre}</div><div class="ld">Duración: ${l.duracion}</div><div class="lp">${l.precio}</div>`;
    lubriGrid.appendChild(d);
  });

  function renderServicioOptions(){
    servicioSelect.innerHTML = '';
    if(activeTipo === 'lavadero'){
      lblServicio.textContent = 'Servicio';
      SERVICIOS_LAVADO.forEach(s=>{
        const o = document.createElement('option');
        o.value = s.id; o.textContent = s.nombre;
        servicioSelect.appendChild(o);
      });
    } else {
      lblServicio.textContent = 'Servicio de lubricentro';
      LUBRICENTRO.forEach(l=>{
        const o = document.createElement('option');
        o.value = l.nombre; o.textContent = `${l.nombre} — ${l.precio}`;
        servicioSelect.appendChild(o);
      });
    }
  }

  TIPOS_RESERVA.forEach(t=>{
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab-btn' + (t.id===activeTipo?' active':'');
    b.textContent = t.label;
    b.addEventListener('click', ()=>{
      activeTipo = t.id;
      [...tabsWrap.children].forEach(c=>c.classList.remove('active'));
      b.classList.add('active');
      lubriInfo.style.display = activeTipo === 'lubricentro' ? 'block' : 'none';
      vehiculoField.style.display = activeTipo === 'lubricentro' ? 'flex' : 'none';
      selectedSlot = null;
      renderServicioOptions();
      renderSlots();
    });
    tabsWrap.appendChild(b);
  });
  renderServicioOptions();

  const dowNames = ['D','L','M','M','J','V','S'];
  const calDow = document.getElementById('calDow');
  dowNames.forEach(d=>{ const el=document.createElement('div'); el.className='cal-dow'; el.textContent=d; calDow.appendChild(el); });

  const monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  let viewDate = new Date();
  let selectedDate = null;
  let selectedSlot = null;
  const calGrid = document.getElementById('calGrid');
  const calMonthLabel = document.getElementById('calMonthLabel');
  const slotsGrid = document.getElementById('slotsGrid');

  // Disponibilidad de ejemplo: determinística según el día, para simular un calendario real.
  // Reemplazar por disponibilidad real conectada a un sistema de agenda.
  function getAvailability(date){
    const day = date.getDay();
    if(day===0) return 'limitada'; // domingo: horario reducido
    const seed = (date.getDate() * 7 + date.getMonth() * 3) % 10;
    if(seed < 5) return 'disponible';
    if(seed < 8) return 'limitada';
    return 'sin-cupo';
  }

  function renderCalendar(){
    calGrid.innerHTML = '';
    const year = viewDate.getFullYear(), month = viewDate.getMonth();
    calMonthLabel.textContent = `${monthNames[month]} ${year}`;
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month+1, 0).getDate();
    const today = new Date(); today.setHours(0,0,0,0);

    for(let i=0;i<firstDay;i++){ const e=document.createElement('div'); e.className='cal-day empty'; calGrid.appendChild(e); }
    for(let d=1; d<=daysInMonth; d++){
      const date = new Date(year, month, d);
      const el = document.createElement('div');
      const isPast = date < today;
      const status = isPast ? 'sin-cupo' : getAvailability(date);
      el.className = 'cal-day ' + status;
      el.textContent = d;
      if(selectedDate && date.toDateString()===selectedDate.toDateString()) el.classList.add('selected');
      if(status !== 'sin-cupo'){
        el.addEventListener('click', ()=>{
          selectedDate = date; selectedSlot = null;
          renderCalendar(); renderSlots();
        });
      }
      calGrid.appendChild(el);
    }
  }

  function renderSlots(){
    slotsGrid.innerHTML = '';
    if(!selectedDate){
      slotsGrid.innerHTML = '<span style="font-size:.82rem;color:var(--text-faint)">Elegí una fecha disponible para ver los turnos.</span>';
      return;
    }
    const status = getAvailability(selectedDate);
    const horarios = HORARIOS[activeTipo];
    const limite = status==='limitada' ? Math.ceil(horarios.length/2) : horarios.length;
    horarios.forEach((h,i)=>{
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'slot-btn' + (selectedSlot===h?' selected':'');
      b.textContent = h;
      if(i >= limite){ b.disabled = true; }
      else{ b.addEventListener('click', ()=>{ selectedSlot = h; renderSlots(); }); }
      slotsGrid.appendChild(b);
    });
  }

  document.getElementById('calPrev').addEventListener('click', ()=>{ viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth()-1, 1); renderCalendar(); });
  document.getElementById('calNext').addEventListener('click', ()=>{ viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth()+1, 1); renderCalendar(); });

  renderCalendar(); renderSlots();

  /* form validation + envío por WhatsApp */
  const form = document.getElementById('resForm');
  const waFallback = document.getElementById('waFallbackRes');
  const calendarBox = document.querySelector('.calendar-box');

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let valid = true;
    const nombre = document.getElementById('r-nombre');
    const tel = document.getElementById('r-telefono');
    const patente = document.getElementById('r-patente');
    const sucursalSelect = document.getElementById('r-sucursal');
    const vehiculo = document.getElementById('r-vehiculo');

    toggleError('f-nombre', nombre.value.trim().length < 3); if(nombre.value.trim().length<3) valid=false;
    const telOk = /^[0-9+\s()-]{7,}$/.test(tel.value.trim());
    toggleError('f-telefono', !telOk); if(!telOk) valid=false;
    toggleError('f-patente', patente.value.trim().length < 3); if(patente.value.trim().length<3) valid=false;

    if(!selectedDate || !selectedSlot){
      showToast('Te falta elegir fecha y horario arriba, en el calendario.', 'error');
      calendarBox.classList.add('attention');
      calendarBox.scrollIntoView({behavior:'smooth', block:'center'});
      setTimeout(()=>calendarBox.classList.remove('attention'), 2200);
      valid = false;
    }
    if(!valid) return;

    const sucursalLabel = sucursalSelect.options[sucursalSelect.selectedIndex].text;
    const servicioLabel = servicioSelect.options[servicioSelect.selectedIndex].text;
    const tipoLabel = TIPOS_RESERVA.find(t=>t.id===activeTipo).label;
    const fechaTexto = selectedDate.toLocaleDateString('es-UY', {weekday:'long', day:'numeric', month:'long', year:'numeric'});

    const lineas = [
      'Reserva de turno — Veinte&30',
      `Tipo: ${tipoLabel}`,
      `Sucursal: ${sucursalLabel}`,
      `Servicio: ${servicioLabel}`,
      `Nombre: ${nombre.value.trim()}`,
      `Teléfono: ${tel.value.trim()}`,
      `Matrícula: ${patente.value.trim().toUpperCase()}`
    ];
    if(activeTipo === 'lubricentro' && vehiculo.value.trim()) lineas.push(`Vehículo: ${vehiculo.value.trim()}`);
    lineas.push(`Fecha: ${fechaTexto}`);
    lineas.push(`Horario: ${selectedSlot}`);

    sendWhatsApp(lineas, waFallback);
    showToast('Te llevamos a WhatsApp con tu reserva completa: solo tenés que confirmar el envío.');
    form.reset();
    selectedDate = null; selectedSlot = null;
    renderCalendar(); renderSlots(); renderServicioOptions();
  });

  function toggleError(fieldId, hasError){
    document.getElementById(fieldId).classList.toggle('error', hasError);
  }
})();

/* ---- SUSCRIPCIONES: planes + calculadora ---- */
(function(){
  const grid = document.getElementById('plansGrid');
  PLANES.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'plan-card card-frame' + (p.recomendado ? ' recommended' : '');
    card.innerHTML = `
      ${p.recomendado ? '<span class="rec-badge">Recomendado</span>' : ''}
      <h3>${p.nombre}</h3>
      <div class="plan-price">$${p.precio}<span> / mes</span></div>
      <div class="plan-includes">${p.incluye}</div>
      <ul>${p.beneficios.map(b=>`<li>${b}</li>`).join('')}</ul>
      <a href="#contacto" class="btn ${p.recomendado?'btn-primary':'btn-secondary'} btn-block">Sumarme al plan ${p.nombre}</a>
    `;
    grid.appendChild(card);
  });

  const range = document.getElementById('washRange');
  const valueEl = document.getElementById('washValue');
  const resultEl = document.getElementById('calcResult');
  const basico = PLANES.find(p=>p.id==='basico');
  const ilimitado = PLANES.find(p=>p.id==='ilimitado');

  function update(){
    const n = parseInt(range.value,10);
    valueEl.textContent = `${n} lavado${n===1?'':'s'}/mes`;
    const costoSuelto = n * PRECIO_LAVADO_SUELTO;
    const costoBasico = n <= 4 ? basico.precio : basico.precio + Math.round((n-4) * PRECIO_LAVADO_SUELTO * 0.9);
    const costoIlimitado = ilimitado.precio;
    const opciones = [
      {nombre:'Pagando por lavado', costo:costoSuelto},
      {nombre:`Plan ${basico.nombre}`, costo:costoBasico},
      {nombre:`Plan ${ilimitado.nombre}`, costo:costoIlimitado}
    ];
    const mejor = opciones.reduce((a,b)=> b.costo < a.costo ? b : a);
    const ahorro = costoSuelto - mejor.costo;
    resultEl.innerHTML = `
      Pagando por lavado: <b>$${costoSuelto}</b>/mes<br>
      Plan ${basico.nombre}: <b>$${costoBasico}</b>/mes<br>
      Plan ${ilimitado.nombre}: <b>$${costoIlimitado}</b>/mes<br>
      ${ahorro > 0 ? `Te conviene <b>${mejor.nombre}</b> — <span class="calc-save">ahorrás $${ahorro}/mes</span>` : 'Con pocos lavados por mes, puede convenirte pagar por lavado.'}
    `;
  }
  range.addEventListener('input', update);
  update();
})();

/* ---- FIDELIDAD ---- */
(function(){
  const tiersGrid = document.getElementById('tiersGrid');
  const stepsRow = document.getElementById('stepsRow');
  const redeemGrid = document.getElementById('redeemGrid');
  const range = document.getElementById('simRange');
  const pcLevel = document.getElementById('pcLevel');
  const pcPoints = document.getElementById('pcPoints');
  const pcProgress = document.getElementById('pcProgress');
  const pcProgressLabel = document.getElementById('pcProgressLabel');

  function renderTiers(pts){
    tiersGrid.innerHTML = '';
    NIVELES.forEach(n=>{
      const isCurrent = pts >= n.min && pts <= n.max;
      const card = document.createElement('div');
      card.className = 'tier-card' + (isCurrent?' current':'');
      card.innerHTML = `
        <div class="tier-icon">${n.nombre[0]}</div>
        <h4>${n.nombre}</h4>
        <div class="tier-range">${n.max===Infinity ? `+${n.min} pts` : `${n.min}–${n.max} pts`}</div>
        <ul><li>${n.multiplicador}</li>${n.beneficios.map(b=>`<li>${b}</li>`).join('')}</ul>
      `;
      tiersGrid.appendChild(card);
    });
  }

  function updatePoints(){
    const pts = parseInt(range.value,10);
    pcPoints.textContent = pts.toLocaleString('es-UY');
    const nivel = NIVELES.find(n=>pts>=n.min && pts<=n.max);
    pcLevel.textContent = nivel.nombre;
    const next = NIVELES[NIVELES.indexOf(nivel)+1];
    if(next){
      const pct = Math.min(100, Math.round(((pts-nivel.min)/(next.min-nivel.min))*100));
      pcProgress.style.width = pct+'%';
      pcProgressLabel.textContent = `Te faltan ${next.min-pts > 0 ? (next.min-pts).toLocaleString('es-UY') : 0} pts para nivel ${next.nombre}`;
    }else{
      pcProgress.style.width='100%';
      pcProgressLabel.textContent = 'Alcanzaste el nivel más alto';
    }
    renderTiers(pts);
  }
  range.addEventListener('input', updatePoints);
  updatePoints();

  PASOS_FIDELIDAD.forEach((p,i)=>{
    const d = document.createElement('div');
    d.className = 'step-item';
    d.innerHTML = `<div class="step-num">${i+1}</div><p>${p}</p>`;
    stepsRow.appendChild(d);
  });

  CANJES.forEach(c=>{
    const d = document.createElement('div');
    d.className = 'redeem-card';
    d.innerHTML = `<div class="redeem-icon">${c.icon}</div><div class="redeem-name">${c.nombre}</div><div class="redeem-desc">${c.desc}</div><div class="redeem-cost">${c.costo} pts</div>`;
    redeemGrid.appendChild(d);
  });
})();

/* ---- CAFETERÍA ---- */
(function(){
  const tabsWrap = document.getElementById('menuTabs');
  const grid = document.getElementById('menuGrid');
  let active = MENU_TABS[0].id;

  MENU_TABS.forEach(t=>{
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab-btn' + (t.id===active?' active':'');
    b.textContent = t.label;
    b.addEventListener('click', ()=>{
      active = t.id;
      [...tabsWrap.children].forEach(c=>c.classList.remove('active'));
      b.classList.add('active');
      render();
    });
    tabsWrap.appendChild(b);
  });

  function render(){
    grid.innerHTML = '';
    MENU[active].forEach(m=>{
      const d = document.createElement('div');
      d.className = 'menu-item';
      d.innerHTML = `<div><div class="mn">${m.nombre}</div><div class="md">${m.desc}</div></div><div class="mp">${m.precio}</div>`;
      grid.appendChild(d);
    });
  }
  render();
})();

/* ---- CAR DETAIL ---- */
(function(){
  const list = document.getElementById('detList');
  DETAILING.forEach(item=>{
    const d = document.createElement('div');
    d.className = 'det-item';
    d.innerHTML = `
      <div class="di-name">${item.nombre}</div>
      <div class="di-desc">${item.desc}</div>
      <div class="di-ps">${item.precios.map(p=>`<div class="dp"><div class="dv">${p.valor}</div><div class="dl">${p.label}</div></div>`).join('')}</div>
    `;
    list.appendChild(d);
  });
  const adics = document.getElementById('adicsGrid');
  ADICIONALES.forEach(a=>{
    const d = document.createElement('div');
    d.className = 'adic';
    d.innerHTML = `<span class="an">${a.nombre}</span><span class="ap">${a.precio}</span>`;
    adics.appendChild(d);
  });
})();

/* ---- PISTA ANCAP ---- */
(function(){
  const grid = document.getElementById('pistaGrid');
  PISTA.forEach(p=>{
    const d = document.createElement('div');
    d.className = 'pista-card card-frame';
    d.innerHTML = `<div class="pi">${p.icon}</div><h4>${p.nombre}</h4><p>${p.desc}</p><div class="pp">${p.precio}</div>`;
    grid.appendChild(d);
  });
})();

/* ---- SUCURSALES ---- */
(function(){
  const grid = document.getElementById('locGrid');
  EMPRESA.sucursales.forEach(s=>{
    const d = document.createElement('div');
    d.className = 'loc-card';
    d.innerHTML = `
      <div class="loc-map"><div class="pin"></div></div>
      <div class="loc-info">
        <span class="badge loc-badge">${s.badge}</span>
        <div class="loc-name">${s.nombre}</div>
        <div class="loc-addr">${s.direccion}</div>
        <div class="loc-hrs">
          <div class="lhr"><span class="ld">Lunes a viernes</span><span class="lt">08:00 – 19:00</span></div>
          <div class="lhr"><span class="ld">Sábados</span><span class="lt">08:00 – 18:00</span></div>
          <div class="lhr"><span class="ld">Domingos y feriados</span><span class="lt">09:00 – 15:00</span></div>
        </div>
        <a href="https://maps.google.com/?q=${s.mapsQuery}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">Ver en Google Maps →</a>
      </div>
    `;
    grid.appendChild(d);
  });
})();

/* ---- NOSOTROS ---- */
(function(){
  const pillars = document.getElementById('pillarsGrid');
  PILARES.forEach(p=>{
    const d = document.createElement('div');
    d.className = 'pillar-card card-frame';
    d.innerHTML = `<div class="pi">${p.icon}</div><h4>${p.titulo}</h4><p>${p.texto}</p>`;
    pillars.appendChild(d);
  });
  const stats = document.getElementById('aboutStats');
  ABOUT_STATS.forEach(s=>{
    const d = document.createElement('div');
    d.className = 'stat';
    d.innerHTML = `<b>${s.valor}</b><span>${s.label}</span>`;
    stats.appendChild(d);
  });
})();

/* ---- CONTACTO: tarjetas + form ---- */
(function(){
  const wrap = document.getElementById('contactCards');
  const sucursalesResumen = EMPRESA.sucursales.map(s=>`<b>${s.badge.replace('Sucursal ','')}:</b> ${s.direccion.split(',')[0]}`).join('<br><br>');
  wrap.innerHTML = `
    <div class="contact-card"><div class="ci">📱</div><div><b>WhatsApp</b><span><a href="https://wa.me/${EMPRESA.telefono.replace(/[^0-9]/g,'')}" target="_blank" rel="noopener">${EMPRESA.telefono}</a></span><span>Administración · ambas sucursales</span></div></div>
    <div class="contact-card"><div class="ci">📍</div><div><b>Sucursales</b><span>${sucursalesResumen}</span></div></div>
    <div class="contact-card"><div class="ci">🕐</div><div><b>Horarios</b><span>${EMPRESA.horarioGeneral}</span></div></div>
    <div class="contact-card"><div class="ci">⭐</div><div><b>Programa Rewards</b><span>Acumulá puntos en cada servicio. <a href="#fidelidad">Conocé el programa →</a></span></div></div>
  `;

  const form = document.getElementById('contactForm');
  const waFallback = document.getElementById('waFallbackContact');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let valid = true;
    const nombre = document.getElementById('c-nombre');
    const tel = document.getElementById('c-telefono');
    const motivo = document.getElementById('c-motivo');
    const sucursal = document.getElementById('c-sucursal');
    const mensaje = document.getElementById('c-mensaje');

    const checks = [
      ['cf-nombre', nombre.value.trim().length < 2],
      ['cf-telefono', !/^[0-9+\s()-]{7,}$/.test(tel.value.trim())],
      ['cf-motivo', motivo.value === ''],
      ['cf-mensaje', mensaje.value.trim().length < 5]
    ];
    checks.forEach(([id,err])=>{ document.getElementById(id).classList.toggle('error', err); if(err) valid=false; });
    if(!valid) return;

    const lineas = [
      'Consulta desde la web — Veinte&30',
      `Nombre: ${nombre.value.trim()}`,
      `Teléfono: ${tel.value.trim()}`,
      `Motivo: ${motivo.value}`
    ];
    if(sucursal.value) lineas.push(`Sucursal: ${sucursal.value}`);
    lineas.push(`Consulta: ${mensaje.value.trim()}`);

    sendWhatsApp(lineas, waFallback);
    showToast('Te llevamos a WhatsApp con tu consulta lista: solo tenés que confirmar el envío.');
    form.reset();
  });
})();

/* ---- MODAL T&C ---- */
(function(){
  const modal = document.getElementById('tycModal');
  ['openTyc1','openTyc2','openTyc3'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.addEventListener('click', ()=>modal.classList.add('open'));
  });
  document.getElementById('closeTyc').addEventListener('click', ()=>modal.classList.remove('open'));
  modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.classList.remove('open'); });
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') modal.classList.remove('open'); });
})();

document.getElementById('year').textContent = new Date().getFullYear();
