var BattleGround;
var cachorroImg;
var cachorro;
var fireballImg;
var fireball;
var gramballImg;
var gramball;
var heroImg;
var hero;
var soundtrack;

function preload(){
BattleGround = loadImage ("assets/Battleground.png")
cachorroImg = loadAnimation ("assets/cachorro-1.png.png","assets/cachorro-2.png.png",
"assets/cachorro-3.png.png","assets/cachorro-4.png.png","assets/cachorro-5.png.png")
fireballImg = loadImage ("assets/FyreBall.png")
gramballImg = loadImage ("assets/GramBall.png")
heroImg = loadImage ("assets/hero.png")
soundtrack = loadSound ("assets/soundtrack.mp3")
}

function setup(){
createCanvas (1920/1.3,1080/1.5)
cachorro = createSprite (100, 500)
cachorro.scale = 1.2
cachorro.addAnimation ("andando", cachorroImg)
fireball = createSprite (1300, 500)
fireball.addImage (fireballImg)
gramball = createSprite (1000, 500)
gramball.addImage (gramballImg)
gramball.scale = 0.8
hero = createSprite (300, 450)
hero.addImage (heroImg)
hero.scale = 0.5
soundtrack.play ()
soundtrack.setVolume (0.3)
}

function draw() {
background (BattleGround) 

 drawSprites()       
}
