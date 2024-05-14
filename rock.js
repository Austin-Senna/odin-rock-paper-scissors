let humanScore = 0
let computerScore = 0

function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min + 1)) + min
}

function getComputerChoice() {
    let x = randomInt(1,3)
    if (x==1) {
        return "rock"
    }
    if (x==2) {
        return "paper"
    }
    if (x==3) {
        return "scissors"
    }
}

function getHumanChoice() {
    let x; 
    while (x != "rock" && x != "paper" &&  x!= "scissors"){
        x = prompt("Your choice (rock/paper/scissors): ").toLowerCase()
    }
    return x
}

function playRound(n) {
    let human = getHumanChoice()
    let computer = getComputerChoice()
    let win;
    
    if (human == computer) {
        alert(`Tie!`)
    }
    else if (human == "rock") {
        computer == "paper" ? win ="c": win = "h" 
    }
    else if (human == "paper") {
        computer == "scissors"? win = "c" : win = "h"
    }
    else {
        computer =="rock" ? win = "c" : win = "h"
    }
    
    if (win =="c") {
        alert(`Computer won with ${computer}!`)
        computerScore ++
    }
    else if (win == "h") {
        alert(`You won against computer's ${computer}!`)
        humanScore ++
    } 

    alert(`Round ${n}: 
    H : ${humanScore} --- C: ${computerScore}`)
}

function playGame(){
    for (var i = 1; i<=5; i ++) {
        playRound(i)
    }
    if (humanScore > computerScore) {
        alert("You won against computer!")
    }
    else if (humanScore< computerScore) {
        alert("You lost against computer!")
    }
    else {
        alert("You tied with computer!")
    }
}

playGame()