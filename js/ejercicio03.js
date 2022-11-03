let caja = document.getElementById("info");
let ratonTeclado = document.getElementById("rT");
let parr1 = document.getElementById("parrafo1");
let parr2 = document.getElementById("parrafo2");
document.addEventListener("mousedown", cambiarColor);
document.addEventListener("mousemove", volverABlanco);
document.addEventListener("mousemove", funcionRaton);
document.addEventListener("mousemove", posicionPag, false);
document.addEventListener("mouseenter", posicionPag, false);
document.addEventListener("mouseleave", posicionPag, false);
document.addEventListener('mousemove', posicionCliente);
document.addEventListener("keypress", presionarTecla);

function posicionPag(e) 
{
    parr2.innerText = "Página [" + e.pageX + ", " + e.pageY + "]";
}

function posicionCliente(e) 
{
    parr1.innerText = "Navegador [" + e.clientX + ", " + e.clientY + "]";
}


function cambiarColor()
{
    caja.style.backgroundColor = "#FFFFCC";
}

function volverABlanco()
{
    caja.style.backgroundColor = "white";
}

function funcionRaton()
{
    ratonTeclado.innerHTML = "Ratón";
}

function presionarTecla(e)
{
    let tecla = e.key;
    let codTecla = e.keyCode;
    parr1.innerHTML = "Carácter [" + tecla + "]";
    parr2.innerHTML = "Código [" + codTecla + "]";
    caja.style.backgroundColor = "#CCE6FF";
    ratonTeclado.innerHTML = "Teclado";
}