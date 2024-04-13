var boton = document.getElementById('calcularD');
boton.addEventListener('click',cosechas);
function cosechas(){
	var div = document.querySelector('#resultado');
	var dia = parseInt(document.getElementById('numeroD').value);
	var calcularD; 
	calcularD = dia % 2; 
	if(calcularD == 0 ){
		div.innerHTML="tomates";
		div.style.background= '#990000';
		div.style.color='#FFFFFF'
		div.style.border='0px';
	} 
	else if ( calcularD == 1)
	{
		div.innerHTML="Cebollas";
		div.style.background= '#66CC00';
		div.style.border='20px dotted #006600';
	}

}