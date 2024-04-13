 export class Mascota {
    nombre = "";
    tipo = "";
    constructor(n,t)
    {
        this.nombre = n;
        this.tipo = t;
    }
    saludar(){
        return 'hola, soy '+this.nombre+' y soy '+this.tipo;
    }
}