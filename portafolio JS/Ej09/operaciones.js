var piezas = document.getElementById('calcular');
piezas.addEventListener('click',precio);

function precio(){
	var produccion = parseInt(document.getElementById('piezas').value);
var sueldo = parseInt(document.getElementById('sueldo').value);
var resultado; 
var resultadoF;
	if(5650 > produccion)
	{
		resultado = descuento(sueldo);
	}
	else if (5650 <= produccion) {
		
		resultadoF = produccion * 0.3;
		resultado = sueldo + resultadoF;
		
	}
	document.getElementById('resultado').innerHTML = "El suelo total es de: "+ resultado;
}
function descuento(p){
	var z = (p * 25) / 100 ;
	var p = p + z;
return(p);
}

