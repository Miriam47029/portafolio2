var btn = document.querySelector('#btn1');
btn.addEventListener('click', ()=>{
	var numero = parseInt(document.querySelector('#num1').value);
	var numero2 = parseInt(document.querySelector('#num2').value);
	var mult= ""; 
    var suma =0;
	for(var i=numero; i >= 1; i-=3) 
	{
		mult = i * numero2 ;
        suma += mult;
		document.querySelector('#div').innerHTML += i + " X " + numero2 + " = " + mult +"<br>";
        document.querySelector('#suma').innerHTML = "La suma total es: " + suma;
        
    }
    

    document.querySelector('#suma').style.color = "#0033FF";
    if( suma > 200){
        document.querySelector('#suma').style.color = "#00FF33";
    }
});
