// 15-104
// SEAN CHEN

var img;

function preload() {
    // rotate(radians(180));
    img = loadImage('https://i.imgur.com/HNOE05S.png?1')
}

function setup() {
    createCanvas(200, 200, WEBGL);   
    createCanvas(200, 200);
    ortho(-width/2,width/2,height/2,-height/2,0,500); 
}

function draw() {
    background(255, 0.0);
    circle(0, 0, 100);
    rotateY(frameCount * 0.01);
    rotateX(frameCount * -0.01);
    rotateZ(frameCount * 0.01);
    rotateZ(0.01);
    texture(img);
    orbitControl();
    box(100);
}
