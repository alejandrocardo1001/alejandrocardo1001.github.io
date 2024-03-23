let botonUno = document.getElementById('botonUno');
let contador = document.getElementById("cantidad");
let sumar = 1
//console.log(botonUno)
botonUno.addEventListener("click", function() {
    contador.innerText = parseInt(contador.innerText) + sumar
    
})

let botonDos = document.getElementById('botonDos');
let contado = document.getElementById("canti");
let suma = 1

botonDos.addEventListener("click", function() {
    contado.innerText = parseInt(contado.innerText) + suma

})

let botonTres = document.getElementById('botonTres');
let contad = document.getElementById("cantida");
let sum = 1

botonTres.addEventListener("click", function() {
    contad.innerText = parseInt(contad.innerText) + sum
    
})

let botonCuatro = document.getElementById('botonCuatro');
let conta = document.getElementById("cantid");
let su = 1

botonCuatro.addEventListener("click", function() {
    conta.innerText = parseInt(conta.innerText) + su
})
