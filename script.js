const options = {
    "rock": "paper",
    "paper": "scissors",
    "scissors": "rock"
}

function playRound(selection) {
    let results = computeRound(selection.toLowerCase())
    console.log(`You played ${results[0]} while the opponent played ${results[1]}, you ${results[2] && "won!" || "lost."}`)
}

function computeRound(selection) {
    let counter = options[selection]
    let computerSelection = computerPlay()
    let result = computerSelection != counter && computerSelection != selection

    return [selection, computerSelection, result]
}

function computerPlay() {
    return Object.keys(options)[Math.floor(Math.random() * Object.keys(options).length)]
}