let AImove = 0;
let playerMove = 0;
let losses = 0;
let wins = 0;
let Ties = 0;
let allScore = `Ties:${Ties} wins:${wins} losses:${losses}`;
let allMove = "";
let name;
let WinningSound = new Audio("WinningSound.mp3")
let LossingSound = new Audio("LossingSound.mp3")

name = window.prompt("what is your name?")
      
alert("Good luck " + name + "!")

var paragraph1 = document.getElementById("ScoreTxt");
var paragraph2 = document.getElementById("movesTxt");

paragraph1.textContent = allScore;
paragraph2.textContent = allMove;

     