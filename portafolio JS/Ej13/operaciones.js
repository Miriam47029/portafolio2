var boton = document.querySelector('#btnN');
boton.addEventListener('click', ()=> {
var parar = parseInt(document.querySelector('#num').value);
var F= [];
F[0] = 1;
F[1] = 2;
for(var i = 2; i < parar; i++){
F[i] = F[i-2]+F[i-1];
}
document.querySelector('#resultado').innerHTML = "0,1,"+F;
});