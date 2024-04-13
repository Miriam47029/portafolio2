var boton = document.getElementById("btnCalcular");
boton.addEventListener('click',porcentaje);
function porcentaje()
/*{
	var num = parseInt.document.getElementById('precio').value;
	var op  =parseInt.document.getElementById('descuento').value;
	var resultado; 
	if (op == 10)
	{
		resultado = diez(num);
	}
	else if (op == 15 ){
		resultado = quince(num);
	}
	else if ( op == 20)
	{
		resultado = veinte(num);
	}
	document.getElementById('precioFinal').innerHTML = "El porcentaje es de: "+resultado;
}
function diez(a){
	var z = (a * 10) / 100 ;
	var a = a - z;
return(a);
}
function quince(b){
	var x = (b * 15) / 100; 
	var b = b - x;
	return(b);
}
function veinte(c){
	var y = (c * 20) / 100; 
	var c = c - y;
	return(c);
}
function treinta(d){

}
function treintacinco(e){

}
function cincuenta(f){

}
function cincuentacinco(h){

}*/
{
	var precio= parseInt.document.getElementById('precio').value;
	var descuento = parseInt.document.getElementById('descuento').value;
	var resultado = precio - (precio * (descuento/100));
	document.getElementById('precioFinal').innerHTML='resultado es: '+resultado;
}