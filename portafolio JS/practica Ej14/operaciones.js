var boton = document.querySelector('#btnN');
boton.addEventListener('click', () => {
var inicio = parseInt(document.querySelector('#numIn').value);
var parar = parseInt(document.querySelector('#numMo').value);
var F= [];

for(var i = 0; i < parar; i++){
    F[0] = inicio;
    F[1] = inicio+2;
F[i] = F[i-2]+ F[i-1];

}
document.querySelector('#resultado').innerHTML = F;
});
