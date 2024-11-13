function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    if (num2 == 0) {
        return 'ERROR';
    } else {
        return num1/num2;
    }
    
}

const display = document.querySelector('.display');
const firstNum = document.querySelectorAll('.number');
const secondNum = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');

firstNum.forEach(function(item){
    item.addEventListener("click", (e) =>{
        let num1 = Number(e.target.id);
        display.textContent = num1;
    });
})



secondNum.forEach(function(item){
    item.addEventListener("click", (e) =>{
        let num2 = Number(e.target.id);
        display.textContent = display.textContent + ' ' + num2;
    });
})

equal.addEventListener('click', function(){
    if (selectFunction == 1){
        display.textContent = add(num1,num2);
    } else if(selectFunction == 2) {
        display.textContent = subtract(num1,num2);
    } else if (selectFunction == 3) {
        display.textContent = multiply(num1,num2);
    } else {
        display.textContent = divide(num1,num2);
    }
})

