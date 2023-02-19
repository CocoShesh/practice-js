function calculate(operation) {
    let una = parseInt(document.getElementById('first').value);
    let second = parseInt(document.getElementById('second').value);
    let sagot = document.getElementById("sum");
    let result;
  
    if (operation === "addition") {
      result = una + second;
    } else if (operation === "subtraction") {
      result = una - second;
    } else if (operation === "multiplication") {
      result = una * second;
    } else if (operation === "division") {
      result = una / second;
    }
  
    sagot.textContent = "sum: " + result;
  }
  