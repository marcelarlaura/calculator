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
    let numDisp = display.textContent;
    if (display.getAttribute('operatorCounter') >= 1){
        if (numDisp.includes('+')){
            num1 = Number(numDisp.split('+')[0]);
            num2 = Number(numDisp.split('+')[1]);
            if (num1 === NaN || num2 === NaN){
                display.textContent = '0';
                display.setAttribute('operatorCounter',0);
            } else {
                display.textContent = add(num1,num2);
                display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')-1);
            }
            
        } else if (numDisp.includes('—')){
            num1 = Number(numDisp.split('—')[0]);
            num2 = Number(numDisp.split('—')[1]);
            if (num1 === NaN || num2 === NaN){
                display.textContent = '0';
                display.setAttribute('operatorCounter',0);
            } else {
                display.textContent = subtract(num1,num2);
                display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')-1); 
            }
            
        } else if (numDisp.includes('x')){
            num1 = Number(numDisp.split('x')[0]);
            num2 = Number(numDisp.split('x')[1]);
            if (num1 === NaN || num2 === NaN){
                display.textContent = '0';
                display.setAttribute('operatorCounter',0);
            } else {
                display.textContent = multiply(num1,num2);
                display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')-1);
            }
            
        } else {
            num1 = Number(numDisp.split('/')[0]);
            num2 = Number(numDisp.split('/')[1]);
            if (num1 === NaN || num2 === NaN){
                display.textContent = '0';
                display.setAttribute('operatorCounter',0);
            } else {
                display.textContent = divide(num1,num2);
                display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')-1); 
            }
            
        }
    }
    if (id == 'add' && display.getAttribute('operatorCounter') < 1){
        display.textContent = display.textContent + ' + ';
        display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')+1);
    } else if (id == 'subtract' && display.getAttribute('operatorCounter') < 1){
        display.textContent = display.textContent + ' — ';
        display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')+1);
    } else if (id == 'multiply' && display.getAttribute('operatorCounter') < 1) {
        display.textContent = display.textContent + ' x ';
        display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')+1);
    } else if (id == 'divide' && display.getAttribute('operatorCounter') < 1){
        display.textContent = display.textContent + ' / ';
        display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')+1);
    } else {
        display.textContent = '0';
    }
}

equal.addEventListener('click', ()=>{
    let numDisp = display.textContent;
    if (numDisp.includes('+')){
        num1 = Number(numDisp.split('+')[0]);
        num2 = Number(numDisp.split('+')[1]);
        display.textContent = add(num1,num2);
    } else if (numDisp.includes('—')){
        num1 = Number(numDisp.split('—')[0]);
        num2 = Number(numDisp.split('—')[1]);
        display.textContent = subtract(num1,num2);
    } else if (numDisp.includes('x')){
        num1 = Number(numDisp.split('x')[0]);
        num2 = Number(numDisp.split('x')[1]);
        display.textContent = multiply(num1,num2);
    } else if (numDisp.includes('/')){
        num1 = Number(numDisp.split('/')[0]);
        num2 = Number(numDisp.split('/')[1]);
        display.textContent = divide(num1,num2);
    } else {
        display.textContent = display.textContent;
    }

})

clear.addEventListener('click', ()=>{
    let eraseOne = display.textContent.split('');
    let character = eraseOne.splice(-1,1);
    if ('+'.includes(character) ||
        '—'.includes(character) ||
        'x'.includes(character) ||
        '/'.includes(character)){
        display.setAttribute('operatorCounter',display.getAttribute('operatorCounter')-1);
    }

    display.textContent = eraseOne.join('');

    if(!(display.textContent.includes('+')) && 
        !(display.textContent.includes('—')) &&
        !(display.textContent.includes('/')) &&
        !(display.textContent.includes('x'))) {
            display.setAttribute('operatorCounter',0);
        }

    
    
})

backspace.addEventListener('click', ()=>{
    display.textContent = '';
    display.setAttribute('operatorCounter',0);
    
})



