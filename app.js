let selectedOperator;
let selectedNum = "";
let selectedNum2 = "";



const display = document.querySelector("#display");

/* INPUTS TO NUMPAD ARE RECORDED TO DISPLAY AND SAVED IN A VARIABLE*/
const numpadButtons = document.querySelectorAll(".numpad");
for(let i=0; i<numpadButtons.length; i++)
{
    let numpadList = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0'];

    numpadButtons[i].addEventListener("click", () => {
        selectedNum += numpadList[i];
        display.textContent = selectedNum;
    });
}

/*  INPUTS TO OPERATOR BUTTONS ARE RECORDED AND DISPLAYED */
const operatorButtons = document.querySelectorAll(".operator");
for(let i=0; i<operatorButtons.length; i++)
{
    let operatorList = ['/', '*', '-', '+'];
    let displayedOperatorList = ['÷', '×', '-', '+'];

    operatorButtons[i].addEventListener("click", () => {
        selectedOperator = operatorList[i];
        display.textContent = displayedOperatorList[i];
        selectedNum2 = selectedNum;
        selectedNum = "";
    });
}

/* WHEN CLICKED ON EQUAL BUTTON EQUATION IS EVALUATED AND RESULT IS DISPLAYED*/
const equalsButton = document.querySelector("#btn-equals");
equalsButton.addEventListener("click", () => {
    console.log("selectednum = ",selectedNum);
    console.log("selectedope= ",selectedOperator);

    let result = operate(selectedOperator,selectedNum2, selectedNum);
    display.textContent = result;
    selectedNum = result;
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    selectedNum2 = "";
    selectedOperator = "";
    selectedNum = "";
    display.textContent = "0";
});

const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", () => {
    selectedNum = selectedNum.substring(0, selectedNum.length-1);
    display.textContent = selectedNum;
});

function add(x,y)
{
    return (+x)+(+y);
}

function substract(x,y)
{
    return (+x)-(+y);
}

function multiply(x,y)
{
    return (+x)*(+y);
}

function divide(x,y)
{
    return (+x)/(+y);
}

function operate(operator,num1,num2)
{
    switch(operator)
    {
        case '+':
            return add(num1,num2);
            break;
        case '-':
            return substract(num1,num2);
            break;
        case '*':
            return multiply(num1,num2);
            break;
        case '/':
            return divide(num1,num2);
            break;
    }
}