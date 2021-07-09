function add(x,y)
{
    return x+y;
}

function substract(x,y)
{
    return x-y;
}

function multiply(x,y)
{
    return x*y;
}

function divide(x,y)
{
    return x/y;
}

function operate(operator,num1,num2)
{
    switch(operator)
    {
        case "/":
            return divide(num1,num2);
            break;
        
        case "*":
            return multiply(num1,num2);
            break;

        case "-":
            return substract(num1,num2);
            break;
        
        case "+":
            return add(num1,num2);
            break;
    }
}

let selectedOperator;

function selectOperator(op)
{
    return op;
}

const operatorButtons = document.querySelectorAll(".operator");

console.log(operatorButtons)

for(let i=0; i<operatorButtons.length; i++)
{
    let operatorList = ['/','*','-','+']
    operatorButtons[i].addEventListener("click", () => {
        selectOperator(operatorList[i]);
        //selectedOperator = operatorList[i];
        //BURADA SEÇİLDİKTEN SONRA FONKSİYON ÇAĞIRILACAK
    });
}

let selectedNumber = "";

const display = document.querySelector("#display");

let displayValue;

function selectNumber(num)
{
    selectedNumber += num;
    display.textContent = selectedNumber;
    displayValue = selectedNumber;
    console.log(selectedNumber)
}


const numberButtons = document.querySelectorAll(".numpad");

console.log(numberButtons)

for(let i=0; i<numberButtons.length; i++)
{
    let numpadList = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0'];
    numberButtons[i].addEventListener("click", () =>{
        selectNumber(numpadList[i]);
    });
}



const equalButton = document.querySelector("#btn-equals");

equalButton.addEventListener("click", () => {

});















