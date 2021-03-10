var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(100, 590, 180, 20);
    surface1.shapeColor = "red";
    surface2 = createSprite(300, 590, 180, 20);
    surface2.shapeColor = "blue";
    surface3 = createSprite(500, 590, 180, 20);
    surface3.shapeColor = "yellow";
    surface4 = createSprite(700, 590, 180, 20);
    surface4.shapeColor = "green";
    box = createSprite(random(20,750));
    box.scale = 0.35;
    box.shapeColor = "white";
    box.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    if (box.isTouching(surface1)) {
        box.shapeColor = "red"
        box.velocityY = 0;
    }

    if (box.isTouching(surface2)) {
        box.shapeColor = "blue"
        box.velocityY = 0;
    }
    
    if (box.isTouching(surface3)) {
        box.shapeColor = "yellow"
        box.velocityY = 0;
    }

    if (box.isTouching(surface4)) {
        box.shapeColor = "green"
        box.velocityY = 0;
    }


    drawSprites();
}
