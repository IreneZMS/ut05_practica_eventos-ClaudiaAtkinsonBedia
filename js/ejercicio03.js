let caja = document.getElementById("info");
let body = document.getElementById("cuerpo");
let ratonTeclado = document.getElementById("rT");
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");
let teclaP = document.getElementById("teclaPulsada");
let codTeclaP = document.getElementById("codigoTeclaPulsada");
body.addEventListener("mousedown", cambiarColor);
body.addEventListener("keypress", cambiarColor2);
body.addEventListener("mousemove", volverABlanco);
body.addEventListener("mousemove", funcionRaton);
body.addEventListener("keypress", teclado);
body.addEventListener("mousemove", updateDisplay, false);
body.addEventListener("mouseenter", updateDisplay, false);
body.addEventListener("mouseleave", updateDisplay, false);
body.addEventListener("keypress", presionarTecla);

function updateDisplay(event) 
{
    pageX.innerText = event.pageX;
    pageY.innerText = event.pageY;
}

function cambiarColor()
{
    caja.style.backgroundColor = "#FFFFCC";
}

function cambiarColor2()
{
    caja.style.backgroundColor = "#CCE6FF";
}

function volverABlanco()
{
    caja.style.backgroundColor = "white";
}

function funcionRaton()
{
    ratonTeclado.innerHTML = "Ratón";
}

function teclado()
{
    ratonTeclado.innerHTML = "Teclado";
}

function presionarTecla(e)
{
    let tecla = e.key;
    let codTecla = e.keyCode;
    teclaP.innerHTML = "Carácter[" + tecla + "]";
    codTeclaP.innerHTML = "Código[" + codTecla + "]";
}