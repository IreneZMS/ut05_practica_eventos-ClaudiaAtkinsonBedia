contenido = document.getElementById("contenidos_1");
enlace = document.getElementById("enlace_1");
contenido = document.getElementById("contenidos_2");
enlace = document.getElementById("enlace_2");
contenido = document.getElementById("contenidos_3");
enlace = document.getElementById("enlace_3");
enlace.addEventListener("click", muestraOculta)

function muestraOculta() {
    if (contenido.style.display === "none")
    {
        contenido.style.display = "block";
        enlace.innerHTML = "Ocultar contenidos";
    }
    else
    {
        contenido.style.display = "none";
        enlace.innerHTML = "Mostrar contenidos";
    }
}