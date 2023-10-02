// Dice Number generator function 

function randomNumber (min, max) {
    min = Math.ceil (min);
    
    max = Math.floor (max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}

// Dice image 
const diceImage = document.querySelectorAll(".container div.dice img");
// Getting paragraph content 
const declareHeading = document.querySelector(".container h1");
// Getting Sound content 
const sound =  document.getElementById('sound');
// Getting paragraph content 
const playerName = document.querySelectorAll(".container div.dice p");
// Creating Dice roll
const diceRollFirst = randomNumber(1,6);
const diceRollSecond = randomNumber(1,6);


//Assigning dice image function
const diceImageAssign = (changeVal, diceStage) => {
     for (let i = 0; i < 7; i++) {
          switch(changeVal){
               case i:
               diceStage.src = `./images/dice${changeVal}.png`;
               break;
          }
     }
}

diceImageAssign(diceRollFirst, diceImage[0]);
diceImageAssign(diceRollSecond, diceImage[1]);


// Declaring winner 

if(diceRollFirst > diceRollSecond){
     declareHeading.textContent = `🏆 ${playerName[0].textContent} wins!`;
}else if(diceRollFirst < diceRollSecond){
     declareHeading.textContent = `🏆 ${playerName[1].textContent} wins!`;
}else if (diceRollFirst === diceRollSecond) {
     declareHeading.textContent = "🙌 It's a tie!";
}else {
     declareHeading.textContent = "🙀 Please Retry!";

}


// Sound effects 

let soundApply = sound.src = "./sound/dice-142528.mp3";
// document.body.onload(soundApply);

function refresh() {
     window.location = window.location;
     // setTimeout(() => {sound.play()}, 4000)
     
}

document.addEventListener("DOMContentLoaded", function () {
     const audio = document.getElementById("sound");
   
     // Function to play the audio
     function playAudio() {
       if (audio.paused) {
         audio.play();
       } else {
         audio.currentTime = 0; // Reset the audio to the beginning and play again
       }
     }
   
     // Play the audio when the page is fully loaded
     playAudio();
   });



console.log(`1st dice is: ${diceRollFirst} and 2nd dice is ${diceRollSecond}`);