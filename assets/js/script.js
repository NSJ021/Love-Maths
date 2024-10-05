// Wait for DOM to load
//  Get button elements and add event listeners

document.addEventListener("DOMContentLoaded", function(){

    // returns an array of all elements matching the tag name, e.g all the buttons on the page
    let buttons = document.getElementsByTagName("button");


    // For loop that loops through array of buttons, then checks what button was pressed with getAttribute("data-type")
    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("You Clicked Submit");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})

/**
 * Main Game Loop, called when initially loaded
 * and after an answer is processed
 */
function runGame(gameType) {
    // Random numbers used to create questions
    let num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;

    if (gameType === "addition"){
        displayAddition(num1, num2);
    } else if (gameType === "subtract"){
        displayAddition(num1, num2);
    } else if (gameType === "multiply"){
        displayAddition(num1, num2);
    } else if (gameType === "division"){
        displayAddition(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {
    
}

function calculateCorrectAnswer() {
    
}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAddition(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtract(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "-";
}

function displayMultiply(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "X";
}

function displayDivide(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
}