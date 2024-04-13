var div= document.querySelector('#area');
var texto = document.querySelector('#txt');
texto.addEventListener('keyup', function(){
	div.innerHTML = texto.value;
});

var fondo = document.querySelector('#fondo');
fondo.addEventListener('change',function(){
	div.style.background = fondo.value;
});

var color = document.querySelector('#texto');
color.addEventListener('change',function(){
	div.style.color = color.value;
});

var fuente = document.querySelector('#fuente');
fuente.addEventListener('change',function(){
	div.style.fontSize = fuente.value+"px";
});

var alto=document.querySelector('#alto');
alto.addEventListener('change',function(){
	div.style.height = alto.value+"px";
});

var ancho=document.querySelector('#ancho');
ancho.addEventListener('change',function(){
	div.style.width = ancho.value+"px";
});

var borde= document.querySelector('#borde');
var tipo = document.querySelector('#tipoBorder');
borde.addEventListener('change',function(){
	div.style.border = borde.value+"px " +tipo.value+ " #000";
});

tipo.addEventListener('change',function(){
	div.style.border = borde.value+"px " +tipo.value+ " #000";
});
