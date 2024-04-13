var boton = document.getElementById('btnResultado');
boton.addEventListener('click',procesar );

function procesar(){
    var num1 = parseInt(document.getElementById('n1').value);
    var num2 = parseInt(document.getElementById('n2').value);
    var op = document.getElementById('op').value;
    var resultado;
    if(op == 1){
        resultado= sumar(num1,num2);
    }
    else if (op == 2)
    {
        resultado= restar(num1,num2);
    }
    else if(op ==3){
        resultado= dividir(num1,num2);
    }
    else if(op ==4){
        resultado=multiplicacion(num1,num2);
    }
    else if(op ==5){
        
    }
    
    document.getElementById('res').innerHTML = "El resultado de la operacion es: " +resultado;
}
function sumar(a,b){
return(a+b);
}
function restar(x,y){
return(x-y);
}
function dividir(hi,mundo){
var div = hi / mundo;
return div;
}
function multiplicacion(d,x){
    return(d*x);
}
function potencia(e,m){
return(Math.pow(e,m));
}