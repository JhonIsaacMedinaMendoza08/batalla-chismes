import { Chismosa } from "./chismosa";

export class CompaneraCuriosa extends Chismosa {
    recolectarInformacion() {
        console.log("💼 Hace preguntas aparentemente profesionales a los compañeros de trabajo");
        this.modificarNivelChisme(0.5 + Math.random());
    }
    contarChisme(){
        console.log("📋 Comenta el chisme como ejemplo de vida en el trabajo");
        this.modificarNivelChisme(0.5);
        this.modificarReputacion(1);
    }
}