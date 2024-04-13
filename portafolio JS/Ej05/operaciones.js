var boton = document.getElementById('calcular');
boton.addEventListener('click', sacarV);
function sacarV(){
	var distancia = parseInt(document.getElementById('distancia').value);
	var tiempo = parseInt(document.getElementById('tiempo').value);
	var resultado= distancia/tiempo;
	document.getElementById('velocidadFinal').innerHTML="La velocidad Final es de: "+resultado+"km/h";
}