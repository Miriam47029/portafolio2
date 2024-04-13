var boton = document.getElementById('btnpromedio');
boton.addEventListener('click',sacarP);
function sacarP(){
	var C1 = parseInt(document.getElementById('calf1').value);
	var C2 =parseInt(document.getElementById('calf2').value);
	var C3= parseInt(document.getElementById('calf3').value);
	var Or = parseInt(document.getElementById('ordinario').value);
	var suma = (C1+C2+C3) / 3;
	var resultado = (suma + Or)/2;
	document.getElementById('lblResultado').innerHTML = "El porcentaje es de: "+resultado;
}
