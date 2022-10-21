let caja = document.getElementById("info");
caja.addEventListener("mousedown", cambiarColor);
caja.addEventListener("keypress", cambiarColor2);

function cambiarColor()
{
    caja.style.backgroundColor = "#FFFFCC";
}

function cambiarColor2()
{
    alert("Hola");
    caja.style.backgroundColor = "#CCE6FF";
}