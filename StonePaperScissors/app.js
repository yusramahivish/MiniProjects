let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreText = document.querySelector("#user-score")
const compScoreText = document.querySelector("#comp-score")

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    })
 })

const genComputerChoice = ()=>{
   const options=["rock","paper","scissors"];
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];
}

const drawGame = ()=>{
    msg.innerText = "Game Was Draw, Play Again"
    msg.style.backgroundColor = '#081b31';
}

const showWinner = (userWin, userChoice, compChoice)=>{
  if(userWin){
    userScore++;
    userScoreText.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = 'green';
  }
  else{
       compScore++;
       compScoreText.innerText = compScore;
       msg.innerText = `You Lose ${compChoice} beats your ${userChoice}`
       msg.style.backgroundColor = 'red';    
  }
}

const playGame = (userChoice)=>{
   const compChoice = genComputerChoice();
   if(userChoice === compChoice){
    drawGame();
   } else {
      let userWin = true;
      if(userChoice === 'rock'){
         //computer choice may be sciccors or paper
         userWin = compChoice === "paper" ? false : true
      } else if(userChoice === 'paper'){
        //rock scissors
        userWin = compChoice === "scissors" ? false : true
      } else {
        //user scissor
        //computer rock paper
        userWin = compChoice === "rock" ? false : true
      }
      showWinner(userWin, userChoice, compChoice);
   }
}

