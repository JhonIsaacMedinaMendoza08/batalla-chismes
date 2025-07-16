
// Subclase CompaneraCuriosa que hereda de Chismosa
import { Chismosa } from './Chismosa.js';

export class CompaneraCuriosa extends Chismosa {
  recolectarInfo() {
    console.log("💼 Hace preguntas aparentemente profesionales a los compañeros de trabajo");
    this.modificarNivelChisme(0.5 + Math.random()); // Sube lentamente el nivel de chisme
  }

  contarChisme() {
    console.log("📋 Comenta el chisme como ejemplo de vida en el trabajo");
    this.modificarNivelChisme(0.5);    // Chisme poco escandaloso
    this.modificarReputacion(1);       // Pero gana reputación
  }
}