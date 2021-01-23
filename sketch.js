var Bground, Bground_image;
var cat, cat_image ,cat_running;
var mouse, mouse_image ,mouse_Img;

function preload() {
    //load the images here
    Bground_image.loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    Bground = createSprite(500,400,1000,800);
    Bground.shapeColor = "lightblue";


    cat = createSprite(800,600,50,100);
    mouse = createSprite(200,600,50,100);


}

function draw() {

    background(220);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
  }
}
