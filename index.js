const readlineSync=require('readline-sync');
const chalk = require('chalk');

console.log("Hey there! What is your name?\n");
var name;
var userName=readlineSync.question(name);
console.log(chalk.white.bgBlack.dim.bold("Hi "+userName+", welcome to this Brooklyn 99 quiz. So you will be given a total of 7 questions with options. You will have to enter the alphabet which corresponds to the option you think is the answer in lowercase."));
console.log(chalk.greenBright.bgBlue.bold("NOW WITHOUT FURTHER WAITING, YOU CAN START YOUR QUIZ :P"));

var score=0;
function play(question,answer){
  var  userAnswer= readlineSync.question(question);
  if(userAnswer==answer)
  {
    console.log(chalk.gray.bgCyanBright.bold("You were right, WOOHOO!"));
    score=score+1;

  }
  else
    console.log(chalk.black.bgGreen.bold("You are wrong :("));
  console.log(chalk.black.bgRed.bold("YOUR SCORE IS : "+score));
}
play(chalk.black.bgYellow.bold("1)Where did Terry once live when pursuing a college education? \na. Japan\nb. China\nc. Israel\nd. South Korea\n"),"a");

play(chalk.black.bgYellow.bold("2)Which member of the squad likes to stay in the office rather than in the line of fire?\na. Charles\nb. Terry\nc. Gina\nd. Amy\n"),"b");

play(chalk.black.bgYellow.bold("3)Where was Charles' adopted son from?\na. Holland\nb. Niger\nc. Latvia\nd. France\n"),"c");

play(chalk.black.bgYellow.bold("4)Which member of the squad was almost married in Season Two? \na. Amy\nb. Charles\nc. Gina\nd. Rosa\n"),"d");

play(chalk.black.bgYellow.bold("5)What was 'giggle pig'? \na. a drug\nb. a joke\nc. a secret mission name\nd. a song\n"),"a");

play(chalk.black.bgYellow.bold("6)Brooklyn 99 is filmed in?  \na. Brooklyn\nb. The Bronx\nc. LA\nd. Manhattan\n"),"c");

play(chalk.black.bgYellow.bold("7)What rank was Amy promoted to in Season Five?   \na. Sergeant\nb. Captain\nc. Lieutenant\nd. Inspector\n"),"a");

console.log(chalk.black.bgWhite.inverse.bold("YOUR TOTAL SCORE IS "+score));

var highScores=[
  {
    name: "Gowri",
    score: 7
  },
  {
    name: "Rahat",
    score:6
  },
  {
    name:"Koko",
    score:5
  }
]
console.log("Check out the high scores!!",highScores);