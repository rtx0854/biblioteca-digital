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
    titulo: "Drácula", 
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
  },
  { 
    titulo: "Bajo la misma estrella",
    autor: "John Green",
    portada: "img/bajo_la_misma_estrella.jpeg",
    descripcion: "Una historia emotiva sobre el amor, la vida y la lucha de dos jóvenes con cáncer que se enamoran.",
    link: "libros/bajo_la_misma_estrella.pdf",
    genero: "Drama"

  },
  { 
    titulo: "Crimen y castigo",
    autor: "Fiódor Dostoyevski",
    portada: "img/crimen_y_castigo.jpg",
    descripcion: "La historia de Raskólnikov, un joven que comete un asesinato y enfrenta las consecuencias morales y psicológicas de su crimen.",
    link: "libros/crimen_y_castigo.pdf",
    genero: "Drama"

  },
  { 
    titulo: "Fabricante de lágrimas",
    autor: "Ibi Zoboi",
    portada: "img/fabricante_de_lagrimas.jpeg",
    descripcion: "Una novela que mezcla el drama y la fantasía moderna, explorando el poder de las emociones y los secretos familiares.",
    link: "libros/fabricante_de_lagrimas.pdf",
    genero: "Drama"

  },
  { 
    titulo: "Damián",
    autor: "Benjamin Lebert",
    portada: "img/damian.jpeg",
    descripcion: "Una historia sobre la adolescencia, la amistad y los conflictos internos de un joven que lucha por encontrar su lugar en el mundo.",
    link: "libros/damian.pdf",
    genero: "Drama"

  },
  {
  titulo: "El último rey dragón",
  autor: "C. M. B. Bell",
  portada: "img/el_ultimo_rey_dragon.jpg",
  descripcion: "Una épica historia de dragones, reyes y batallas que definirán el destino de un reino olvidado.",
  link: "libros/el_ultimo_rey_dragon.pdf",
  genero: "Fantasía"
},
{
  titulo: "El coleccionista de brujas",
  autor: "Maya Shepherd",
  portada: "img/el_coleccionista_de_brujas.jpeg",
  descripcion: "Una oscura historia donde la magia y la venganza se entrelazan en tiempos de persecución.",
  link: "libros/el_coleccionista_de_brujas.pdf",
  genero: "Fantasía"
},
{
  titulo: "Meditaciones",
  autor: "Marco Aurelio",
  portada: "img/meditaciones.jpeg",
  descripcion: "Reflexiones personales del emperador romano sobre la virtud, la moral y el sentido de la vida.",
  link: "libros/meditaciones.pdf",
  genero: "Ensayo"
},
{
  titulo: "El contrato social",
  autor: "Jean-Jacques Rousseau",
  portada: "img/el_contrato_social.jpg",
  descripcion: "Un análisis sobre la libertad y la organización política de las sociedades modernas.",
  link: "libros/el_contrato_social.pdf",
  genero: "Ensayo"
},
{
  titulo: "La rebelión de las masas",
  autor: "José Ortega y Gasset",
  portada: "img/la_rebelion_de_las_masas.jpg",
  descripcion: "Un ensayo filosófico sobre el papel del individuo en la sociedad moderna.",
  link: "libros/la_rebelion_de_las_masas.pdf",
  genero: "Ensayo"
},
{
  titulo: "El mito de Sísifo",
  autor: "Albert Camus",
  portada: "img/el_mito_de_sisifo.jpg",
  descripcion: "Una reflexión sobre el absurdo de la existencia y la búsqueda de sentido.",
  link: "libros/el_mito_de_sisifo.pdf",
  genero: "Ensayo"
},
{
  titulo: "La isla del tesoro",
  autor: "Robert Louis Stevenson",
  portada: "img/la_isla_del_tesoro.jpg",
  descripcion: "El clásico relato de piratas, mapas y tesoros ocultos en alta mar.",
  link: "libros/la_isla_del_tesoro.pdf",
  genero: "Aventura"
},
{
  titulo: "Los tres mosqueteros",
  autor: "Alexandre Dumas",
  portada: "img/los_tres_mosqueteros.jpeg",
  descripcion: "Espadas, honor y amistad en una Francia llena de intrigas y duelos.",
  link: "libros/los_tres_mosqueteros.pdf",
  genero: "Aventura"
},
{
  titulo: "Viaje al centro de la Tierra",
  autor: "Julio Verne",
  portada: "img/viaje_al_centro_de_la_tierra.jpg",
  descripcion: "Una expedición científica que desciende a las profundidades del planeta.",
  link: "libros/viaje_al_centro_de_la_tierra.pdf",
  genero: "Aventura"
},
{
  titulo: "Robinson Crusoe",
  autor: "Daniel Defoe",
  portada: "img/robinson_crusoe.jpg",
  descripcion: "Un hombre náufrago sobrevive en una isla desierta, enfrentando la soledad y la naturaleza.",
  link: "libros/robinson_crusoe.pdf",
  genero: "Aventura"
},
{
  titulo: "Dune",
  autor: "Frank Herbert",
  portada: "img/dune.jpg",
  descripcion: "Una compleja historia política y ecológica ambientada en un planeta desértico.",
  link: "libros/dune.pdf",
  genero: "Ciencia Ficción"
},
{
  titulo: "1984",
  autor: "George Orwell",
  portada: "img/1984.jpg",
  descripcion: "Una visión distópica del futuro donde el Estado controla todos los aspectos de la vida.",
  link: "libros/1984.pdf",
  genero: "Ciencia Ficción"
},
{
  titulo: "Fundación",
  autor: "Isaac Asimov",
  portada: "img/fundacion.jpg",
  descripcion: "La historia de una organización científica que busca preservar el conocimiento en una galaxia en decadencia.",
  link: "libros/fundacion.pdf",
  genero: "Ciencia Ficción"
},
{
  titulo: "Yo, robot",
  autor: "Isaac Asimov",
  portada: "img/yo_robot.jpg",
  descripcion: "Una colección de relatos sobre la interacción entre humanos y máquinas inteligentes.",
  link: "libros/yo_robot.pdf",
  genero: "Ciencia Ficción"
},
{
  titulo: "La casa de los espíritus",
  autor: "Isabel Allende",
  portada: "img/la_casa_de_los_espiritus.jpeg",
  descripcion: "Una historia familiar donde lo sobrenatural y lo político se mezclan.",
  link: "libros/la_casa_de_los_espiritus.pdf",
  genero: "Realismo Mágico"
},
{
  titulo: "Pedro Páramo",
  autor: "Juan Rulfo",
  portada: "img/pedro_paramo.jpeg",
  descripcion: "Un hombre llega a un pueblo lleno de fantasmas buscando a su padre.",
  link: "libros/pedro_paramo.pdf",
  genero: "Realismo Mágico"
},
{
  titulo: "El otoño del patriarca",
  autor: "Gabriel García Márquez",
  portada: "img/el_otono_del_patriarca.jpg",
  descripcion: "Una visión poética y surrealista del poder absoluto y la soledad del dictador.",
  link: "libros/el_otono_del_patriarca.pdf",
  genero: "Realismo Mágico"
},
{
  titulo: "Como agua para chocolate",
  autor: "Laura Esquivel",
  portada: "img/como_agua_para_chocolate.jpg",
  descripcion: "Una historia donde las emociones se transforman en sabores y aromas, mezclando el amor, la tradición y la magia en la cocina mexicana.",
  link: "libros/como_agua_para_chocolate.pdf",
  genero: "Realismo Mágico"
},
{
  titulo: "Fábulas de Esopo",
  autor: "Esopo",
  portada: "img/fabulas_de_esopo.jpeg",
  descripcion: "Relatos breves con enseñanzas morales universales protagonizados por animales.",
  link: "libros/fabulas_de_esopo.pdf",
  genero: "Fábula"
},
{
  titulo: "Fábulas de La Fontaine",
  autor: "Jean de La Fontaine",
  portada: "img/fabulas_de_la_fontaine.jpg",
  descripcion: "Historias que mezclan ingenio, humor y lecciones sobre la naturaleza humana.",
  link: "libros/fabulas_de_la_fontaine.pdf",
  genero: "Fábula"
},
{
  titulo: "Fábulas literarias",
  autor: "Tomás de Iriarte",
  portada: "img/fabulas_literarias.jpg",
  descripcion: "Una colección de relatos moralizantes con un tono satírico y poético.",
  link: "libros/fabulas_literarias.pdf",
  genero: "Fábula"
},
{
  titulo: "Fábulas en verso castellano",
  autor: "Félix María de Samaniego",
  portada: "img/fabulas_en_verso_castellano.jpeg",
  descripcion: "Historias breves en verso que enseñan valores mediante el ingenio y la ironía.",
  link: "libros/fabulas_en_verso_castellano.pdf",
  genero: "Fábula"
},
{
  titulo: "Los ríos profundos",
  autor: "José María Arguedas",
  portada: "img/los_rios_profundos.jpg",
  descripcion: "Una novela que explora el mundo andino desde la mirada de un joven mestizo.",
  link: "libros/los_rios_profundos.pdf",
  genero: "Literatura peruana"
},
{
  titulo: "La ciudad y los perros",
  autor: "Mario Vargas Llosa",
  portada: "img/la_ciudad_y_los_perros.jpg",
  descripcion: "Un retrato del autoritarismo y la juventud en un colegio militar de Lima.",
  link: "libros/la_ciudad_y_los_perros.pdf",
  genero: "Literatura peruana"
},
{
  titulo: "El hablador",
  autor: "Mario Vargas Llosa",
  portada: "img/el_hablador.jpeg",
  descripcion: "Una reflexión sobre la identidad, la selva y el choque entre culturas.",
  link: "libros/el_hablador.pdf",
  genero: "Literatura peruana"
},
{
  titulo: "Tradiciones peruanas",
  autor: "Ricardo Palma",
  portada: "img/tradiciones_peruanas.jpg",
  descripcion: "Narraciones históricas y costumbristas llenas de humor y cultura popular.",
  link: "libros/tradiciones_peruanas.pdf",
  genero: "Literatura peruana"
},
{
  titulo: "Historia del Perú antiguo",
  autor: "María Rostworowski",
  portada: "img/historia_del_peru_antiguo.jpeg",
  descripcion: "Un recorrido por las civilizaciones prehispánicas del Perú y su legado cultural.",
  link: "libros/historia_del_peru_antiguo.pdf",
  genero: "Historia"
},
{
  titulo: "Breve historia del mundo",
  autor: "Ernst H. Gombrich",
  portada: "img/breve_historia_del_mundo.jpg",
  descripcion: "Una narración clara y concisa de los acontecimientos más importantes de la humanidad.",
  link: "libros/breve_historia_del_mundo.pdf",
  genero: "Historia"
},
{
  titulo: "Sapiens: De animales a dioses",
  autor: "Yuval Noah Harari",
  portada: "img/sapiens.jpeg",
  descripcion: "Un viaje por la historia de la humanidad desde la prehistoria hasta la era moderna.",
  link: "libros/sapiens.pdf",
  genero: "Historia"
},
{
  titulo: "La segunda guerra mundial",
  autor: "Antony Beevor",
  portada: "img/la_segunda_guerra_mundial.jpeg",
  descripcion: "Una obra monumental que narra el conflicto más devastador del siglo XX.",
  link: "libros/la_segunda_guerra_mundial.pdf",
  genero: "Historia"
},
{
  titulo: "Los 7 hábitos de la gente altamente efectiva",
  autor: "Stephen R. Covey",
  portada: "img/los_7_habitos.jpeg",
  descripcion: "Un clásico de desarrollo personal que enseña principios para alcanzar el éxito y la armonía.",
  link: "libros/los_7_habitos.pdf",
  genero: "Autoayuda"
},
{
  titulo: "El poder del ahora",
  autor: "Eckhart Tolle",
  portada: "img/el_poder_del_ahora.jpg",
  descripcion: "Una guía espiritual para vivir en el presente y liberarse del sufrimiento mental.",
  link: "libros/el_poder_del_ahora.pdf",
  genero: "Autoayuda"
},
{
  titulo: "Cómo ganar amigos e influir sobre las personas",
  autor: "Dale Carnegie",
  portada: "img/como_ganar_amigos.jpeg",
  descripcion: "Consejos prácticos para mejorar las relaciones personales y profesionales.",
  link: "libros/como_ganar_amigos.pdf",
  genero: "Autoayuda"
},
{
  titulo: "El Resplandor",
  autor: "Stephen King",
  portada: "img/el_resplandor.jpg",
  descripcion: "Una aterradora historia sobre un hotel aislado, una familia atrapada y un mal que acecha en cada esquina.",
  link: "libros/el_resplandor.pdf",
  genero: "Terror"
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
  },
  {
   nombre: "John Green",
   foto: "img/john_green.jpg",
   bio: "Escritor estadounidense conocido por sus novelas juveniles que abordan el amor, la pérdida y la búsqueda del sentido de la vida.",
   libros: ["Bajo la misma estrella", "Ciudades de papel", "Buscando a Alaska"]
  },
  {
   nombre: "Fiódor Dostoyevski",
   foto: "img/dostoyevski.jpeg",
   bio: "Novelista ruso y uno de los más grandes pensadores de la literatura universal. Sus obras exploran la psicología humana y los dilemas morales.",
   libros: ["Crimen y castigo", "Los hermanos Karamázov", "El idiota"]
  },
  {
    nombre: "Erin Doom",
    foto: "img/erin_doom.jpg",
    bio: "Autora italiana reconocida por su novela 'El fabricante de lágrimas', que combina drama, romance y elementos de fantasía.",
    libros: ["El fabricante de lágrimas"]
  },
  {
    nombre: "Benjamin Lebert",
    foto: "img/benjamin_lebert.jpeg",
    bio: "Escritor alemán que debutó a los dieciséis años con su aclamada novela 'Crazy'. Su estilo refleja la confusión y sensibilidad de la juventud.",
    libros: ["Damián", "Crazy", "Der Vogel ist ein Rabe"]
  },
  {
  nombre: "Emilio Salgari",
  foto: "img/emilio_salgari.jpg",
  bio: "Novelista italiano célebre por sus relatos de aventuras llenos de acción y exotismo. Su personaje más famoso es Sandokán.",
  libros: ["El Corsario Negro", "Los tigres de Mompracem"]
},
{
  nombre: "Pseudónimo Desconocido",
  foto: "img/autor_desconocido.jpg",
  bio: "Autor anónimo de 'El crimen de la hipotenusa', un curioso relato que combina humor, misterio y matemáticas.",
  libros: ["El Crimen de la Hipotenusa"]
},
{
  nombre: "leia stone",
  foto: "img/leia stone.jpeg",
  bio: "Autora de fantasía épica, reconocida por su novela 'El último rey dragón', donde mezcla magia y política en un mundo imaginario.",
  libros: ["El último rey dragón"]
},
{
  nombre: "Maya Shepherd",
  foto: "img/maya_shepherd.jpeg",
  bio: "Autora alemana de fantasía y cuentos oscuros, conocida por sus reinterpretaciones de clásicos y su estilo poético.",
  libros: ["El coleccionista de brujas"]
},
{
  nombre: "Marco Aurelio",
  foto: "img/marco_aurelio.jpeg",
  bio: "Emperador romano y filósofo estoico, autor de 'Meditaciones', una de las obras más influyentes de la filosofía clásica.",
  libros: ["Meditaciones"]
},
{
  nombre: "Jean-Jacques Rousseau",
  foto: "img/rousseau.jpg",
  bio: "Filósofo, escritor y compositor suizo, una de las figuras más influyentes de la Ilustración. Autor de 'El contrato social'.",
  libros: ["El contrato social"]
},
{
  nombre: "José Ortega y Gasset",
  foto: "img/ortega_y_gasset.jpeg",
  bio: "Filósofo y ensayista español, destacado por su análisis del papel del individuo en la sociedad moderna.",
  libros: ["La rebelión de las masas"]
},
{
  nombre: "Albert Camus",
  foto: "img/albert_camus.jpg",
  bio: "Escritor y filósofo francés, representante del existencialismo y del pensamiento del absurdo. Ganador del Premio Nobel de Literatura.",
  libros: ["El mito de Sísifo", "La peste", "El extranjero"]
},
{
  nombre: "Robert Louis Stevenson",
  foto: "img/robert_louis_stevenson.jpg",
  bio: "Novelista escocés autor de clásicos de aventuras y misterio como 'La isla del tesoro' y 'El extraño caso del Dr. Jekyll y Mr. Hyde'.",
  libros: ["La isla del tesoro"]
},
{
  nombre: "Alexandre Dumas",
  foto: "img/alexandre_dumas.jpg",
  bio: "Novelista y dramaturgo francés, célebre por sus novelas históricas llenas de acción y heroísmo.",
  libros: ["Los tres mosqueteros", "El conde de Montecristo"]
},
{
  nombre: "Julio Verne",
  foto: "img/julio_verne.jpeg",
  bio: "Pionero de la ciencia ficción, sus novelas imaginan inventos y aventuras que se adelantaron a su tiempo.",
  libros: ["Viaje al centro de la Tierra", "La vuelta al mundo en 80 días"]
},
{
  nombre: "Daniel Defoe",
  foto: "img/daniel_defoe.jpg",
  bio: "Novelista y periodista inglés, considerado uno de los fundadores de la novela moderna con su obra 'Robinson Crusoe'.",
  libros: ["Robinson Crusoe"]
},
{
  nombre: "Frank Herbert",
  foto: "img/frank_herbert.jpg",
  bio: "Escritor estadounidense de ciencia ficción, célebre por su saga 'Dune', una de las más influyentes del género.",
  libros: ["Dune"]
},
{
  nombre: "George Orwell",
  foto: "img/george_orwell.jpg",
  bio: "Novelista y ensayista británico, autor de '1984' y 'Rebelión en la granja', obras clave sobre el poder y la libertad.",
  libros: ["1984"]
},
{
  nombre: "Isaac Asimov",
  foto: "img/isaac_asimov.jpg",
  bio: "Científico y escritor ruso-estadounidense, autor de la saga 'Fundación' y pionero en la narrativa sobre robots.",
  libros: ["Fundación", "Yo, robot"]
},
{
  nombre: "Isabel Allende",
  foto: "img/isabel_allende.jpeg",
  bio: "Escritora chilena reconocida por su estilo realista mágico y sus novelas centradas en la historia y la familia.",
  libros: ["La casa de los espíritus", "Eva Luna"]
},
{
  nombre: "Juan Rulfo",
  foto: "img/juan_rulfo.jpg",
  bio: "Escritor mexicano cuya obra breve pero trascendental retrata el mundo rural y la soledad humana.",
  libros: ["Pedro Páramo", "El llano en llamas"]
},
{
  nombre: "Laura Esquivel",
  foto: "img/laura_esquivel.jpeg",
  bio: "Escritora mexicana conocida por su mezcla de realismo mágico y gastronomía en 'Como agua para chocolate'.",
  libros: ["Como agua para chocolate"]
},
{
  nombre: "Esopo",
  foto: "img/esopo.jpg",
  bio: "Fabulista griego al que se atribuyen relatos morales protagonizados por animales parlantes.",
  libros: ["Fábulas de Esopo"]
},
{
  nombre: "Jean de La Fontaine",
  foto: "img/la_fontaine.jpeg",
  bio: "Poeta francés célebre por sus 'Fábulas', que mezclan humor, ironía y enseñanza moral.",
  libros: ["Fábulas de La Fontaine"]
},
{
  nombre: "Tomás de Iriarte",
  foto: "img/tomas_de_iriarte.jpeg",
  bio: "Poeta y fabulista español del siglo XVIII, conocido por sus 'Fábulas literarias'.",
  libros: ["Fábulas literarias"]
},
{
  nombre: "Félix María de Samaniego",
  foto: "img/samaniego.jpg",
  bio: "Fabulista español que escribió historias en verso con tono moralizante e irónico.",
  libros: ["Fábulas en verso castellano"]
},
{
  nombre: "Mario Vargas Llosa",
  foto: "img/mario_vargas_llosa.jpg",
  bio: "Escritor peruano y Premio Nobel de Literatura, figura central del boom latinoamericano.",
  libros: ["La ciudad y los perros", "El hablador"]
},
{
  nombre: "Ricardo Palma",
  foto: "img/ricardo_palma.jpeg",
  bio: "Escritor peruano, autor de las 'Tradiciones peruanas', mezcla de historia, costumbrismo y humor.",
  libros: ["Tradiciones peruanas"]
},
{
  nombre: "María Rostworowski",
  foto: "img/maria_rostworowski.jpg",
  bio: "Historiadora peruana reconocida por sus investigaciones sobre las culturas prehispánicas del Perú.",
  libros: ["Historia del Perú antiguo"]
},
{
  nombre: "Ernst H. Gombrich",
  foto: "img/ernst_gombrich.jpg",
  bio: "Historiador del arte y escritor austríaco-británico, autor de 'Breve historia del mundo'.",
  libros: ["Breve historia del mundo"]
},
{
  nombre: "Yuval Noah Harari",
  foto: "img/yuval_harari.jpg",
  bio: "Historiador israelí, autor de los éxitos 'Sapiens' y 'Homo Deus', que exploran la evolución humana.",
  libros: ["Sapiens: De animales a dioses"]
},
{
  nombre: "Antony Beevor",
  foto: "img/antony_beevor.jpg",
  bio: "Historiador y escritor británico, experto en historia militar y autor de 'La Segunda Guerra Mundial'.",
  libros: ["La segunda guerra mundial"]
},
{
  nombre: "Stephen R. Covey",
  foto: "img/stephen_covey.jpg",
  bio: "Autor estadounidense, reconocido por su influyente obra 'Los 7 hábitos de la gente altamente efectiva'.",
  libros: ["Los 7 hábitos de la gente altamente efectiva"]
},
{
  nombre: "Eckhart Tolle",
  foto: "img/eckhart_tolle.jpeg",
  bio: "Maestro espiritual y escritor alemán, conocido por su obra 'El poder del ahora'.",
  libros: ["El poder del ahora"]
},
{
  nombre: "Dale Carnegie",
  foto: "img/dale_carnegie.jpeg",
  bio: "Escritor estadounidense pionero en el desarrollo personal y las relaciones humanas.",
  libros: ["Cómo ganar amigos e influir sobre las personas"]
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

// ===============================
// 🌙 MODO NOCTURNO (versión persistente entre páginas)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const modoBtn = document.getElementById("modoBtn");

  // 🔄 Aplica el modo guardado al cargar cualquier página
  const modoGuardado = localStorage.getItem("modo");
  if (modoGuardado === "oscuro") {
    document.body.classList.add("dark-mode");
    if (modoBtn) modoBtn.textContent = "☀️";
  }

  // 🎛️ Escucha el botón si existe
  if (modoBtn) {
    modoBtn.addEventListener("click", () => {
      const oscuro = document.body.classList.toggle("dark-mode");
      modoBtn.textContent = oscuro ? "☀️" : "🌙";
      localStorage.setItem("modo", oscuro ? "oscuro" : "claro");
    });
  }
});





