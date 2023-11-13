function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    fill("green");
    stroke("black");
    rect(35,50,30,380);
    fill("red");
    stroke("black");
    circle(50,50,50);
    fill("red");
    stroke("black");
    circle(50,410,50);
    fill("green");
    stroke("black");
    rect(70,30,410,30);
    fill("red");
    stroke("black");
    circle(460,50,50);
    fill("green");
    stroke("black");
    rect(450,50,30,380);
    fill("red");
    stroke("black");
    circle(460,410,50);
    fill("green");
    stroke("black");
    rect(50,400,410,30);
    image(video, 150, 125, 210, 210);
}

function take_snapshot() {
    save("mypic.png");
    
}