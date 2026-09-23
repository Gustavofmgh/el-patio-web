// Cabecera, pie y bloques que salen de datos.js (versión Cartel).
(() => {
  const P = Patio, D = P.D, e = P.esc;
  const pagina = location.pathname.split('/').pop() || 'index.html';
  const menu = [['index.html', 'Inicio'], ['el-patio.html', 'El Patio'], ['ponentes.html', 'Ponentes y charlas'], ['patios.html', 'Patios presenciales']];
  const foto = (p, i = 0) => `../${p.fotos[i] || p.fotos[0]}`;
  const ext = 'target="_blank" rel="noopener"';

  document.body.insertAdjacentHTML('afterbegin', `<header class="cabecera"><div class="env">
    <a class="marca" href="index.html"><img src="../img/logo.png" alt="El Patio, inicio"></a>
    <button class="menu-btn" aria-expanded="false" aria-controls="nav">Menú</button>
    <ul class="nav" id="nav">${menu.slice(1).map(([h, t]) => `<li><a href="${h}"${h === pagina ? ' aria-current="page"' : ''}>${t}</a></li>`).join('')}</ul>
  </div></header>`);

  document.body.insertAdjacentHTML('beforeend', `<div class="comunidad"><div class="env">
      <h2>Pasa, siéntate. Estás en <mark style="background:var(--tinta)">El Patio</mark>.</h2>
      <div><p style="margin-bottom:1.2rem">Síguenos para no perderte ni una conversación, o entra en la comunidad y te contamos antes que a nadie quién viene.</p>
      <div class="redes">${P.redes.map(([n, u]) => `<a class="boton" href="${u}" ${ext}>${n}</a>`).join('')}<a class="boton" href="${D.redes.whatsapp}" ${ext}>Comunidad de WhatsApp</a></div></div>
    </div></div>
    <footer class="pie"><div class="env">
      <span class="lema">Paso corto, mirada lejana.</span>
      <nav aria-label="Pie">${menu.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}<a href="mailto:${D.email}">${D.email}</a><a href="https://commons.wikimedia.org/wiki/File:MCalvo2021.jpg" ${ext}>Foto de María Calvo: U. de Navarra, CC BY-SA</a></nav>
    </div></footer>`);

  const btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  btn.addEventListener('click', () => btn.setAttribute('aria-expanded', nav.classList.toggle('abierta')));

  P.pinta({
    caras: () => P.ponentes.map(p => `<li><a href="ponentes.html#${p.id}">
      <img src="${foto(p)}" alt="${e(p.nombre)}" loading="lazy"><h3>${e(p.nombre)}</h3><p><span class="gancho">${e(p.gancho)}</span></p></a></li>`).join(''),

    aviso: el => { const x = P.proximo(); if (!x) { el.remove(); return ''; }
      return `<b>Próximo patio:</b> ${P.fecha(x.fecha)}, ${e(x.lugar)}. ${e(x.ponente)}.`; },

    escuchar: () => `<div><div class="contador" aria-label="${P.ponentes.length} de ${D.episodiosGrabados} episodios publicados">${Array.from({ length: D.episodiosGrabados }, (_, i) => `<i class="${i < P.ponentes.length ? 'si' : ''}"></i>`).join('')}</div>
      <p style="margin-top:.5rem">${P.ponentes.length} de ${D.episodiosGrabados} episodios publicados. Uno nuevo cada dos jueves a las 15:00.</p></div>
      <div class="acciones" style="margin:0"><a class="boton" href="${D.redes.youtube}" ${ext}>YouTube</a><a class="boton" href="${D.redes.spotify}" ${ext}>Spotify</a></div>`,

    fichas: () => P.ponentes.map(p => `<article class="ficha" id="${p.id}">
      <img src="${foto(p)}" alt="${e(p.nombre)}" loading="lazy">
      <div>
        <p class="dato">Patio ${p.patio}. ${e(p.formato)}${p.asistentes ? `, ${p.asistentes} personas` : ''}</p>
        <h2>${e(p.nombre)}</h2>
        <p>${e(p.bio)}</p>
        <p class="gancho">${e(p.gancho)}</p>
        <a class="completa" href="${P.yt(p.charla.youtube)}" ${ext}>
          <div><span>Charla completa, ${p.charla.minutos} min</span><strong>${e(p.charla.titulo)}</strong></div><i class="play" aria-hidden="true"></i></a>
        <ul class="fragmentos"><h4>Fragmentos</h4>
          ${p.fragmentos.map(([id, t, m]) => `<li><a href="${P.yt(id)}" ${ext}>${e(t)}<span>${m} min</span></a></li>`).join('')}</ul>
      </div></article>`).join(''),

    proximamente: () => `<div class="n">${P.pendientes()}</div><div><h2>conversaciones grabadas que todavía <mark>no han salido</mark></h2>
      <p class="gris" style="margin-top:1rem">Irán apareciendo aquí según se publiquen.</p></div>`,

    historial: () => P.ponentes.filter(p => p.asistentes).slice().reverse().map(p => `<li><a href="ponentes.html#${p.id}">
      <span class="n">Patio ${p.patio}</span><strong>${p.asistentes}</strong><span>personas</span><em>${e(p.nombre)}</em><span>${e(p.charla.titulo)}</span></a></li>`).join(''),

    agenda: el => { const x = P.proximo(); if (!x) return `<p>Estamos preparando el próximo patio.</p><a class="boton" href="${D.redes.whatsapp}" ${ext}>Avísame</a>`;
      return `<p>Próximo patio: ${P.fecha(x.fecha)}${x.hora ? `, ${e(x.hora)}` : ''}. ${e(x.lugar)}. ${e(x.ponente)}.</p><a class="boton" href="${D.redes.whatsapp}" ${ext}>Avísame por WhatsApp</a>`; }
  });
})();
