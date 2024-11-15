function add(num1,num2){
    if (num2 == undefined || num2 == NaN){
        num2 = num1;
    } else if (num1 == undefined || num1 == NaN){
        num1 = 0;
    }
    return num1+num2;
}

function subtract(num1,num2){
    if (num2 == undefined || num2 == NaN){
        num2 = num1;
    } else if (num1 == undefined || num1 == NaN){
        num1 = 0;
    }
    return num1-num2;
}

function multiply(num1,num2){
    if (num2 == undefined || num2 == NaN){
        num2 = num1;
    } else if (num1 == undefined || num1 == NaN){
        num1 = 0;
    }
    return num1*num2;
}

function divide(num1,num2){
    if (num2 == undefined || num2 == NaN){
        num2 = num1;
    } else if (num1 == undefined || num1 == NaN){
        num1 = 1;
    }
    if (num2 == 0) {
        return 'ERROR';
    } else {
        return num1/num2;
    }
    
}


const display = document.querySelector('.display');
const equal = document.querySelector('#equal');
const backspace = document.querySelector('#backspace');
const clear = document.querySelector('#clear');

display.textContent = '';
display.setAttribute('operatorCounter',0);

function assignNumber(id){
    display.textContent = display.textContent + id;
}

function assignOperator(id){
    if (display.getAttribute('operatorCounter') >= 1){
        let numDisp = display.textContent;
        if (numDisp.includes('+')){
            num1 = Number(numDisp.split('+')[0]);
            num2 = Number(numDisp.split('+')[1]);
            display.textContent = add(num1,num2);
            display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')-1);
        } else if (numDisp.includes('-')){
            num1 = Number(numDisp.split('-')[0]);
            num2 = Number(numDisp.split('-')[1]);
            display.textContent = subtract(num1,num2);
            display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')-1);
        } else if (numDisp.includes('x')){
            num1 = Number(numDisp.split('x')[0]);
            num2 = Number(numDisp.split('x')[1]);
            display.textContent = multiply(num1,num2);
            display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')-1);
        } else {
            num1 = Number(numDisp.split('/')[0]);
            num2 = Number(numDisp.split('/')[1]);
            display.textContent = divide(num1,num2);
            display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')-1);
        }
    }
    if (id == 'add'){
        display.textContent = display.textContent + ' + ';
        display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')+1);
    } else if (id == 'subtract'){
        display.textContent = display.textContent + ' - ';
        display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')+1);
    } else if (id == 'multiply') {
        display.textContent = display.textContent + ' x ';
        display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')+1);
    } else {
        display.textContent = display.textContent + ' / ';
        display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')+1);
    }
}

equal.addEventListener('click', ()=>{
    let numDisp = display.textContent;
    if (numDisp.includes('+')){
        num1 = Number(numDisp.split('+')[0]);
        num2 = Number(numDisp.split('+')[1]);
        display.textContent = add(num1,num2);
    } else if (numDisp.includes('-')){
        num1 = Number(numDisp.split('-')[0]);
        num2 = Number(numDisp.split('-')[1]);
        display.textContent = subtract(num1,num2);
    } else if (numDisp.includes('x')){
        num1 = Number(numDisp.split('x')[0]);
        num2 = Number(numDisp.split('x')[1]);
        display.textContent = multiply(num1,num2);
    } else {
        num1 = Number(numDisp.split('/')[0]);
        num2 = Number(numDisp.split('/')[1]);
        display.textContent = divide(num1,num2);
    }

})

clear.addEventListener('click', ()=>{
    let eraseOne = display.textContent.split('');
    let character = eraseOne.splice(-1,1);
    if ('+-/x'.includes(character)){
        display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')-1);
    }
    display.textContent = eraseOne.join('');
    
})

backspace.addEventListener('click', ()=>{
    let eraseAll = display.textContent.split('');
    for (let i=0; i<eraseAll.length; i++){
        if ('+-/x'.includes(eraseAll[i])){
            display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')-1);
        }
    }
    display.textContent = '';
    
})



