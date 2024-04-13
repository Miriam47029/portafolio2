var boton = document.getElementById('calcular');
boton.addEventListener('click',binomio);
function binomio(){
	var a = parseInt(document.getElementById('valorA').value);
	var b = parseInt(document.getElementById('valorB').value);
	var resultado = (a*a) + 2 *(a*b) + (b*b);
	document.getElementById('resultado').innerHTML = "El binomio es: "+resultado;
}