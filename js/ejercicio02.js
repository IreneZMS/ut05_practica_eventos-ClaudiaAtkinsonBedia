document.addEventListener("DOMContentLoaded", inicio);

function muestraOculta()
{
    if (this.innerHTML === "Ocultar contenidos")
    {
        document.getElementById("contenidos_" + this.id.slice(7)).style.display = "none";
        this.innerHTML = "Mostrar contenidos";
        return;
    }
    else
    {
        document.getElementById("contenidos_" + this.id.slice(7)).style.display = "block";
        this.innerHTML = "Ocultar contenidos";
    } 
}

function inicio()
{
    let enlaces = document.getElementsByTagName("a");
    for(let i = 0; i < enlaces.length; i++)
    {
        enlaces[i].addEventListener("click", muestraOculta);
    }
}