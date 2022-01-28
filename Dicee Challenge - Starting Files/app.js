



// My answer
// var randomNumber1 = [1,2,3,4,5,6];


// document.getElementsByClassName("img1").setAttribute('randomNumber1');
// document.getElementsByTagName('h1').innerHTML('Player1 WINS');
// document.getElementsByTagName('h1').innerHTML('Player2 WINS');


// Correct answer
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random generator

var randomDiceImage = "dice" + randomNumber1 + ".png"; //


var randomeImageSource = "images/" + randomDiceImage; //random images through dice 1 to 6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomeImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // random generator

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins 🚀";
}else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins 🚀";
}else{
  document.querySelector("h1").innerHTML = "Draw🤪";
}