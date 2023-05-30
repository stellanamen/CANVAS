canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var lastPositionX, lastPositionY;


color = "black";
widthLine = 1;

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
    //Addictonal Activity start
    color = document.getElementById("color").value;
    widthLine = document.getElementById("widthLine").value;
    //Addictonal Activity ends

    mouseEvent = "mouseDown";
}


canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "mouseleave";
}

//as variáveis do slide estão escritas diferentes
canvas.addEventListener("mousemove", myMouseMove);

//Este é o evento principal onde será realizado o desenho.
function myMouseMove(e) {
    PositionMouseX = e.clientX - canvas.offsetLeft;  // para obter a coordenada "x" real no Canvas em relação à tela quando clicada, fazemos e.clientX-canvas.offsetLeft; e o mesmo deve ser feito pra o eixo Y    
    PositionMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();                //ele pede para o canva iniciar o desenho do objeto/forma
        ctx.strokeStyle = color;        //ajusta a cor do objeto
        ctx.lineWidth = widthLine;      //ajusta a expessura

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastPositionX + "y = " + lastPositionY);
        ctx.moveTo(lastPositionX, lastPositionY); //move o ponto para um ponto especificado no Canvas, sem criar uma linha

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + PositionMouseX + "y = " + PositionMouseY);
        ctx.lineTo(PositionMouseX, PositionMouseY); //acrescenta um novo ponto e cria uma linha para esse ponto a partir do último ponto especificado
        ctx.stroke();                   //desenha o caminho definido acima
    }

    lastPositionX = PositionMouseX;
    lastPositionY = PositionMouseY;
}

//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}