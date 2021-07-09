let selectedOperator;
let selectedNum = "";
let selectedNum2 = "";

const display = document.querySelector("#display");
const buttonDot = document.querySelector("#dot");

buttonDot.addEventListener("click",() =>{
    if(selectedNum.search('.') < 0)
        {
            buttonDot.disabled = false;
        }
        else
        {
            buttonDot.disabled = true;
        }
    
});
/* INPUTS TO NUMPAD ARE RECORDED TO DISPLAY AND SAVED IN A VARIABLE*/
const numpadButtons = document.querySelectorAll(".numpad");
for(let i=0; i<numpadButtons.length; i++)
{
    let numpadList = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0'];

    numpadButtons[i].addEventListener("click", () => {
        selectedNum += numpadList[i];
        display.textContent = selectedNum;

        if(selectedNum.search('.') < 0)
        {
            buttonDot.disabled = false;
        }

        enableOperatorButtons();
    });
}

/*  INPUTS TO OPERATOR BUTTONS ARE RECORDED AND DISPLAYED */
const operatorButtons = document.querySelectorAll(".operator");

function enableOperatorButtons()
{
    for(let i=0; i<operatorButtons.length; i++)
    {
        operatorButtons[i].disabled = false;
    }
}

function disableOperatorButtons()
{
    for(let i=0; i<operatorButtons.length; i++)
    {
        operatorButtons[i].disabled = true;
    }
}

let counterOperator = 1;

for(let i=0; i<operatorButtons.length; i++)
{
    let operatorList = ['/', '*', '-', '+'];
    let displayedOperatorList = ['÷', '×', '-', '+'];

    operatorButtons[i].addEventListener("click", () => {
        selectedOperator = operatorList[i];
        display.textContent = displayedOperatorList[i];
        if(counterOperator % 2 != 0)
        {
            selectedNum2 = selectedNum;
            selectedNum = "";
            counterOperator++;
        }
        else
        {
            
            let result = operate(selectedOperator,selectedNum2, selectedNum);
            display.textContent = result;
            selectedNum = result;
            console.log(selectedOperator,selectedNum2,selectedNum);
        
        }
        
        
        disableOperatorButtons();
        buttonDot.disabled = false;
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

/* CLEARS DISPLAY AND VARIABLES*/ 
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    selectedNum2 = "";
    selectedOperator = "";
    selectedNum = "";
    display.textContent = "0";
    counterOperator = 1;
    buttonDot.disabled = false;
});

/* DELETES THE MOST INSIGNIFICANT DIGIT AT ANY MOMENT OF THE CALCULATION*/ 
const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", () => {
    
    selectedNum = selectedNum.substring(0, selectedNum.length-1);
    display.textContent = selectedNum;

    if(selectedNum.includes('.') === false)
    {
        buttonDot.disabled = false;
    }
});

function add(x,y)
{
    return Math.round(((+x)+(+y))*1000)/1000;
}

function substract(x,y)
{
    return Math.round(((+x)-(+y))*1000)/1000;
}

function multiply(x,y)
{
    return Math.round(((+x)*(+y))*1000)/1000;
}

function divide(x,y)
{
    return Math.round(((+x)/(+y))*1000)/1000;
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