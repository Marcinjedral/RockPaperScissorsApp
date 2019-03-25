const hands = [...document.querySelectorAll('img')];
const span = [...document.querySelectorAll('span')];
const playButton = document.querySelector('button');

let wins = 0;
let draws = 0;
let losses = 0;

let playerHand = "";
let aiHand = "";
let gResult = "";
let gPublish = "";

const choosenHand = (e) => {
    playerHand = (e.currentTarget).className;
}
const aiDraws = function () {
    return hands[Math.floor(Math.random() * 3)].className;
}
const result = function (choosenHand, aiDraws) {
    if (choosenHand === aiDraws) {
        return "draw";
    } else if ((choosenHand === "paper" && aiDraws === "rock") || (choosenHand === "rock" && aiDraws === "scissors") || (choosenHand === "scissors" && aiDraws === "paper")) {
        return "win";
    } else {
        return "loss";
    }
}

const publish = () => {
    document.querySelector('.pch').textContent = "Your choice:" + " " + playerHand;
    document.querySelector('.ach').textContent = "AI choice:" + " " + aiHand;

    if (gResult === "win") {
        document.querySelector('.wiw').textContent = "The result is: player won!"; 
        wins++;       
        document.querySelector('.w').textContent = "Wins: " + wins;        
    } else if (gResult === "loss") {
        document.querySelector('.wiw').textContent = "The result is: computer won!";
        losses++;       
        document.querySelector('.l').textContent = "Losses: " + losses;      
    } else {
        document.querySelector('.wiw').textContent = "The result is: draw!";
        draws++;       
        document.querySelector('.d').textContent = "Draws: " + draws;      
    }
}

const start = () => {
    if (playerHand === "") {
        alert("First, choose a hand!");
    }
    aiHand = aiDraws();
    gResult = result(playerHand, aiHand);
    gPublish = publish();
}

hands.forEach(hand => hand.addEventListener('click', choosenHand));
playButton.addEventListener('click', start);