var numeros='';
for(var i=1; i<=10; i++)
{
	numeros += i+' ';
	//numeros = numeros + i+ ' ';
}
document.querySelector('#div1').innerHTML = numeros;


var btn = document.querySelector('#btn1');
btn.addEventListener('click', () =>{
	var ini = parseInt(document.querySelector('#ini').value);
	var fin = parseInt(document.querySelector('#Fin').value);
	var losnumeros='';
	var contador= 0;
	var suma=0;
	var promedio=0;
	for (var i = ini; i <= fin; i++)
	{
		losnumeros += i+' ';
		suma+=i;
		contador ++;
		promedio=suma/contador;
	}
	
	document.querySelector('#div1').innerHTML = losnumeros +"  La suma es de:  " + suma + "  .El promedio es: " +promedio;
});