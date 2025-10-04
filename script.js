/* ============================
   📚 BIBLIOTECA DIGITAL JS
   ============================
   Autor: Tu Nombre
   Descripción: Gestión dinámica de libros y autores.
   ============================ */

// ===============================
// 📘 LISTA DE LIBROS
// ===============================
const libros = [
  { 
    titulo: "Antígona González", 
    autor: "Sara Uribe", 
    portada: "img/antigona gonzales.jpg", 
    descripcion: "Antígona González busca a su hermano desaparecido en Tamaulipas, México, en medio de la violencia del narcotráfico.",
    link: "libros/Antigona Gonzales.pdf",
    genero: "Drama"
  },
  { 
    titulo: "Don Quijote de la Mancha", 
    autor: "Miguel de Cervantes",
    portada: "img/don_quijote.jpg", 
    descripcion: "La gran novela clásica de la literatura española. Aventuras, humor y crítica social a través de Don Quijote y Sancho Panza.",
    link: "libros/don_quijote.pdf",
    genero: "Fantasía"
  },
  { 
    titulo: "La mudanza de los poderes", 
    autor: "Salvador Gallardo Cabrera",
    portada: "img/La mundanza de los poderes.jpg", 
    descripcion: "Relato histórico sobre el traslado del gobierno peruano a Ayacucho en 1889 durante el mandato de Cáceres.",
    link: "libros/La mundanza de los poderes.pdf",
    genero: "Historia"
  },
  { 
    titulo: "Muerte de la moral burguesa", 
    autor: "Emmanuel Berl",
    portada: "img/muerte de la moral burguesa.jpg", 
    descripcion: "Ensayo sobre la decadencia de los valores morales de la burguesía ante los cambios del siglo XX.",
    link: "libros/muerte de la moral burguesa.pdf",
    genero: "Ensayo"
  },
  { 
    titulo: "Hábitos Atómicos", 
    autor: "James Clear",
    portada: "img/HABITOS ATOMICOS.jpg", 
    descripcion: "Guía práctica para formar buenos hábitos, romper los malos y alcanzar el éxito a través de pequeños cambios diarios.",
    link: "libros/HABITOS ATOMICOS.pdf",
    genero: "Autoayuda"
  },
  { 
    titulo: "El Sutil Arte de que (Casi Todo) te Importe un Carajo", 
    autor: "Mark Manson",
    portada: "img/el_sutil_arte.jpg",
    descripcion: "Un enfoque honesto y refrescante sobre cómo dejar de intentar ser 'positivo' todo el tiempo y empezar a vivir realmente.",
    link: "libros/el_sutil_arte.pdf",
    genero: "Autoayuda"
  },
  { 
    titulo: "El Corsario Negro", 
    autor: "Emilio Salgari",
    portada: "img/el_corsario_negro.jpg",
    descripcion: "Una emocionante historia de aventuras, venganza y amor ambientada en el Caribe del siglo XVII.",
    link: "libros/el_corsario_negro.pdf",
    genero: "Aventura"
  },
  { 
    titulo: "It", 
    autor: "Stephen King",
    portada: "img/it.jpeg",
    descripcion: "Un grupo de amigos enfrenta a una criatura aterradora que toma la forma de sus peores miedos, en el pueblo de Derry.",
    link: "libros/it.pdf",
    genero: "Terror"
  },
  { 
    titulo: "Harry Potter y la Piedra Filosofal", 
    autor: "J.K. Rowling",
    portada: "img/harry_potter_piedra_filosofal.jpg",
    descripcion: "El inicio de la saga del joven mago Harry Potter, quien descubre su destino en el mágico mundo de Hogwarts.",
    link: "libros/harry_potter_piedra_filosofal.pdf",
    genero: "Fantasía"
  },
  { 
    titulo: "El Crimen de la Hipotenusa", 
    autor: "Pseudónimo Desconocido",
    portada: "img/el_crimen_de_la_hipotenusa.jpeg",
    descripcion: "Un relato humorístico y misterioso sobre un crimen donde las matemáticas tienen la última palabra.",
    link: "libros/el_crimen_de_la_hipotenusa.pdf",
    genero: "Misterio"
  },
  { 
    titulo: "La Máscara de la Muerte Roja", 
    autor: "Edgar Allan Poe",
    portada: "img/la_mascara_de_la_muerte_roja.jpeg",
    descripcion: "Un clásico cuento gótico donde la muerte se infiltra en un baile de máscaras en un reino aterrorizado por la peste.",
    link: "libros/la_mascara_de_la_muerte_roja.pdf",
    genero: "Terror"
  },
  { 
    titulo: "No Tengo Boca y Debo Gritar", 
    autor: "Harlan Ellison",
    portada: "img/no_tengo_boca.jpeg",
    descripcion: "Una inquietante historia de ciencia ficción sobre los últimos humanos atrapados por una inteligencia artificial vengativa.",
    link: "libros/no_tengo_boca.pdf",
    genero: "Ciencia Ficción"
  },
  { 
    titulo: "Yawar Fiesta", 
    autor: "José María Arguedas",
    portada: "img/yawar_fiesta.jpg",
    descripcion: "Una poderosa representación del choque cultural entre las tradiciones andinas y la modernidad impuesta.",
    link: "libros/yawar_fiesta.pdf",
    genero: "Literatura peruana"
  },
  { 
    titulo: "drácula", 
    autor: "Bram Stoker",
    portada: "img/dracula.jpg",
    descripcion: "La legendaria historia del Conde Drácula, símbolo eterno del miedo, la seducción y lo sobrenatural.",
    link: "libros/dracula.pdf",
    genero: "Terror"
  },
  { 
    titulo: "La Casa del Juez", 
    autor: "Bram Stoker",
    portada: "img/la_casa_del_juez.jpg",
    descripcion: "Un estudiante alquila una casa para estudiar, sin saber que está habitada por una presencia inquietante.",
    link: "libros/la_casa_del_juez.pdf",
    genero: "Terror"
  },
  { 
    titulo: "Cien Años de Soledad", 
    autor: "Gabriel García Márquez",
    portada: "img/cien_anos_de_soledad.jpeg",
    descripcion: "La saga épica de la familia Buendía en el mítico pueblo de Macondo, donde el tiempo parece no existir.",
    link: "libros/cien_anos_de_soledad.pdf",
    genero: "Realismo Mágico"
  },
  { 
    titulo: "El Principito", 
    autor: "Antoine de Saint-Exupéry",
    portada: "img/el_principito.jpg",
    descripcion: "Una fábula poética sobre la inocencia, la amistad y el amor, contada desde la mirada de un niño de otro planeta.",
    link: "libros/el_principito.pdf",
    genero: "Fábula"
  },
  { 
    titulo: "El Señor de los Anillos: La Comunidad del Anillo", 
    autor: "J.R.R. Tolkien",
    portada: "img/el_senor_de_los_anillos.jpg",
    descripcion: "Una de las sagas más influyentes de la fantasía épica: el viaje para destruir el Anillo Único y salvar la Tierra Media.",
    link: "libros/el_senor_de_los_anillos.pdf",
    genero: "Fantasía"
  }
];

// ===============================
// 👩‍💻 MOSTRAR LIBROS EN CATÁLOGO
// ===============================
const catalogo = document.getElementById("catalogo");

const mostrarLibros = (lista) => {
  if (!catalogo) return;
  catalogo.innerHTML = "";

  lista.forEach(libro => {
    const div = document.createElement("div");
    div.classList.add("libro");
    div.innerHTML = `
      <img src="${libro.portada}" alt="${libro.titulo}" class="portada fade-in">
      <h3>${libro.titulo}</h3>
      <p><em>${libro.autor}</em></p>
      <p><strong>Género:</strong> ${libro.genero}</p>
      <p>${libro.descripcion}</p>
      <a href="${libro.link}" target="_blank" class="btn">📖 Leer / Descargar</a>
    `;
    catalogo.appendChild(div);
  });
};

// ===============================
// ✍️ MOSTRAR AUTORES
// ===============================
const autores = [
  {
    nombre: "Miguel de Cervantes",
    foto: "img/cervantes.jpeg",
    bio: "Escritor español, autor de 'Don Quijote de la Mancha', considerada la primera novela moderna de la historia.",
    libros: ["Don Quijote de la Mancha", "La Galatea", "Novelas ejemplares"]
  },
  {
    nombre: "Sara Uribe",
    foto: "img/sara_uribe.jpeg",
    bio: "Poeta y ensayista mexicana, reconocida por su estilo íntimo y su enfoque en la memoria y la violencia contemporánea.",
    libros: ["Antígona González", "Siam", "Abroche su cinturón mientras esté sentado"]
  },
  {
    nombre: "James Clear",
    foto: "img/james_clear.jpeg",
    bio: "Autor estadounidense experto en hábitos, toma de decisiones y productividad personal.",
    libros: ["Hábitos Atómicos"]
  },
  {
    nombre: "Salvador Gallardo Cabrera",
    foto: "img/Salvador Gallardo Cabrera.jpeg",
    bio: "Poeta y ensayista mexicano, reconocido por su estilo reflexivo y su aporte a la literatura latinoamericana.",
    libros: ["La mudanza de los poderes", "Estado de sobrevuelo"]
  },
  {
    nombre: "Emmanuel Berl",
    foto: "img/Emmanuel Berl.jpeg",
    bio: "Intelectual y ensayista francés, crítico de los valores sociales de su tiempo y defensor de una moral renovada.",
    libros: ["Muerte de la moral burguesa", "Sylvia", "Méditation sur un amour défunt"]
  },
  {
    nombre: "Stephen King",
    foto: "img/stephen_king.jpeg",
    bio: "Maestro del terror y la narrativa oscura, conocido por explorar los miedos más profundos del ser humano.",
    libros: ["It", "Cementerio de animales", "El resplandor"]
  },
  {
    nombre: "J.K. Rowling",
    foto: "img/jk_rowling.jpg",
    bio: "Autora británica creadora del universo de Harry Potter, una de las sagas más leídas del mundo.",
    libros: ["Harry Potter y la Piedra Filosofal", "Harry Potter y la Cámara Secreta"]
  },
  {
    nombre: "Mark Manson",
    foto: "img/mark_manson.jpg",
    bio: "Escritor y bloguero estadounidense, conocido por su estilo directo y su filosofía de vida realista.",
    libros: ["El Sutil Arte de que (Casi Todo) te Importe un Carajo", "Everything is F*cked"]
  },
  {
    nombre: "Bram Stoker",
    foto: "img/bram_stoker.jpeg",
    bio: "Escritor irlandés, creador de 'Drácula', una de las obras más icónicas del género gótico.",
    libros: ["Drácula", "La Casa del Juez"]
  },
  {
    nombre: "Gabriel García Márquez",
    foto: "img/garcia_marquez.jpeg",
    bio: "Novelista colombiano y ganador del Premio Nobel de Literatura, máximo exponente del realismo mágico.",
    libros: ["Cien Años de Soledad", "El amor en los tiempos del cólera"]
  },
  {
    nombre: "Antoine de Saint-Exupéry",
    foto: "img/antoine_exupery.jpeg",
    bio: "Aviador y escritor francés, autor de 'El Principito', una obra universal sobre la inocencia y la sabiduría.",
    libros: ["El Principito", "Vuelo nocturno"]
  },
  {
    nombre: "J.R.R. Tolkien",
    foto: "img/tolkien.jpg",
    bio: "Filólogo, escritor y profesor británico, considerado el padre de la fantasía moderna.",
    libros: ["El Señor de los Anillos", "El Hobbit"]
  },
  {
    nombre: "José María Arguedas",
    foto: "img/jose_maria_arguedas.jpeg",
    bio: "Escritor y antropólogo peruano que retrató con profundidad la cultura andina y el mestizaje.",
    libros: ["Yawar Fiesta", "Los ríos profundos"]
  },
  {
    nombre: "Edgar Allan Poe",
    foto: "img/edgar_allan_poe.jpeg",
    bio: "Poeta y narrador estadounidense, pionero del relato corto, el terror psicológico y el misterio.",
    libros: ["La Máscara de la Muerte Roja", "El corazón delator"]
  },
  {
    nombre: "Harlan Ellison",
    foto: "img/harlan_ellison.jpeg",
    bio: "Autor de ciencia ficción estadounidense, conocido por su estilo provocador y sus críticas sociales.",
    libros: ["No Tengo Boca y Debo Gritar", "Arrepiéntete, Arlequín, dijo el señor Tic-tac"]
  }
];

// ===============================
// MOSTRAR AUTORES EN AUTORES.HTML
// ===============================
const mostrarAutores = () => {
  const contenedor = document.getElementById("listaAutores");
  if (!contenedor) return;

  contenedor.innerHTML = "";
  autores.forEach(autor => {
    const div = document.createElement("div");
    div.classList.add("autor");
    div.innerHTML = `
      <img src="${autor.foto}" alt="${autor.nombre}" class="foto-autor fade-in">
      <div class="info-autor">
        <h3>${autor.nombre}</h3>
        <p>${autor.bio}</p>
        <p><strong>Libros:</strong> ${autor.libros.join(", ")}</p>
      </div>
    `;
    contenedor.appendChild(div);
  });
};

// ===============================
// 🔎 BÚSQUEDA EN VIVO DE LIBROS
// ===============================
const buscarLibro = () => {
  const input = document.getElementById("searchInput");
  if (!input) return;
  const texto = input.value.toLowerCase().trim();

  const filtrados = libros.filter(libro =>
    libro.titulo.toLowerCase().includes(texto) ||
    libro.autor.toLowerCase().includes(texto) ||
    libro.genero.toLowerCase().includes(texto)
  );

  mostrarLibros(filtrados);
};

const inputBusqueda = document.getElementById("searchInput");
if (inputBusqueda) inputBusqueda.addEventListener("input", buscarLibro);

// ===============================
// 🎭 FILTRAR POR GÉNERO
// ===============================
const filtrarPorGenero = (genero) => {
  const filtrados = libros.filter(libro => libro.genero === genero);
  mostrarLibros(filtrados);
};

// ===============================
// 🚀 INICIALIZACIÓN AUTOMÁTICA
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  if (catalogo) mostrarLibros(libros);
  mostrarAutores();
});

// ===============================
// 💫 ANIMACIÓN SUAVE
// ===============================
const estiloAnimacion = document.createElement("style");
estiloAnimacion.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(15px);
    animation: fadeIn 0.7s ease forwards;
  }
  @keyframes fadeIn {
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(estiloAnimacion);

// ===============================
// 🌟 HACER FUNCIONAR BOTONES HTML
// ===============================
window.mostrarTodo = () => mostrarLibros(libros);
window.filtrarPorGenero = (g) => filtrarPorGenero(g);

