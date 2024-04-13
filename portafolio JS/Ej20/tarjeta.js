export class Tarjeta{
	col='';
	nombre='';
	url='';
	constructor(c,n,u){
		this.col = c;
		this.nombre = n;
		this.url = u;
	}
	async mostrar(){
		const info = await getImage(this.url);
		const img = info[0];
		const id = info[1];
		let habilidades='';
		const habi = info[2];
		const tipos = info[3];
		const altura = info[4]/10;
		const peso = info[5]/10;
		habi.forEach(hab => {
			habilidades+=hab.ability.name+' ';
		});
		tipos.forEach(tip => {
			habilidades+=tip.type.name+' ';
		});
	
		let card='<div class="col-md-'+this.col+' mb-3 ">';
		card +='<div class="card bg-info-subtle rounded-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded">';
		card += '<img src="'+img+'" height="120" class="card-img-top p-3">';
		card += ' <div class="card-body text-center">';
		card += '<h5 class="card-title text-capitalize">';
		card += '<span class="badge text-bg-danger">'+id+'</span> ';
		card += this.nombre+'</h5>';
		card += ' <p class="card-text">Habilidades: <b>'+habilidades+'</b></p>';
		card+='<p class="badge text-bg-success" >Altura: '+altura+'</p>'+'<b> </b>';
		card+='<p class="badge text-bg-success"> Peso: '+peso+'</p>'
		card +='</div></div></div>';
		return card;
	}
}
const getImage = async(liga) =>{
	let detalles = [];
	const peticion = await fetch(liga);
	if(peticion.ok){
		const info = await peticion.json();
		detalles.push(info.sprites.other.dream_world.front_default);
		detalles.push(info.id);
		detalles.push(info.abilities);
		detalles.push(info.types);
		detalles.push(info.height);
		detalles.push(info.weight);
		return detalles ;
	}
	}