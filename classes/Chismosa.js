
// Clase abstracta base para todas las chismosas
export class Chismosa {
  #reputacion;
  #nivelChisme;

  constructor(nombre, reputacion, nivelChisme) {
    if (this.constructor === Chismosa) {
      throw new Error("No se puede instanciar una clase abstracta.");
    }
    this.nombre = nombre;
    this.#reputacion = reputacion;
    this.#nivelChisme = nivelChisme;
  }

  // Métodos que deben ser implementados por las subclases
  recolectarInfo() {
    throw new Error("Debe implementar el método recolectarInfo()");
  }

  contarChisme() {
    throw new Error("Debe implementar el método contarChisme()");
  }

  // Métodos públicos para acceder a propiedades privadas
  getReputacion() {
    return this.#reputacion;
  }

  getNivelChisme() {
    return this.#nivelChisme;
  }

  // Métodos para modificar reputación y nivel de chisme de forma segura
  modificarReputacion(valor) {
    this.#reputacion = Math.max(0, Math.min(10, this.#reputacion + valor));
  }

  modificarNivelChisme(valor) {
    this.#nivelChisme = Math.max(0, Math.min(10, this.#nivelChisme + valor));
  }
}