"use strict";
const num1Ele = document.getElementById('num1');
const num2Ele = document.getElementById('num2');
const btnEle = document.querySelector('button');
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2;
    }
    return +num1 + +num2;
}
//   console.log(add(1, 5))
//   console.log(add('1', '5'))
//   console.log(add(1, '5'))
btnEle.addEventListener('click', () => {
    const num1 = num1Ele.value;
    const num2 = num2Ele.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1, num2);
    console.log(result);
    console.log(stringResult);
});
