var boton = document.getElementById('calcular');
boton.addEventListener('click', sacarMonto);
function sacarMonto(){
	var articulos = parseInt(document.getElementById('tarjetas').value);
	var precio = parseInt(document.getElementById('precio').value);
	var resultado;
	var resultadoF 
	if(articulos > 15)
	{
		resultado= descuento(precio);
		resultadoF = articulos * resultado;
	}
	else {
		resultadoF = articulos * precio ; 
	}
	document.getElementById('totalT').innerHTML= "La compra final es de: "+resultadoF;
}
function descuento(p){
	var z = (p * 10) / 100 ;
	var p = p - z;
return(p);
}