// get button calculate
let buttonCalc = document.querySelectorAll(".btn");
let operation = document.querySelectorAll(".operator");
let equal = document.querySelector(".btn-equal")

// get screen calcucate 
let calcScreen = document.querySelector(".screen-calc");

// operation content declaration
let calcOperation

// function when the clean button on click
document.querySelector(".all-clear").addEventListener('click', ()=>{
    calcScreen.value = "";
    calcOperation = ''
});

// function when the arrow left button on click
document.querySelector(".one-clear").addEventListener('click', ()=>{
    calcScreen.value = calcScreen.value.slice(0, -1);
    calcOperation = ''
});

// function when the percent button on click
document.querySelector(".percent").addEventListener('click', ()=>{
    calcScreen.value = calcScreen.value / 100;
});

// add number on screen calculate
buttonCalc.forEach(number => {
    number.addEventListener("click", (e)=>{
        calcScreen.value += e.target.outerText
    })
});

// add number on screen calculate
operation.forEach(operator => {
    operator.addEventListener("click", (e)=>{
        // fill in variable calcOperation
        calcOperation = e.target.value;

        // make condiiton
        switch (calcOperation) {
            // if + button on click
            case "+":
                // prevent duplicate operation buttons
                if(calcScreen.value[calcScreen.value.length - 1] == '+'||
                    calcScreen.value[calcScreen.value.length - 1] == '-' ||
                    calcScreen.value[calcScreen.value.length - 1] == '/' ||
                    calcScreen.value[calcScreen.value.length - 1] == '*'){
                    calcScreen.value = calcScreen.value.slice(0,-1) + ''
                }
                calcScreen.value += calcOperation
                break;
            // if - button on click
            case "-":
                // prevent duplicate operation buttons
                if(calcScreen.value[calcScreen.value.length - 1] == '+'||
                    calcScreen.value[calcScreen.value.length - 1] == '-' ||
                    calcScreen.value[calcScreen.value.length - 1] == '/' ||
                    calcScreen.value[calcScreen.value.length - 1] == '*'){
                    calcScreen.value = calcScreen.value.slice(0,-1) + ''
                }
                calcScreen.value += calcOperation
                break;
            // if / button on click
            case "/":
                // prevent duplicate operation buttons
                if(calcScreen.value[calcScreen.value.length - 1] == '+'||
                    calcScreen.value[calcScreen.value.length - 1] == '-' ||
                    calcScreen.value[calcScreen.value.length - 1] == '/' ||
                    calcScreen.value[calcScreen.value.length - 1] == '*'){
                    calcScreen.value = calcScreen.value.slice(0,-1) + ''
                }
                calcScreen.value += calcOperation
            break;
            // if * button on click
            case "*":
                // prevent duplicate operation buttons
                if(calcScreen.value[calcScreen.value.length - 1] == '+'||
                    calcScreen.value[calcScreen.value.length - 1] == '-' ||
                    calcScreen.value[calcScreen.value.length - 1] == '/' ||
                    calcScreen.value[calcScreen.value.length - 1] == '*'){
                    calcScreen.value = calcScreen.value.slice(0,-1) + ''
                }
                calcScreen.value += calcOperation
            break;
        }
    })
});

// when the same button on click, the operation will be executed
equal.addEventListener('click', ()=>{
    // operation will be executed
    calcScreen.value = eval(calcScreen.value);

    // empty the contents of the variable calcOperation
    calcOperation = ''
})