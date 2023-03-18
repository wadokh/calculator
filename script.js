let firstNumber;
let operatorSign='';
let secondNumber;
let i;

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if (b===0){
        alert("not defined")
    }
    else{
    return a/b;
    }
}

function operate(operator,a,b){
    return operator(a,b)
}

let display=document.getElementById('display');
const btns = document.querySelectorAll('.number')

btns.forEach(btn => {

   btn.addEventListener('click', event => {
    if (i===1){
        display.innerHTML=''
        i=0;
    }
    display.innerHTML+= event.target.innerHTML ;
   });

});



const mathOperators = document.querySelectorAll('.maths')

mathOperators.forEach(mathOperator => {

   mathOperator.addEventListener('click', event => {
        let mathsymbol= event.target.innerHTML ;
        if (operatorSign==='')
        {firstNumber=Number(display.innerHTML);
        i=1;
        switch (mathsymbol){
            case '+':
                operatorSign=add;
                break;
            case '-':
                operatorSign=subtract;
                break;
            case 'x':
                operatorSign=multiply;
                break;
            case '÷':
                operatorSign=divide;
                break;
                                    
        }}
        else{
            secondNumber=Number(display.innerHTML);            
            display.innerText=`${(operate(operatorSign,firstNumber,secondNumber))}`;
            firstNumber=Number(display.innerHTML);
            i=1;
            switch (mathsymbol){
                case '+':
                    operatorSign=add;
                    break;
                case '-':
                    operatorSign=subtract;
                    break;
                case 'x':
                    operatorSign=multiply;
                    break;
                case '÷':
                    operatorSign=divide;
                    break;
                                        
            }
        }
   });

});


const equal=document.getElementById('equal');
equal.addEventListener('click', event => {
    i=1;
    secondNumber=Number(display.innerHTML);
    display.innerText=`${(operate(operatorSign,firstNumber,secondNumber))}`;
    firstNumber=Number(display.innerHTML);
    operatorSign='';    
});

const clear=document.getElementById('clear');
clear.addEventListener('click', event => {
    firstNumber='';
    secondNumber='';
    operatorSign='';
    display.innerHTML='';
});