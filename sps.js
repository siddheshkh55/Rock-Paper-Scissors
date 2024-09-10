let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgTxt = document.querySelector("#msg-box");
const usersc = document.querySelector("#user-score");
const compsc = document.querySelector("#comp-score");


const genChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const draw = () => {
  console.log("its a draw");
  msgTxt.style.backgroundColor = "#144270";
};

const winner = (userWin) => {
  if (userWin == true) {
    console.log("you win ");
    msgTxt.innerText = "You win";
    msgTxt.style.backgroundColor = "green";
    userScore++;
    usersc.innerText = userScore;
  } else {
    console.log("Computer wins");
    msgTxt.innerText = "Computer win";
    msgTxt.style.backgroundColor = "red"
    compScore++;
   compsc.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  const compChoice = genChoice();
  console.log("your choice", userChoice);
  console.log(compChoice);

  if (userChoice === compChoice) {
    draw();
    msgTxt.innerText = "Its a Draw";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    winner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
