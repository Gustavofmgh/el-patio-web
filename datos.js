// ─────────────────────────────────────────────────────────────
//  DATOS DE LA WEB DE EL PATIO. Es el único archivo que hay que tocar.
//
//  · Ponente nuevo: añade un bloque a `ponentes` (el más reciente, arriba).
//    Cada ponente lleva su charla completa y sus fragmentos de YouTube.
//    El número de episodios por salir se calcula solo con `episodiosGrabados`.
//  · Próximo patio: añade un bloque a `agenda` (fecha AAAA-MM-DD).
//    Se muestra mientras la fecha no haya pasado y luego desaparece solo.
//  · Fotos: guárdalas en /img y escribe la ruta, p. ej. 'img/ponentes/nombre.jpg'.
// ─────────────────────────────────────────────────────────────
const DATOS = {
  email: 'elpatiodecordoba@gmail.com',
  redes: {
    instagram: 'https://www.instagram.com/elpatio_talks/',
    youtube: 'https://www.youtube.com/@elpatio_talks',
    spotify: 'https://open.spotify.com/show/2Iwz7302lPOLs8iamyCAAd',
    tiktok: 'https://www.tiktok.com/@elpatio_talks',
    whatsapp: 'https://chat.whatsapp.com/GsNfpADc8d5FOYQ8PgP4Bb'
  },

  // Episodios grabados esta temporada, publicados o no.
  episodiosGrabados: 16,

  agenda: [
    // EJEMPLO: cámbialo por el patio real o bórralo.
    { fecha: '2026-10-22', hora: '19:30', lugar: 'Córdoba', ponente: 'Invitado por anunciar' }
  ],

  cifras: { asistentes: 785, visualizaciones: '6,4 millones', seguidores: '26.000', comunidad: '2.150' },

  ponentes: [
    { id: 'maria-calvo', nombre: 'María Calvo', patio: 4, formato: 'Podcast',
      gancho: 'Sin hombres no somos nada',
      bio: 'Profesora universitaria y autora de libros sobre masculinidad, paternidad y educación diferenciada.',
      fotos: ['img/ponentes/maria-calvo-1.jpg'],
      charla: { titulo: 'Quieren romper al hombre para destruir la familia', youtube: '3N44E4YpEA0', minutos: 100, publicado: '2026-09-17' },
      fragmentos: [
        ['t2Lu6fWZVQU', '¿Qué necesita un hijo varón de su padre?', 19],
        ['-WzcNTpjtBA', '¿Ser hombre se ha convertido en algo malo?', 13],
        ['YhKk4bkyUGc', 'El amor, el matrimonio y la felicidad: cómo aprender a amar', 26],
        ['wOeNzlC4ZUU', 'Perdonar a tus padres: el paso que cambia tu forma de madurar', 14],
        ['f-obx9imWd4', 'Hombres y mujeres: iguales en dignidad, pero no idénticos', 10],
        ['auaFc41j7Yg', 'Por qué el colegio puede estar fallando especialmente a los niños', 7]
      ] },
    { id: 'jc-gonzalez-hurtado', nombre: 'José Carlos González-Hurtado', patio: 3, formato: 'Patio presencial', asistentes: 310,
      gancho: '¿Y si Dios existe?',
      bio: 'Empresario, presidente de EWTN España y autor de «Nuevas evidencias científicas de la existencia de Dios».',
      fotos: ['img/ponentes/jc-gonzalez-hurtado-1.jpg'],
      charla: { titulo: '¿Puede la ciencia demostrar que Dios existe?', youtube: 'qOMRjxIYn6I', minutos: 85, publicado: '2026-09-10' },
      fragmentos: [
        ['vo3afMx6N6c', 'Lo que los grandes científicos pensaban sobre Dios', 12],
        ['DJnZ8mIJiP8', '¿Qué había antes del universo?', 16],
        ['YCBPdCV_20c', '¿Por qué las matemáticas describen tan bien el universo?', 12],
        ['HR3290BXA7w', 'Gödel descubrió un límite que cambió las matemáticas para siempre', 9],
        ['mjIWk4hI7n0', 'El argumento más difícil contra la existencia de Dios', 15],
        ['uAxu9t2057I', 'Los argumentos contra Dios que todo creyente debería escuchar', 12],
        ['ZshbazO97sc', '¿Qué pruebas existen sobre quién fue realmente Jesús?', 8]
      ] },
    { id: 'luis-gutierrez-rojas', nombre: 'Luis Gutiérrez Rojas', patio: 2, formato: 'Patio presencial', asistentes: 175,
      gancho: '¿Por qué no eres feliz?',
      bio: 'Psiquiatra, profesor en la Universidad de Granada y autor de «Vivir más libre» y «La belleza de vivir».',
      fotos: ['img/ponentes/luis-gutierrez-rojas-1.jpg'],
      charla: { titulo: 'La verdad sobre la felicidad', youtube: 'Ifpl3UwEsq4', minutos: 60, publicado: '2026-04-20' },
      fragmentos: [
        ['wKJH-sNtb5o', 'Las 3 claves para tomar mejores decisiones', 8],
        ['YEOdnDHOnAU', 'Por qué estar bien todo el tiempo no es bueno', 11],
        ['QTvBn1-qO_0', 'El problema de esperar siempre a tener ganas', 7],
        ['27COY7gA-Aw', 'La batalla que ocurre dentro de todos nosotros', 10],
        ['W56sEUTaJ0c', 'Por qué tener más cosas nunca termina de llenarnos', 7],
        ['0dDlk0QFmHk', 'El orden que deberías poner en tu vida para ser feliz', 6],
        ['eZkm-Wot18s', 'Las personas que importan cuando todo lo demás falla', 11]
      ] },
    { id: 'pep-borrell', nombre: 'Pep Borrell', patio: 1, formato: 'Patio presencial', asistentes: 300,
      gancho: 'El noviazgo está para dejarlo',
      bio: 'Divulgador sobre noviazgo y matrimonio, dentista y padre de cinco hijos. Abrió El Patio.',
      fotos: ['img/ponentes/pep-borrell-1.jpg'],
      charla: { titulo: 'Saber querer', youtube: 'Q6Cju928oLk', minutos: 87, publicado: '2026-02-12' },
      fragmentos: [
        ['QUzXR6DHhbQ', 'Cuál es la decisión más importante de tu vida', 7],
        ['y3JCZmi6hgw', 'Por qué los animales no son libres (y tú tampoco)', 7],
        ['TVdfUvPQGyA', 'Cómo lograr equilibrio entre sentir, pensar y actuar', 7],
        ['jS8MlZJnlpU', 'Las 3 etapas que atraviesa una relación', 13],
        ['YKiAHBCHc8o', 'El secreto de las parejas que duran: la teoría del telesilla', 12],
        ['FGR1KUWHeJQ', 'Lo que nadie te explica sobre sexo, amor y compromiso', 6],
        ['eLkNLfc-Tcc', '10 señales para saber si estás eligiendo bien a tu pareja', 30],
        ['eFMCWAZrsUI', '¿Cuánto debería durar un noviazgo antes de casarse?', 19],
        ['_TNP8hGSiIo', 'El sencillo ejercicio que puede cambiar tu forma de ver la vida', 3]
      ] }
  ]
};
