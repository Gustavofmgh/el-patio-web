// V3: índice de preguntas + página de ponente con reproductor.
(() => {
  const P = Patio, D = P.D, e = P.esc, ext = 'target="_blank" rel="noopener"';
  const pagina = location.pathname.split('/').pop() || 'index.html';
  const menu = [['index.html', 'Charlas'], ['el-patio.html', 'El Patio']];

  document.body.insertAdjacentHTML('afterbegin', `<header class="cabecera"><div class="env">
    <a href="index.html"><img src="../img/logo-blanco.png" alt="El Patio, inicio"></a>
    <nav aria-label="Principal">${menu.map(([h, t]) => `<a href="${h}"${h === pagina ? ' aria-current="page"' : ''}>${t}</a>`).join('')}
      <a href="${D.redes.youtube}" ${ext}>YouTube</a><a href="${D.redes.spotify}" ${ext}>Spotify</a></nav>
  </div></header>`);
  document.body.insertAdjacentHTML('beforeend', `<section class="naranja"><div class="env">
      <h2>Pasa, siéntate. Estás en El Patio.</h2>
      <div><p style="margin-bottom:1.2rem">Entra en la comunidad y te contamos antes que a nadie quién viene y qué sale.</p>
      <div class="botones"><a class="boton" href="${D.redes.whatsapp}" ${ext}>Comunidad de WhatsApp</a>${P.redes.map(([n, u]) => `<a class="boton claro-b" href="${u}" ${ext}>${n}</a>`).join('')}</div></div>
    </div></section>
    <footer><div class="env"><span>El Patio. Paso corto, mirada lejana. Córdoba.</span><a href="mailto:${D.email}">${D.email}</a><a href="https://commons.wikimedia.org/wiki/File:MCalvo2021.jpg" ${ext}>Foto de María Calvo: U. de Navarra, CC BY-SA</a></div></footer>`);

  const embed = id => `https://www.youtube-nocookie.com/embed/${id}?rel=0`;

  P.pinta({
    preguntas: () => P.ponentes.map(p => `<li><a href="ponente.html?id=${p.id}">
      <strong>${e(p.gancho)}</strong>
      <span class="quien">${e(p.nombre)}<small>${p.fragmentos.length + 1} vídeos</small></span>
      <img src="../${p.fotos[0]}" alt="" loading="lazy"></a></li>`).join(''),
    faltan: () => `<b>+${P.pendientes()}</b><p>conversaciones grabadas que irán saliendo cada dos jueves a las 15:00.</p>`,
    nota: el => { const x = P.proximo(); if (!x) { el.remove(); return ''; }
      return `<b>Próximo patio:</b> ${P.fecha(x.fecha)}, ${e(x.lugar)}. ${e(x.ponente)}.`; },
    otros: () => P.ponentes.filter(p => p.id !== P.param('id')).map(p => `<li><a href="ponente.html?id=${p.id}"><strong>${e(p.gancho)}</strong><span class="quien">${e(p.nombre)}</span></a></li>`).join('')
  });

  // página de ponente
  const cab = document.querySelector('[data-ponente]');
  if (!cab) return;
  const p = P.ponente(P.param('id')) || P.ponentes[0];
  document.title = `${p.nombre} · El Patio`;
  const videos = [[p.charla.youtube, `Charla completa: ${p.charla.titulo}`, p.charla.minutos], ...p.fragmentos];
  cab.innerHTML = `<div class="env"><a class="volver" href="index.html">Todas las charlas</a>
    <h1>${e(p.gancho)}</h1><p class="quien">${e(p.nombre)}. ${p.formato === 'Podcast' ? 'Podcast' : `Patio ${p.patio}, presencial`}.</p></div>`;
  document.querySelector('[data-sala]').innerHTML = `<div class="env">
    <div><div class="pantalla"><iframe src="${embed(videos[0][0])}" title="Vídeo de ${e(p.nombre)}" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>
      <p class="sonando">Viendo: <span>${e(videos[0][1])}</span></p></div>
    <div class="lista"><h2>${videos.length} vídeos</h2><ol>${videos.map(([id, t, m], i) => `<li><button data-video="${id}"${i ? '' : ' aria-current="true"'}>${e(t)}<span>${m} min</span></button></li>`).join('')}</ol></div>
  </div>
  <div class="env perfil">
    <img src="../${p.fotos[0]}" alt="${e(p.nombre)}" loading="lazy">
    <div><p>${e(p.bio)}</p>
      <dl><dt>Formato</dt><dd>${e(p.formato)}</dd>${p.asistentes ? `<dt>Asistentes</dt><dd>${p.asistentes} personas</dd>` : ''}
      <dt>Publicado</dt><dd>${P.fecha(p.charla.publicado)} de ${p.charla.publicado.slice(0, 4)}</dd>
      <dt>Escuchar</dt><dd><a href="${P.yt(p.charla.youtube)}" ${ext}>YouTube</a>, <a href="${D.redes.spotify}" ${ext}>Spotify</a></dd></dl></div>
  </div>`;
  const iframe = document.querySelector('.pantalla iframe'), sonando = document.querySelector('.sonando span');
  document.querySelectorAll('[data-video]').forEach(b => b.addEventListener('click', () => {
    iframe.src = embed(b.dataset.video) + '&autoplay=1';
    sonando.textContent = b.firstChild.textContent;
    document.querySelectorAll('[data-video]').forEach(x => x.toggleAttribute('aria-current', x === b));
    b.setAttribute('aria-current', 'true');
  }));
})();
