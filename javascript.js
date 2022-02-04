const para = document.createElement('p');
const results = document.querySelector('#results');
const compScore = document.querySelector('#computerScore');
const playerScore = document.querySelector('#playerScore');
const finalResult = document.querySelector('#finalResult');

// Player input
const buttons = document.querySelectorAll('input');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    });
});

// Computer selection
function computerPlay() {
    const selectionArray = ['rock', 'paper', 'scissors'];
    const selection = selectionArray[Math.floor(Math.random() * selectionArray.length)];
    return selection;
}

// Robotisms
function robotWins() {
    const winism = ['Pathetic. ', 'Silly Human. ', 'Inferior. ', 'Is that the best you got? ', 
        'Your Choice was suboptimal. ', 'Haha loser. ', 'You lose, meat sack. '];
    const robotSays = winism[Math.floor(Math.random() * winism.length)];
    return robotSays;
}

function robotLose() {
    const losism = ['How can this be? ', 'Are you cheating? ', `I'll get you next time. `,
        'I let you win this round. ', 'Hmm it seems you won. ', 'Aaargh. ', 'This was only a temporary win. '];
    const robotSays = losism[Math.floor(Math.random() * losism.length)];
    return robotSays;
}

// Game logic
let userScore = 0;
let computerScore = 0;
playerScore.textContent = userScore;
compScore.textContent = computerScore;

function playRound(playerSelection, computerSelection) {
    
     if ((playerSelection == "rock") && (computerSelection == "paper")) {
        para.textContent = robotWins() + "Paper beats rock.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        compScore.textContent = ++computerScore;
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        para.textContent = robotLose() + "Rock beats scissors.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        playerScore.textContent = ++userScore;
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        para.textContent = robotWins() + "Scissors beats paper.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        compScore.textContent = ++computerScore;
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        para.textContent = robotLose() + "Paper beats rock.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        playerScore.textContent = ++userScore;
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        para.textContent = robotLose() + "Scissors beats paper.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        playerScore.textContent = ++userScore;
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        para.textContent = robotWins() + "Rock beats scissors.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        compScore.textContent = ++computerScore;
    } else if (playerSelection === computerSelection) {
        para.textContent = "It's a Tie!";
        para.setAttribute('id', 'roundResult');
        results.append(para);
    }
    
    if (userScore === 5) {
        para.textContent = `You Win the game ${userScore} to ${computerScore}. Refresh to play again.`;
        finalResult.append(para);
        buttons.forEach((button) => {
            button.disabled = true;
        });
    } else if (computerScore === 5) {
        para.textContent = `You Lose the game ${userScore} to ${computerScore}. Refresh to play again.`;
        finalResult.append(para);
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }  
}
