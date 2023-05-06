//Se importan las clases necesarias para ejecutar los casos de prueba

import { Person } from './person';
import {DoblePruebaSpy} from './doble-prueba';





// Nombre: Realizar un seteo de una etiqueta a un objeto Foto perteneciente a un objeto Persona.
// Objetivo: Comprobar que se está ejecutando el metodo para realizar el Set de una etiqueta a un objeto  Foto.
// Datos de prueba: persona = new Person('Daniel@gmail.com',"Daniel","Chen","Mondragon","123","M"), foto1 = new DoblePruebaSpy;
// Resultado esperado: El DoblePruebaSpy devuelve True porque sí se ejecutó el metodo para setear una etiqueta en la foto.

// ============================================Caso Valido ======================================================================


describe('etiquetarFoto', () => {
  let persona: any;
  let foto1: any;
  beforeEach(() => {
    persona = new Person('Daniel@gmail.com',"Daniel","Chen","Mondragon","123","M");
    foto1 = new DoblePruebaSpy;
    persona.setListaFotos(foto1);
});

    it('Realizar un seteo de una etiqueta a un objeto Foto', () => {
        persona.etiquetarFoto("pruebaEtiquetar", persona);
        expect(foto1.wasSetEtiquetaInvoke()).toBe(true);
    });

    afterEach(function () {
        persona = null;
        foto1 = null;
    });
    
});



// Nombre: No Realiza un seteo de una etiqueta a un objeto Foto perteneciente a un objeto Persona.
// Objetivo: Comprobar que NO se está ejecutando el metodo para realizar el Set de una etiqueta a un objeto Foto.
// Datos de prueba: persona = new Person('Daniel@gmail.com',"Daniel","Chen","Mondragon","123","M"), foto1 = new DoblePruebaSpy;
// Resultado esperado: El DoblePruebaSpy devuelve False ya que la foto no se encuentra y no se ejecuta el metodo para setear una etiqueta en la foto.

// ============================================Caso Invalido ======================================================================


describe('No etiquetarFoto', () => {
    let persona: any;
    let foto1: any;
    beforeEach(() => {
      persona = new Person('Daniel@gmail.com',"Daniel","Chen","Mondragon","123","M");
      foto1 = new DoblePruebaSpy;
      persona.setListaFotos(foto1);
  });
  
      it('No se realiza el seteo de una etiqueta a un objeto Foto', () => {
          persona.etiquetarFoto("NoEtiquetar", persona);
          expect(foto1.wasSetEtiquetaInvoke()).toBe(false);
      });
  
      afterEach(function () {
          persona = null;
          foto1 = null;
      });
      
  });




/*

public etiquetarFoto(nombreFichero:string, p:Person):void{
  for (var i = 0; i < this.getListaFotos().length; i++) {
      var f = this.getListaFotos()[i];
      if(f.buscarFoto(nombreFichero)===""){
          throw new Error("La foto no existe");
      }
      else{
          if(f.getNombreFichero()===nombreFichero){
              f.setEtiqueta(p);
              break;
          }
      }
  }
}

*/