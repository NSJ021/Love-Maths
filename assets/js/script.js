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
                alert(`You Clicked ${gameType}`);
            }
        })
    }

})

/**
 * Main Game Loop, called when initially loaded
 * and after an answer is processed
 */
function runGame() {
    // Random numbers used to create questions
    let num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;
}

function checkAnswer() {
    
}

function calculateCorrectAnswer() {
    
}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAddition() {
    
}

function displaySubtract() {
    
}

function displayMultiply() {
    
}

function displayDivide() {
    
}