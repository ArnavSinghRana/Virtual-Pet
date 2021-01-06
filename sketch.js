//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock
var dogImage
var dogHappyImage
function preload(){
 dogImage=loadImage("images/dogImg.png")
 dogHappyImage=loadImage("images/dogImg1.png")

}


	//load images here


function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog=createSprite(200,300,10,10);
  dog.addImage(dogImage);
  dog.scale=0.1;
  foodStock=database.ref('Food')
   foodStock.on("value",readstock);

}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappyImage);
}
  drawSprites();
  //add styles here

}
//Function to write vlues in DB
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}
//Function to write values in DB
function readstock (data){
  foodS=data.val();
}





