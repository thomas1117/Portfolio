var canvas;
var canvasContent;
var ballX = 20;
var ballY = 10;
var ballSpeedX = 5;
var ballSpeedY = 4;


var paddle1Y = 250;
var paddle2Y = 250;


const PADDLE_HEIGHT = 40;
const PADDLE_WIDTH = 5;

function calculateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	var mouseX = evt.clientX - rect.left - root.scrollLeft;
	var mouseY = evt.clientY - rect.top - root.scrollTop;

	return {
		x:mouseX,
		y:mouseY
	};
}

window.onload = function() {
	
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	var framesPersecond = 30;
	setInterval(function(){
		moveEverything();
		drawEverything();
	},2000/framesPersecond);

	canvas.addEventListener('mousemove',
		function(event){
			var mousePos = calculateMousePos(event);
			paddle1Y = mousePos.y - (PADDLE_HEIGHT/2);
			
	})
	
}

function ballReset() {
	ballSpeedX = -ballSpeedX;
	ballX = canvas.width/2;
	ballY = canvas.height/2;
}

function computerMovement() {
	var paddle2Center = paddle2Y + (PADDLE_HEIGHT/2)
	if(paddle2Center < ballY+15) {
		paddle2Y += 3;
	}
	else if(paddle2Center > ballY-15){
		paddle2Y -= 3;
	}
}
function moveEverything() {
	ballX += ballSpeedX;
	ballY += ballSpeedY;

	if(ballX < 0) {

		if(ballY > paddle1Y && ballY < paddle1Y+PADDLE_HEIGHT){

			ballSpeedX = -ballSpeedX;

			var deltaY = ballY - (paddle1Y+PADDLE_HEIGHT/2);

			ballSpeedY = deltaY * .15;

		} else {
			
			ballReset();
			ballSpeedY = 4;
			
		}
		
		
	}

	if(ballX > canvas.width) {

		if(ballY > paddle2Y && ballY < paddle2Y+PADDLE_HEIGHT){

			ballSpeedX = -ballSpeedX;

			var deltaY = ballY - (paddle2Y+PADDLE_HEIGHT/2);

			ballSpeedY = deltaY * .35;

		} else {
			
			ballReset();
			ballSpeedY = 4;
			
		}
		
		
	}

	computerMovement()


	if(ballY > canvas.height) {
		ballSpeedY = -ballSpeedY;
	}
	if(ballY < 0) {
		ballSpeedY = -ballSpeedY;
	}
}
function drawEverything() {
	moveEverything();
	colorRect(0,0,canvas.width,canvas.height,'black');

	//left paddle

	colorRect(0,paddle1Y,PADDLE_WIDTH,PADDLE_HEIGHT,'green');

	//right paddle

	colorRect(canvas.width-PADDLE_WIDTH,paddle2Y,PADDLE_WIDTH,PADDLE_HEIGHT,'green');

	colorCircle(ballX,ballY,5,'green');
	
}

function colorCircle(centerX,centerY,radius,color) {
	canvasContext.fillStyle = color;
	canvasContext.beginPath();
	canvasContext.arc(centerX,centerY,radius,0,Math.PI*2,true);
	canvasContext.fill();
}

function colorRect(leftX,topY,width,height,drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX,topY,width,height);
}