export class Chismosa {
    #reputacion;
    #nivelChisme;
    constructor(nombre, reputacion, nivelChisme){
        if(this.constructor === Chismosa) {
            throw new Error("No se puede instanciar la clase Chismosa directamente");
        }
        this.nombre = nombre;
        this.#reputacion = reputacion;
        this.#nivelChisme = nivelChisme;
    }

    recolectarInformacion() {
        throw new Error("Método recolectarInformacion() no implementado");
    }

    contarChisme(){
        throw new Error("Método contarChisme() no implementado");
    }

    getReputacion() {
        return this.#reputacion;
    }

    getNivelChisme() {
        return this.#nivelChisme;
    }

    modificarReputacion(valor) {
        this.#reputacion = Math.max(0, Math.min(10, this.#reputacion + valor));
    }

    modificarNivelChisme(valor) {
        this.#nivelChisme = Math.max(0, Math.min(10, this.#nivelChisme + valor));
    }
}