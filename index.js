var readLineSync = require("readline-sync");

var score = 0;
var userName;

  var userName = readLineSync.question("Enter your name: ");
console.log("Hello " + userName + ", this is a quiz on anime.");
console.log("Rules: You score a point for a correct answer.\n       You lose a point for an incorrect answer.")

function play(question, answer) {
  var userAnswer = readLineSync.question(question);
  
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log("Well done " + userName + ". You scored a point for that.");
  } else {
    score--;
    console.log("I'm afraid that's incorrect " + userName + " :(.\nThe correct answer is " + answer);
  }
  console.log("Your current score is " + score);
  console.log("-------------------")
}
var questions = [{
  question: "Q. What anime features Goku as the main character? ",
  answer: "Dragon Ball"
}, {
  question:"Q. What is Ryuk's favourite fruit? ",
  answer: "Apple"
}, {
  question:"Q. What is the name of the main character in One Piece? ",
  answer:"Monkey D Luffy"
}, {
  question: "Q. Who is the commander of Survey Corps in Attack on Titan? ",
  answer:"Erwin Smith"
}, {
  question: "Q. Who is the character that can use both ice and fire in My Hero Academia? ",
  answer: "Todoroki Shoto"
}]
for (let i = 0; i < questions.length; i++) {
  var current = questions[i];
  play(current.question, current.answer);
}
console.log("Your final score is " + score);

var highscores = [
  {
    name: "Pushkraj",
    score: 5
  },
  {                
    name: "Shobhna",
    score: 4
  }
]
for(let i = 0; i < highscores.length; i++) {
    var out = highscores[i]
  console.log("Highscores are", out);
};