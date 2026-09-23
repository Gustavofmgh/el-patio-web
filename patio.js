// Lógica común a las tres versiones. Los datos viven en datos.js.
const Patio = (() => {
  const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const hoy = new Date().toISOString().slice(0, 10);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const ponentes = DATOS.ponentes;
  const ponente = id => ponentes.find(p => p.id === id);
  const proximo = () => DATOS.agenda.filter(e => e.fecha >= hoy).sort((a, b) => a.fecha.localeCompare(b.fecha))[0];
  const pendientes = () => Math.max(0, DATOS.episodiosGrabados - ponentes.length);
  const fecha = f => `${+f.slice(8, 10)} de ${MESES[+f.slice(5, 7) - 1]}`;
  const yt = id => `https://www.youtube.com/watch?v=${id}`;
  const redes = [['Instagram', DATOS.redes.instagram], ['YouTube', DATOS.redes.youtube], ['Spotify', DATOS.redes.spotify], ['TikTok', DATOS.redes.tiktok]].filter(([, u]) => u);
  // Pinta cada <... data-pinta="clave"> con la plantilla de ese nombre.
  const pinta = plantillas => document.querySelectorAll('[data-pinta]').forEach(el => {
    const f = plantillas[el.dataset.pinta];
    if (f) el.innerHTML = f(el);
  });
  const param = k => new URLSearchParams(location.search).get(k);
  return { D: DATOS, ponentes, ponente, proximo, pendientes, fecha, yt, redes, esc, pinta, param };
})();
