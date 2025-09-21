// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Mami eres lo que quiero", time: 33 },
  { text: "Cuando veo tu sonrisa", time: 35 },
  { text: "Y es lo que me debilita", time: 38.5 },
  { text: "Quiero llevarte a una cita", time: 41 },
  { text: "Yo te quiero enseñar todo", time: 43 },
  { text: "El amor que yo te tengo", time: 45 },
  { text: "Tan sencilla que tu eres", time: 49 },
  { text: "Para mi tu eres PERFECTAAA", time: 52 },
  { text: "Yo te quiero amar", time: 52 },
  { text: "Te quiero enseñar", time: 57 },
  { text: "El amor y más", time: 60 },
  { text: "Eres PERFECTAAAAAA", time: 63 },
  { text: "Tu cuerpo hermoso", time: 65 },
  { text: "Que luce tan belloo", time: 67},
  { text: "Y esos ojitoss", time: 70 },
  { text: "Ni se diga másss", time: 72 },
  { text: "Se diga más", time: 77.6 },
  { text: "...", time: 81 },
  { text: "...", time: 85 },
  { text: "...", time: 89 },
  { text: "...", time: 93 },
  { text: "...", time: 95 },
  { text: "No quiero perder tus besos", time: 97 },
  { text: "Nuestra historia es un cuento", time: 99 },
  { text: "Mija, eres la que quiero", time: 102 },
  { text: "Tú eres mi gran deseo", time: 105 },
  { text: "Y yo te quiero enseñar todo", time: 106 },
  { text: "El amor que yo te tengo", time: 110 },
  { text: "Tan sencilla que tú eres", time: 112 },
  { text: "Para mí tú eres perfecta", time: 115 },
  { text: "Yo te quiero amar", time: 118 },
  { text: "Te quiero enseñar", time: 121 },
  { text: "El amor y más", time: 124 },
  { text: "Y eres perfecta", time: 127 },
  { text: "Tu cuerpo hermoso", time: 129 },
  { text: "Que luce tan bello", time: 132 },
  { text: "Y esos ojitos", time: 135 },
  { text: "Ni se diga más", time: 136 },
  { text: "Ni se diga más", time: 139 },
  { text: "¡Oye, nomás!", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);