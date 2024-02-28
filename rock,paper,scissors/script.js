let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);

    return options[randIdx];
}

const draw = () => {
    console.log("draw!");
    msg.innerText = "A Draw! Play Again."
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win!"
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose"
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);

    let compChoice = genCompChoice();
    console.log("computer choice =", compChoice);

    if(userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});