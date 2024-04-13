var boton = document.querySelector("#btnFac");
boton.addEventListener('click', () => {
 var num1 = parseInt(document.querySelector('#num').value);
 var factorial = 1;
 var txt =  num1+"! = ";
for( var i = num1; i >= 1; i--)
{
	
factorial = factorial * i;
txt += i+' X '; 
} 
txt = txt.slice(0, txt.length - 2);
txt += " = "+factorial;
document.querySelector("#resultado").innerHTML = txt;
});