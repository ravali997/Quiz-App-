var canvas;

var gameState = 0;
var contestantname= null;

var question,quesNumber=0;
var QA=0;// qestions answered
var options = []; //stoes options entered ny player
var quiz;

var crtAns = []; // stores correct answers 

var arr ;
var i;

function setup(){
  canvas = createCanvas(850,800);
 question = new Question();
 question.start()
 quiz = new Quiz();
 
 
arr = [1, 2, 3,4,5,6,7,8,9,10];
shuffleArray(arr);
}


// for randomizing the quesions
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
console.log(arr);
}


function draw(){
  background("pink");

// for displaying the result 
  if(gameState === 1){
    quiz.result()
  }

  
}
