var btn = document.querySelector('#btn1');

btn.addEventListener('click',()=>{

var num2 = parseInt(document.querySelector('#num2').value);
var suma= 0;
var lista;
for(var i=2; i<= num2; i+=2)
{
	suma += i;
	lista += "," +i;
}
document.getElementById("resultado").innerHTML ="Los numeros pares de la lista son: "+ lista + "La suma es: "+suma;

});