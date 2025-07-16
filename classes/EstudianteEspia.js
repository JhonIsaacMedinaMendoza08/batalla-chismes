
// Subclase EstudianteEspia que hereda de Chismosa
import { Chismosa } from './Chismosa.js';

export class EstudianteEspia extends Chismosa {
  recolectarInfo() {
    console.log("📱 Lee chats ajenos desde el último puesto del salón");
    this.modificarNivelChisme(2 + Math.random()); // Nivel sube rápido
  }

  contarChisme() {
    console.log("📲 Filtra el chisme por estados en WhatsApp");
    const descubierta = Math.random() < 0.3;
    this.modificarNivelChisme(2);               // Difusión masiva
    this.modificarReputacion(descubierta ? -2 : 0); // Riesgo de perder reputación
  }
}