window.onload = inicio;

function inicio()
{
    let caja = document.getElementById("info");
    let body = document.getElementById("cuerpo");
    let ratonTeclado = document.getElementById("rT");
    let parr1 = document.getElementById("parrafo1");
    let parr2 = document.getElementById("parrafo2");
    document.addEventListener("mousedown", cambiarColor);
    document.addEventListener("mousemove", moverRaton);
    document.addEventListener('mousemove', posicionCliente);
    body.addEventListener("mousemove", posicionPag, false);
    document.addEventListener("keypress", presionarTecla);

    function posicionPag(e) 
    {
        parr2.innerText = "Página [" + e.pageX + ", " + e.pageY + "]";
    }

    function posicionCliente(e) 
    {
        parr1.innerText = "Navegador [" + e.screenX + ", " + e.screenY + "]";
    }

    function cambiarColor()
    {
        caja.style.backgroundColor = "#FFFFCC";
    }

    function moverRaton()
    {
        caja.style.backgroundColor = "white";
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
}