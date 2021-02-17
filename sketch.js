//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png")
  happyDog = loadImage("dogImg1.png")
  
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog = createSprite(200,200,100,100)
  dog.addImage("dogImage",dogImg)
  //dog.addImage(happyDog);
  dog.scale = 0.2
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("dogImage", happyDog);
}
  drawSprites();
fill ("black")
stroke("black")
text("Food Remaining" + foodS, 170,100)
text("Press up arrow key to feed dog",200,50)
}
function readStock(data){
  foodS = data.val()
}
function writeStock(x){
if(x<=0){
  x = 0
}
else{ x = x-1}
database.ref('/').update({
  Food:x
})
}


