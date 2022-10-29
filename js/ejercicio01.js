let divNum = document.getElementById("numero");
let body = document.getElementById("cuerpo");
divNum.addEventListener("dblclick", calcularTriple);
divNum.addEventListener("mouseover", cambiarColor);
divNum.addEventListener("mouseout", volverAlColor);

function calcularTriple(num)
{
    num = divNum.value;
    console.log(num);
    num = num * 3;
    divNum.innerHTML = num;
}

function cambiarColor()
{
    body.style.backgroundColor = "#9445f6";
    divNum.style.color = "white";
}

function volverAlColor()
{
    body.style.backgroundColor = "white";
    divNum.style.color = "black";
}