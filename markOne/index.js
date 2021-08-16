// markOne
var readLineSync = require("readline-sync");
var chalk = require('chalk');
var userName = readLineSync.question(chalk.keyword('orange')("What's your name?: "));
var score = 0;

console.log("Welcome, "+chalk.keyword('blue')(userName)+". Here's a quiz for you about Chaitanya. Choose the right option to score well.");

var questions = [
  {
    question: "Where's Chaitanya residing now? \n",
    answer: "Dosapadu"
  },
  {
    question: "What's Chaitanya's favorite outdoor sport? \n ",
    answer: "Cricket"
  },
  {
    question: "How young is Chaitanya (age in years)? \n",
    answer: 25
  },
  {
    question: "What's Chaitanya's favorite hobby? \n",
    answer: "Cooking"
  },
  {
    question: "Is Chaitanya a real person or a bot? (Human/Bot) \n",
    answer: "Human"
  },
];

var highscores = [
  {
    name: "Chaitanya",
    hscore: 5
  },
  {
    name: "Akash",
    hscore: 4
  },
  {
    name: "Adithya",
    hscore: 3
  }
];

var min_hs=5;
var max_hs=0;
for(var n=0;n<highscores.length;n++){
    min_hs=Math.min(min_hs,highscores[n].hscore);
    max_hs=Math.max(max_hs,highscores[n].hscore);
}

function qNa(ques_obj_param){
  var result = ques_obj_param.answer;
  return result;
}

for(var i=0;i<questions.length;i++){

  var userAnswer = readLineSync.question(chalk.keyword('yellow')(questions[i].question))
  if (userAnswer == qNa(questions[i])){
    score = score + 1;
    var ans = "Yes, "+userName+". You're right. So your current score is "+score;
  } else{
    // score = score - 1;
    var ans = "No, "+userName+". The answer is "+qNa(questions[i])+". So your current score is "+score;
  }
  
  console.log(chalk.keyword('grey')(ans));

}

if(score>max_hs){
  console.log(chalk.keyword('green')("Woah,"+userName+". You broke the record of all other highscores. Send us a screenshot after finishing the quiz so that we can update your data here."));

  var newhighscore = {
    name: userName,
    hscore: score
  }

  highscores.push(newhighscore);
} else if(score >= min_hs){
  console.log(chalk.keyword('green')("Wow, "+userName+". You could enter high score board now.  Send us a screenshot after finishing the quiz so that we can update your data here."));

  var newhighscore = {
    name: userName,
    hscore: score
  }

  highscores.push(newhighscore);
}

console.log(chalk.keyword('violet')("The current highscorers are: "));

for(var n=0;n<highscores.length;n++){
    console.log(highscores[n].name+": "+highscores[n].hscore);
}
