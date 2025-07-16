
// Subclase TiaVecina que hereda de Chismosa
import { Chismosa } from './Chismosa.js';

export class TiaVecina extends Chismosa {
  recolectarInfo() {
    console.log("👵 Aprovecha la reunión del barrio para escuchar discretamente");
    this.modificarNivelChisme(Math.random() * 2 + 1); // Aumenta bastante el nivel de chisme
  }

  contarChisme() {
    console.log("☕ Difunde el chisme mientras ofrece café");
    const exagera = Math.random() > 0.5;
    this.modificarNivelChisme(exagera ? 2 : 1);        // Puede exagerar
    this.modificarReputacion(exagera ? -1 : 0.5);      // Y afectar su reputación
  }
}