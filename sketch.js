//Create variables here
var dog, happyDog, database, foodS, foodStock,dogSprite;

function preload()
{
  //load images here
  dogSprite=loadImage("pic2/Dog.png");
  happyDog=loadImage("pic2/happydog.png"); 
}

function setup() {
  createCanvas(500, 500);
  
  dog=createSprite(250,250,20,10);
  dog.addImage("dog",dogSprite);

  foodStock=database.ref("food");
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("happy dog",happyDog);
  }

  drawSprites();
  //add styles here
  textSize(20);
  fill("white");
  stroke("green");
  text("Note:Press UP_ARROW Key to feed dog",250,200);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if (x<=0){
    x=0;
  }
  else{
    x=x+1;
  }
  database.ref('/').update({
    FoodS.x;
  })
}


