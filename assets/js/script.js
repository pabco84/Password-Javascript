
let b = document.querySelector('#boton');

b.addEventListener("click", function(){
    let p1 = document.querySelector('#pass1').value;
let p2 = document.querySelector('#pass2').value;
let p3 = document.querySelector('#pass3').value;
if ((p1 == 9) && (p2 == 1) && (p3 == 1)){
    par = document.querySelector('#resultado')
    par.innerHTML = 'Password 1 correcto'}
        else if ((p1 == 7) && (p2 == 1) && (p3 == 4)) {
            par = document.querySelector('#resultado')
            par.innerHTML = 'Password 2 correcto'}
    else {
        par = document.querySelector('#resultado')
        par.innerHTML = 'Password incorrecto';    }
    
});