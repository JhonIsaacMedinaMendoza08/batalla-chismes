import { Chismosa } from "./chismosa";

export class TiaVecina extends Chismosa {
    recolectarInformacion() {
        console.log("👵 Aprovecha la reunión del barrio para escuchar discretamente");
        this.modificarNivelChisme(Math.random() * 2+1);
    }

    contarChisme(){
        console.log(`👵 ${this.nombre} cuenta un chisme sobre la última reunión del barrio.`);
        const exagera = Math.random() < 0.5;
        this.modificarNivelChisme(exagera ? 2 : 1);
        this.modificarReputacion(exagera ? -1 : 0.5);
    }
}