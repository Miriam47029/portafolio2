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
			let img = await getImage(pok.url);
			tabla = '<tr><td>'+(i+1)+'</td><td>'+pok.name+'</td><td><img src="'+img+'" height="80" "/></td></tr>';
			document.getElementById('tabla').innerHTML +=tabla
		});
	}
}

const getImage = async(liga) =>{
const peticion = await fetch(liga);
if(peticion.ok){
	const info = await peticion.json();
	return info.sprites.other.dream_world.front_default;
}
}