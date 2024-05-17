let humanScore = 0
let computerScore = 0
let roundCount = 1

const container = document.querySelector(".container")
const ulList = document.querySelector("ul")
const title = document.querySelector("h1")
const body = document.querySelector("body")

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

const choiceList = document.querySelector(".choice")
choiceList.addEventListener("click", (event) => (humanScore <5 && computerScore<5) ? playRound(event.target.id) : printWinner())

function playRound(humanChoice) {
    let human = humanChoice
    let computer = getComputerChoice()
    let win;
    

    if (human == computer) {

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
        computerScore ++
    }
    else if (win == "h") {
        humanScore ++
    } 
    
    const newRoundList = document.createElement("li")
    newRoundList.innerHTML = `Round ${roundCount}: `
    newRoundList.innerHTML += `You picked ${human}!
    Computer picked ${computer}!`
    newRoundList.innerHTML += `<br> <br>Computer : ${computerScore} || Human : ${humanScore} `
    ulList.appendChild(newRoundList)
    roundCount ++
}

function printWinner() {
    if (humanScore > computerScore) {
        title.textContent = "You won against computer :)"
        body.classList.toggle('win')
   }
   else if (humanScore< computerScore) {
        title.textContent = "You lost against computer !"
        body.classList.toggle('lose')
   }
}

