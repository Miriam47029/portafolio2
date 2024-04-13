
import {Mascota} from './Mascota.js';
import { Boton } from './boton.js';
const firu = new Mascota('Firulais','perro');
const michi = new Mascota('Michi' , 'gato');
console.log(michi.saludar());
console.log(firu.saludar());
const btn1 = new Boton('Eliminar','danger','btn1','btnEliminar');
const btn2 = new Boton('Guardar','success','btn2','btnGuardar');
const btn3 = new Boton('Editar','warning','btn3','btnEditar')
var div1 = document.querySelector('#div1');
div1.innerHTML = btn1.mostrar()+btn2.mostrar()+btn3.mostrar();