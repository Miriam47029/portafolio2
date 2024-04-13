var mionjeto = new Object();

const persona = {
nombre:"carlos",
edad:16,
apellidos:"lopez",
saludar: function(){
    return 'hola!, soy '+this.nombre+' '+this.apellidos;
}
};
const persona2 = {
    nombre:"daniel",
    edad:45,
    apellidos:"cervantes",
    saludar: function(){
        return 'hola!, soy '+this.nombre+' '+this.apellidos;
    }
    };const persona3 = {
        nombre:"maria",
        edad:17,
        apellidos:"lopez",
        saludar: function(){
            return 'hola!, soy '+this.nombre+' '+this.apellidos;
        }
        };

let personas = [persona,persona2,persona3];
console.log(personas);
let tabla="";
for(let i=0; i<personas.length; i++){
tabla +='<tr><td>'+[i+1]+'</td><td>'+personas[i].nombre+'</td><td>'+personas[i].apellidos+'</td><td>'+personas[i].edad+'</td></tr>'
}
document.getElementById('tabla').innerHTML = tabla;