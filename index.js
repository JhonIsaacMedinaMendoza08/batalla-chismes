
// Importa la librería 'chalk' para dar color a los mensajes en consola
import chalk from 'chalk';

// Importa las subclases de chismosas desde el directorio de clases
import { TiaVecina } from './classes/TiaVecina.js';
import { CompaneraCuriosa } from './classes/CompaneraCuriosa.js';
import { EstudianteEspia } from './classes/EstudianteEspia.js';

// Arreglo de participantes: cada chismosa tiene un nombre, reputación inicial y nivel de chisme inicial
const participantes = [
  new TiaVecina("Doña Rosa", 7, 2),
  new CompaneraCuriosa("Carla", 6, 3),
  new EstudianteEspia("Laura", 8, 1)
];

// Función para simular la batalla de una chismosa en 2 rondas
function simularBatalla(chismosa) {
  for (let i = 0; i < 2; i++) {
    console.log(`\n🌀 Ronda ${i + 1} de ${chismosa.nombre}`);
    chismosa.recolectarInfo();    // Ejecuta su forma única de recolectar información
    chismosa.contarChisme();      // Ejecuta su forma única de contar el chisme
  }

  // Obtiene los valores finales de la chismosa
  const nivel = chismosa.getNivelChisme();
  const reputacion = chismosa.getReputacion();

  // Aplica color a los resultados: morado si el chisme fue viral, naranja si tiene buena reputación
  const colorNivel = nivel >= 8 ? chalk.magenta : chalk.gray;
  const colorReputacion = reputacion >= 7 ? chalk.hex('#FFA500') : chalk.gray;

  // Muestra las estadísticas finales de la chismosa
  console.log(
    `\n📊 Estadísticas de ${chismosa.nombre}:` +
    `\nNivel de chisme: ${colorNivel(nivel.toFixed(1))}` +
    `\nReputación: ${colorReputacion(reputacion.toFixed(1))}\n`
  );

  return nivel; // Devuelve el nivel de chisme para comparar quién fue la más viral
}

console.log(chalk.bold("\n💥 ¡Batalla de Chismes Iniciada! 💥"));

let maxNivel = 0;    // Lleva el control del nivel de chisme más alto
let reina;           // Guarda a la chismosa más viral

// Ejecuta la simulación para cada participante
for (const chismosa of participantes) {
  const nivel = simularBatalla(chismosa);
  if (nivel > maxNivel) {
    maxNivel = nivel;
    reina = chismosa;
  }
}

// Anuncia a la reina del chisme viral al final
console.log(chalk.bold.bgMagenta(`👑 La reina del chisme viral es ${reina.nombre} con nivel ${maxNivel.toFixed(1)} 👑`));