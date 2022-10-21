window.onload = inicio;

function inicio()
{
    let divNum = document.getElementById("numero");
    divNum.addEventListener("dblclick", calcularTriple);
    divNum.addEventListener("mouseover", cambiarColor);
    divNum.addEventListener("mouseout", volverAlColor);

    function calcularTriple(num)
    {
        num = document.getElementById("texto").value;
        // text content (?)
        console.log(num);
        num = parseInt(num);
        num = num * 3;
        divNum.innerHTML = num;
    }

    function cambiarColor()
    {
        let body = document.getElementById("cuerpo");
        body.style.backgroundColor = "#9445f6";
        body.style.color = "white";
    }

    function volverAlColor()
    {
        let body = document.getElementById("cuerpo");
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}