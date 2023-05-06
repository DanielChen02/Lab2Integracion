import { Foto } from "./foto";
import { Person } from "./person";

export class DoblePruebaSpy implements Foto{
    private setEtiquetaWasInvoked: boolean;
    constructor() {
        this.setEtiquetaWasInvoked = false;
    }

    setEtiqueta(etiqueta: Person): void {
        this.setEtiquetaWasInvoked = true;
    }
    getEtiqueta(): Person[] {
        throw new Error("Method not implemented.");
    }
    setRuta(ruta: string): void {
        throw new Error("Method not implemented.");
    }
    getRuta(): string {
        throw new Error("Method not implemented.");
    }
    setNombreFichero(nombreFichero: string): void {
        throw new Error("Method not implemented.");
    }
    getNombreFichero(): string {
        return "pruebaEtiquetar"
    }
    buscarFoto(nombreFichero: string): string;
    buscarFoto(): string;
    buscarFoto(nombreFichero?: unknown): string {
        return "pruebaEtiquetar"
    }
    verFoto(): void {
        throw new Error("Method not implemented.");
    }

    wasSetEtiquetaInvoke(): boolean {
        return this.setEtiquetaWasInvoked;
    }
 

}
