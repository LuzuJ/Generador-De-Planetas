const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Componentes para generar nombres y características
const prefijos = ["Xy", "Zor", "Glar", "Kry", "Ve"];
const nucleos = ["no", "pla", "tar", "ga", "lo"];
const sufijos = ["don", "th", "ia", "os", "prime"];
const tipos = ["Rocoso", "Gaseoso", "Helado", "Volcánico", "Oceánico"];
const descripciones = [
  "con anillos de cristal y lunas gemelas.",
  "cuya atmósfera es tóxica para los humanos.",
  "conocido por sus tormentas de arena de mil años.",
  "donde la flora local es bioluminiscente.",
  "un antiguo puesto de avanzada de una civilización perdida."
];

// Función para obtener un elemento aleatorio de un array
const aleatorio = (arr) => arr[Math.floor(Math.random() * arr.length)];

app.get('/planeta', (req, res) => {
  const nombrePlaneta = `${aleatorio(prefijos)}${aleatorio(nucleos)}${aleatorio(sufijos)}`;
  const tipoPlaneta = aleatorio(tipos);
  const descPlaneta = `un planeta ${tipoPlaneta.toLowerCase()} ${aleatorio(descripciones)}`;
  
  res.status(200).json({
    nombre: nombrePlaneta,
    tipo: tipoPlaneta,
    descripcion: descPlaneta,
  });
});

const server = app.listen(port, () => {
  console.log(`Servidor de planetas escuchando en el puerto ${port}`);
});

module.exports = { app, server };