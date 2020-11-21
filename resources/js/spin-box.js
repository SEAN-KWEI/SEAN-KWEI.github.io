// 15-104
// SEAN CHEN

var img;
var fc = 0;

function preload() {
    // rotate(radians(180));
    img = loadImage('https://i.imgur.com/HNOE05S.png?1')
}

function setup() {
    createCanvas(200, 200, WEBGL);   
    createCanvas(200, 200);
    textSize(width / 3);
    textAlign(CENTER, CENTER);
    ortho(-width/2,width/2,height/2,-height/2,0,500); 
}

function draw() {
    background(255, 0.0);
    circle(0, 0, 100);
    if (width/2 < mouseX && mouseX < width/2+150 && 
        height/2 < mouseY && mouseY < height/2+150) {
        fc ++;
        rotateY(fc * 0.01);
        rotateX(fc * -0.01);
        rotateZ(fc * 0.01);
    } else {
        fc += 2.5;
        rotateY(fc * 0.01);
        rotateX(fc * -0.01);
        rotateZ(fc * 0.01);
    }
    texture(img);
    box(100);
    text('hello', 0, 50);
}