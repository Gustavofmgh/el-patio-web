// Selector flotante para comparar diseños: lleva a la página equivalente del otro diseño.
(() => {
  const [, v, pag = 'index.html'] = location.pathname.match(/\/(v\d)\/([^/]*)$/) || [];
  if (!v) return;
  const id = new URLSearchParams(location.search).get('id');
  const destino = d => {
    if (d === 'v3') return ({ 'el-patio.html': 'el-patio.html', 'patios.html': 'el-patio.html' })[pag] || (location.hash && pag === 'ponentes.html' ? `ponente.html?id=${location.hash.slice(1)}` : 'index.html');
    if (v === 'v3') return pag === 'ponente.html' ? `ponentes.html${id ? '#' + id : ''}` : (pag === 'el-patio.html' ? 'el-patio.html' : 'index.html');
    return (pag || 'index.html') + location.hash;
  };
  const nombres = { v1: 'Cuaderno', v2: 'Cartel', v3: 'Preguntas' };
  const el = document.createElement('nav');
  el.setAttribute('aria-label', 'Elegir diseño');
  el.innerHTML = `<a href="../index.html" title="Ver las tres propuestas">Diseños</a>` +
    Object.entries(nombres).map(([k, n]) => `<a href="../${k}/${destino(k)}"${k === v ? ' aria-current="page"' : ''} title="${n}">${k.slice(1)}</a>`).join('');
  el.style.cssText = 'position:fixed;left:16px;bottom:16px;z-index:99;display:flex;gap:4px;padding:5px;background:#1B1B19;border-radius:999px;font:600 13px/1 system-ui,sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.25)';
  el.querySelectorAll('a').forEach((a, i) => a.style.cssText = `color:#fff;text-decoration:none;padding:9px ${i ? 13 : 12}px;border-radius:999px;${a.hasAttribute('aria-current') ? 'background:#EE721E' : ''}`);
  document.body.append(el);
})();
