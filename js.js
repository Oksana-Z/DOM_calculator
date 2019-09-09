

const display = document.querySelector('.display');
const comma = document.querySelector('.comma');
const operators = document.querySelectorAll('.operators button');
const equals = document.querySelector('.equals');
const reset = document.querySelector('.reset');
const remove = document.querySelector('.remove');

function integerPressed(ev) {
    const num = ev.target.innerText;
    display.value += num;
}
for(let i = 0; i < 10; i++) {
    const integerBtn = document.createElement('button');
    integerBtn.textContent = i;
    document.querySelector('.integers').appendChild(integerBtn);
    integerBtn.addEventListener('click', integerPressed);
}

comma.addEventListener('click', commaPressed);
function commaPressed(ev) {
    const symbolComma = ev.target.innerText;
    if (display.value === '') {
        display.value += '0' + symbolComma;
    } else if (display.value.includes(symbolComma)) {
        return
    } else {
        display.value += symbolComma;
    }
}

operators.forEach( buttonOperator => buttonOperator.addEventListener('click', operatorPressed) );
const operatorsArray = ['+', '-', '*', '/'];
function operatorPressed(ev) {
    const operator = ev.target.innerText;
    if(operatorsArray.includes(display.value[display.value.length - 1])) {
        return;
    }
    if(display.value !== '') {
        display.value += operator;
    }
}

 equals.addEventListener('click', () => {
     const indexZeroDivided = display.value.indexOf('/0');
     if(indexZeroDivided >= 0 && display.value[indexZeroDivided + 2] !==',') {
        display.value = display.value.slice(0, indexZeroDivided+1) + display.value.slice(indexZeroDivided+2);
     };
     display.value = eval(display.value)
 });

reset.addEventListener('click', acPressed);
function acPressed(ev) {
    display.value = '';
}

remove.addEventListener('click', deletePressed);
function deletePressed(ev) {
    display.value = display.value.substring(0, display.value.length - 1);
}














/* const nums = document.querySelectorAll('.calc .nums button');
    const opers = document.querySelectorAll('.calc .opers button');
    const display = document.querySelector('.calc .display');
    const equal = document.querySelector('.calc .eq');
    nums.forEach( buttonNum => buttonNum.addEventListener('click', numPressed) );
    function numPressed(ev) {
        const num = ev.target.innerText;
        display.value += num;
    }
    opers.forEach( buttonOper => buttonOper.addEventListener('click', operPressed) );
    function operPressed(ev) {
        const oper = ev.target.innerText;
        display.value += oper;
    }
    equal.addEventListener('click', () => display.value = eval(display.value) ); */

