import { Tarjeta } from "./tarjeta.js";
const url = "https://pokeapi.co/api/v2/pokemon/";

window.onload = async() =>{
await getPokemones();
}
const getPokemones = async() =>{
const peticion = await fetch(url);
console.log(peticion);
if(peticion)
	{
		const info = await peticion.json();
		let tabla ="";
		const pokemones = info.results;
		//console.log(pokemones);
		pokemones.forEach( async(pok, i)=> {
			const card = new Tarjeta(3,pok.name,pok.url);
			const poktarjeta = await card.mostrar();
			document.getElementById('fila').innerHTML +=poktarjeta;
		});
	}
}
