'use strict';

const optionsEl = document.getElementById('options');

const GameOverEl = document.getElementById('GameOver');

const resultContainerEl = document.getElementById('result-container');

const choices = ['rock', 'paper', 'scissor'];

let yourScore = 0;

let computerScore = 0;

// functions

function CompChoceFunction(){
    return choices[Math.floor(Math.random() * 3)];
}

function playGame(choice) {
    let userChoice = choice;
    let computerChoice = CompChoceFunction();

    console.log(userChoice)
    console.log(computerChoice)
    if (userChoice === computerChoice) {
        document.getElementById('result').textContent = 'No one getting point';
    } else if (userChoice === 'rock'){
        
        if (computerChoice === 'paper') {
            document.getElementById('result').textContent = 'computer get 1 point';
            computerScore++;
            document.getElementById('computerScore').textContent = computerScore;
        } else {
            document.getElementById('result').textContent = 'You get 1 point';
            yourScore++;
            document.getElementById('yourScore').textContent = yourScore;
        }

    } else if (userChoice === 'paper'){
        if (computerChoice === 'scissor') {
            document.getElementById('result').textContent = 'computer get 1 point';
            computerScore++;
            document.getElementById('computerScore').textContent = computerScore;
        } else {
            document.getElementById('result').textContent = 'You get 1 point';
            yourScore++;
            document.getElementById('yourScore').textContent = yourScore;
        }

    } else if (userChoice === 'scissor'){
        
        if (computerChoice === 'rock') {
            document.getElementById('result').textContent = 'computer get 1 point';
            computerScore++;
            document.getElementById('computerScore').textContent = computerScore;
            computerScore++;
        } else {
            document.getElementById('result').textContent = 'You get 1 point';
            yourScore++;
            document.getElementById('yourScore').textContent = yourScore;
        }

    }
    if (yourScore >= 10) {
        document.getElementById('FinalResult').textContent = "Won";
        optionsEl.classList.add('none');
        GameOverEl.classList.remove('hiding');
        resultContainerEl.classList.add('hiding');
    }
    if (computerScore >= 10) {
        document.getElementById('FinalResult').textContent = "Lost";
        optionsEl.classList.add('none');
        GameOverEl.classList.remove('hiding');
        resultContainerEl.classList.add('hiding');
    }
}