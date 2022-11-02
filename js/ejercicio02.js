contenido1 = document.getElementById("contenidos_1");
enlace1 = document.getElementById("enlace_1");
contenido2 = document.getElementById("contenidos_2");
enlace2 = document.getElementById("enlace_2");
contenido3 = document.getElementById("contenidos_3");
enlace3 = document.getElementById("enlace_3");
enlace1.addEventListener("click", muestraOculta);
enlace2.addEventListener("click", muestraOculta);
enlace3.addEventListener("click", muestraOculta);

function muestraOculta() {
    if (contenido1.style.display === "none")
    {
        contenido1.style.display = "block";
        enlace1.innerHTML = "Ocultar contenidos";
    }
    else
    {
        contenido1.style.display = "none";
        enlace1.innerHTML = "Mostrar contenidos";
    }
    if (contenido2.style.display === "none")
    {
        contenido2.style.display = "block";
        enlace2.innerHTML = "Ocultar contenidos";
    }
    else
    {
        contenido2.style.display = "none";
        enlace2.innerHTML = "Mostrar contenidos";
    }
    if (contenido3.style.display === "none")
    {
        contenido3.style.display = "block";
        enlace3.innerHTML = "Ocultar contenidos";
    }
    else
    {
        contenido3.style.display = "none";
        enlace3.innerHTML = "Mostrar contenidos";
    }
}