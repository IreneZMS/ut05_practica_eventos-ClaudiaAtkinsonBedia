let caja = document.getElementById("info");
let body = document.getElementById("cuerpo");
body.addEventListener("mousedown", cambiarColor);
body.addEventListener("keypress", cambiarColor2);
body.addEventListener("mousemove", volverABlanco);

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