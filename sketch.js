var bkImg;
var database;
var game;
var form;
var player;
var playerCount = 0;
var gameState;
var car1_img,car2_img,track_img
var car1, car2;
var cars = []
var allPayers;
var fuel_img,goldCoin_img,life_img,obstacle1_img,obstacle2_img,reset_img;
var fuels,coins,obstacless1,obstacless2;


function preload(){
    bkImg = loadImage("assets/background.png");
    car1_img = loadImage("assets/car1.png");
    car2_img = loadImage("assets/car2.png");
    track_img = loadImage("assets/track.jpg");
    fuel_img = loadImage("assets/fuel.png");
    goldCoin_img = loadImage("assets/goldCoin.png");
    life_img = loadImage("assets/life.png");
    fuel_img = loadImage("assets/fuel.png");
    obstacle1_img = loadImage("assets/obstacle1.png");
    obstacle2_img = loadImage("assets/obstacle2.png");
    reset_img = loadImage("assets/reset.png");
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}
function draw(){
    background(bkImg);
    if(playerCount === 2){
        game.update(1);
    }
    if(gameState === 1){
        game.play();
    }
}

function windowRezised(){
    reziseCanvas(windowWidth,windowHeight);
}
