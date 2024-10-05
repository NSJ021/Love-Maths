// Wait for DOM to load
//  Get button elements and add event listeners

document.addEventListener("DOMContentLoaded", function(){

    // returns an array of all elements matching the tag name, e.g all the buttons on the page
    let buttons = document.getElementsByTagName("button");


    // For loop that loops through array of buttons, then checks what button was pressed with getAttribute("data-type")
    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer();
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
 * @param {*} gameType 
 */
function runGame(gameType) {
    // Random numbers used to create questions
    let num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;

    if (gameType === "addition"){
        displayAddition(num1, num2);
    } else if (gameType === "subtract"){
        displaySubtract(num1, num2);
    } else if (gameType === "multiply"){
        displayMultiply(num1, num2);
    } else if (gameType === "division"){
        displayDivide(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks user answer compares it against first element 
 * of calculateCorrectAnswer array [0]
 */

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer()
    let isCorrectAnswer = userAnswer === calculatedAnswer[0];

    // if user answer matches correct answer, then display certain message
    if (isCorrectAnswer === true){
        alert("Correct, Well Done!!!")
        incrementScore();
    } else {
        alert(`Incorrect, you answered ${userAnswer}, The correct answer was ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}


/**
 * Gets operands and operator from DOM 
 * and returns the correct answer
 */
function calculateCorrectAnswer() {
    // parseInt used to ensure its a integer not string
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    // checks operator, if + then add numbers and return array
    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "X") {
        return [operand1 * operand2, "multiply"];
    }else if (operator === "/") {
        return [operand1 / operand2, "division"];
    }else {
        alert(`Unimplemented Operator ${operator}`);
        throw `Unimplemented Operator: ${operator}. Aborting!`;
    }
}

/**
 * Get current score and increments when user is correct
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;


}

/**
 * Get current  wrong answer score and increments when user is incorrect
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

/**
 * Display addition question, gets both operands and operator for + gameType
 * @param {*} operand1 
 * @param {*} operand2 
 */

function displayAddition(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

/**
 * Display subtract question, gets both operands and operator for - gameType
 * @param {*} operand1 
 * @param {*} operand2 
 */
function displaySubtract(operand1, operand2) {
    //  if op1 is bigger return that, if op2 is bigger return that, all to prevent a negative answer to subtraction questions
    // condition ? true : false
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1
    document.getElementById("operator").textContent = "-";
}

/**
 * Display multiply question, gets both operands and operator for * gameType
 * @param {*} operand1 
 * @param {*} operand2 
 */
function displayMultiply(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "X";
}

/**
 * Display division question, gets both operands and operator for / gameType
 * @param {*} operand1 
 * @param {*} operand2 
 */
function displayDivide(operand1, operand2) {
    //  if op1 is bigger return that, if op2 is bigger return that, all to prevent a negative answer to subtraction questions
    // condition ? true : false
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1
    document.getElementById("operator").textContent = "/";
}