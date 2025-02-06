document.addEventListener("DOMContentLoaded", () => {
    const inputScreen = document.querySelector(".input_screen"); // Correct selector
    const btns = document.getElementsByClassName("btns");
  
    let currentInput = ""; // Stores the current input value
    let firstOperand = null; // Stores the first operand
    let operator = null; // Stores the operator
  
    // Attach event listeners to each button
    for (let btn of btns) {
      btn.addEventListener("click", () => {
        const value = btn.textContent;
  
        if (!isNaN(value) || value === ".") {
          // If it's a number or a decimal
          currentInput += value;
          inputScreen.value = currentInput;
        } else if (value === "+" || value === "-" || value === "*" || value === "/") {
          // If it's an operator
          if (currentInput) {
            firstOperand = parseFloat(currentInput);
            operator = value;
            currentInput = ""; // Reset for the next operand
            inputScreen.value = operator;
          }
        } else if (value === "Enter") {
          // If Enter is pressed, perform calculation
          if (currentInput && firstOperand !== null && operator) {
            const secondOperand = parseFloat(currentInput);
            let result;
  
            switch (operator) {
              case "+":
                result = firstOperand + secondOperand;
                break;
              case "-":
                result = firstOperand - secondOperand;
                break;
              case "*":
                result = firstOperand * secondOperand;
                break;
              case "/":
                result = firstOperand / secondOperand;
                break;
            }
  
            inputScreen.value = result; // Display the result
            currentInput = ""; // Reset inputs
            firstOperand = null;
            operator = null;
          }
        } else if (value === "C") {
          // Clear the screen and reset everything
          currentInput = "";
          firstOperand = null;
          operator = null;
          inputScreen.value = "";
        }
      });
    }
  });
  