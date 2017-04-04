var allMyBubbles = [];
var numofBudis = 100;
var sizeOfBudi = 50;

var promp = prompt("What do you want more, Butty, Money, or Fame?");
var lower = promp.toLowerCase();

var budi;
var money;
var fame;

var img;

function preload(){
    budi = loadImage("budi.png");
    money = loadImage("money3.jpg");
    fame = loadImage("kardash.jpg");
}

function setup(){
    createCanvas(600, 400);
    
    for(var i = 0; i < numofBudis; i++){
        allMyBubbles[i] = new Bubble(random(0,600), random(0, 400));
    }
    
}

function draw(){
    background(0);
    
    for(var i = 0; i <  allMyBubbles.length; i++){
        allMyBubbles[i].display();
        allMyBubbles[i].move();
    }
}

function Bubble(x,y){
    this.x = x;
    this.y = y;
    
    
    if(lower == "butty"){
        img = budi;
    }
    if(lower == "money"){
      img = money;
    }
    if(lower == "fame"){
        img = fame;
    }
    
    this.display = function(){
        image(img, this.x, this.y, sizeOfBudi, sizeOfBudi);
    }
    this.move = function(){
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
}
