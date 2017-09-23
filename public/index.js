var socket;


function setup() {
  createCanvas(800,600);
  background(51);

  socket = io.connect('http://localhost:3000')
  socket.on('mouse', drawnew);
}



function drawnew(data) {
  noStroke();
  fill(255, 0, 100);
  ellipse(data.x, data.y,60,60);
}






function mouseDragged() {


  var data = {
    x: mouseX,
    y: mouseY
  };

  socket.emit('mouse', data);


    noStroke();
    fill(255);
    ellipse(mouseX, mouseY,60,60);
}

function draw() {

}
