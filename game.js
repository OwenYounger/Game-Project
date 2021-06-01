window.addEventListener('load',








  function() {
    var gameTitle = document.getElementById("Title");
gameTitle.innerHTML = "Owen's Game";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawRectangle() {
	ctx.beginPath();
	ctx.rect(x, 180, 100, 30);
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
}
if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
}
    x += dx;
    y += dy;
}
setInterval(draw, 10);
setInterval(drawRectangle, 10);

























  }, false);


