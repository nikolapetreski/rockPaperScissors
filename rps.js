let playerSelection
let round = 0
let computerScore = 0
let playerScore = 0
let outcome = ""
let reset = document.querySelector(".resetButton")

console.log(computerScore)
reset.addEventListener("click", function () {
  computerScore = 0
  playerScore = 0
  playerScoreDiv.innerHTML = playerScore
  computerScoreDiv.innerHTML = computerScore
  resultDiv.innerHTML = ""
  roundFive.innerHTML = ""
  round = 0
})

gameState = () => {
  computerSide.innerHTML = computerPlay()
  console.log(computerPlay())
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    const outcome = `It's a tie D:`
    return outcome
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    const outcome = "Sorry but you lost D:"
    computerScoreDiv.innerHTML = computerScore++
    return outcome
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    const outcome = "Congrats you won!"
    playerScoreDiv.innerHTML = playerScore++
    return outcome
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    const outcome = `Dang you lost D:`
    computerScoreDiv.innerHTML = computerScore++
    return outcome
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    const outcome = `Congrats You Win!`
    playerScoreDiv.innerHTML = playerScore++
    return outcome
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    const outcome = `it's a tie D:`
    return outcome
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    const outcome = `Dang you lost  D:`
    computerScoreDiv.innerHTML = computerScore++
    return outcome
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    const outcome = `Congrats you won!`
    playerScoreDiv.innerHTML = playerScore++
    return outcome
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    const outcome = `it's a tie  D:`
    return outcome
  }
}
const compArray = ["rock", "paper", "scissors"]

function computerPlay() {
  return `${compArray[Math.floor(Math.random() * compArray.length)]}`
}
//remember to readd commputerPlay
const computerSelection = computerPlay()
const gameRound = playRound(playerSelection, computerSelection)

let playerSide = document.querySelector(".playerSide")

let computerSide = document.querySelector(".computerSide")
let resultScreen = document.querySelector(".resultScreen")

let rockSelection = document.querySelector(".rockbutton")

let paperSelection = document.querySelector(".paperbutton")

let scissorsSelection = document.querySelector(".scissorsbutton")
rockSelection.addEventListener("click", function () {
  playerSide.innerHTML = "rock"
  gameState()
  computerPlay()
  resultDiv.innerHTML = playRound(computerPlay(), playerSide.innerHTML)
  round++
  if (playerScore > computerScore && round == 5) {
    roundFive.innerHTML = "You won the game! Continue playing or reset."
  } else if (playerScore < computerScore && round == 5) {
    roundFive.innerHTML =
      "The Computer won the game! Continue playing or reset."
  }
})
paperSelection.addEventListener("click", function () {
  playerSide.innerHTML = "paper"
  gameState()
  computerPlay()
  resultDiv.innerHTML = playRound(computerPlay(), playerSide.innerHTML)
  round++
  if (playerScore > computerScore && round == 5) {
    roundFive.innerHTML = "You won the game! Continue playing or reset."
  } else if (playerScore < computerScore && round == 5) {
    roundFive.innerHTML =
      "The Computer won the game! Continue playing or reset."
  }
})

scissorsSelection.addEventListener("click", function () {
  playerSide.innerHTML = "scissors"
  gameState()
  computerPlay()
  resultDiv.innerHTML = playRound(computerPlay(), playerSide.innerHTML)
  console.log(round)
  round++
  if (playerScore > computerScore && round == 5) {
    roundFive.innerHTML = "You won the game! Continue playing or reset."
  } else if (playerScore < computerScore && round == 5) {
    roundFive.innerHTML =
      "The Computer won the game! Continue playing or reset."
  }
})

let playerScoreDiv = document.querySelector(".playerScore")
playerScoreDiv.innerHTML = playerScore
let computerScoreDiv = document.querySelector(".computerScore")
computerScoreDiv.innerHTML = computerScore
let resultDiv = document.querySelector(".resultsNormal")
resultDiv.innerHTML = outcome

let roundFive = document.querySelector(".resultsFive")
