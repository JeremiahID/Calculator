const input = document.querySelector('#cal_screen');
const numbers = document.querySelectorAll('#number');
const Operators = document.querySelectorAll('#operator');
const Clear = document.querySelector('#clear');

let firstNum = "";
let secondNum = "";
let operator = "";


numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") { // Read first number if no operator set yet
            firstNum += e.target.innerText;
            input.value = firstNum
            console.log(firstNum)
        } else { // Read second number
            secondNum += e.target.innerText;
            input.value = secondNum
            
        }
    });
});


// Operators.forEach(op => {
//     op.addEventListener("click", e => {
//         operator = e.target.innerText;
//         firstNum += operator
//         input.value = firstNum
//         console.log(operator)
//         // If equals operator, perform operation
//     });
// });


Operators.forEach(op => {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=") { // If the operator is not equals
            operator = e.target.innerText;
            firstNum += operator
            input.value = firstNum

            console.log(firstNum); // Print the first number
            console.log(operator); // Print the operator

        } else { // If equals button clicked
            console.log(secondNum); // Print 2nd number

            switch (operator) { // Calculate and print output
                case "+":
                    console.log(parseInt(firstNum) + parseInt(secondNum));
                    valueToShow = parseInt(firstNum) + parseInt(secondNum)
                    input.value = valueToShow
                    break;

                case "-":
                    console.log(parseInt(firstNum) - parseInt(secondNum));
                    valueToShow = parseInt(firstNum) - parseInt(secondNum)
                    input.value = valueToShow
                    break;

                case "*":
                    console.log(parseInt(firstNum) * parseInt(secondNum));
                    valueToShow = parseInt(firstNum) * parseInt(secondNum)
                    input.value = valueToShow
                    break;

                case "/":
                    console.log(parseInt(firstNum) / parseInt(secondNum));
                    valueToShow = parseInt(firstNum) / parseInt(secondNum)
                    input.value = valueToShow
                    break;
                

                default:
                    break;
                }
            }
    
        });
    });




// this is the scrpting for the clears
Clear.addEventListener('click', () =>{
    input.value = "";
    firstNum = "";
    secondNum = "";
});




// code from  stack overflow


// let firstNum = "";
// let secondNum = "";
// let operator = "";

// numbers.forEach(number => {
//     number.addEventListener("click", e => {
//         if (operator === "") { // Read first number if no operator set yet
//             firstNum += e.target.innerText;
//             console.log(firstNum)
//         } else { // Read second number
//             secondNum += e.target.innerText;
//             console.log(secondNum)
//         }
//     });
// });

// operators.forEach(op => {
//     op.addEventListener("click", e => {
//         operator = e.target.innerText;
//         console.log(operator)
//         // If equals operator, perform operation
//     });
// });

// stack over flow second layer

// numbers.forEach(number => {
//     number.addEventListener("click", e => {
//         if (operator === "") { // Read first number if no operator set yet
//             firstNum += e.target.innerText;
//         } else { // Read second number
//             secondNum += e.target.innerText;
//         }
//     });
// });

// operators.forEach(op => {
//     op.addEventListener("click", e => {
//         if (e.target.innerText !== "=") { // If the operator is not equals
//             operator = e.target.innerText;

//             console.log(firstNum); // Print the first number
//             console.log(operator); // Print the operator

//         } else { // If equals button clicked
//             console.log(secondNum); // Print 2nd number

//             switch (operator) { // Calculate and print output
//                 case "+":
//                     console.log(parseInt(firstNum) + parseInt(secondNum));
//                     break;

//                 case "-":
//                     console.log(parseInt(firstNum) - parseInt(secondNum));
//                     break;

//                 // etc...

//                 default:
//                     break;
//             }
//         }






// this is the Scripting for the Arithimetic symbols

// function valueToShowAdd(numberOne, numberTwo){

//     numberOne = 
//     show = numberOne + numberTwo
//     return show
// }


// Add.addEventListener('click', (numberOne, numberTwo, e) =>{
//     let valueToAppend = '+';
//     let noValue = "";
//     if(input.value.includes('+') || input.value.includes('*') || input.value.includes('/') ||input.value.includes('-') ){
//         input.value += noValue;  
//         // numberOne += e.target.innerText;
//         // console.log(numberOne)
//     } else {
//         input.value += valueToAppend;
//         // numberTwo += e.target.innerText;
//         // console.log(numberTwo)
//     }

  
    
// });

// Sub.addEventListener('click', () =>{
//     let valueToAppend = '-';
//     let noValue = "";
//     if(input.value.includes('-') || input.value.includes('*') || input.value.includes('+') ||input.value.includes('/') ){
//         input.value += noValue;  
//     } else {
//         input.value += valueToAppend;
//     }
//     ;
// });

// Mul.addEventListener('click', () =>{
//     let valueToAppend = '*';
//     let noValue = "";
//     if(input.value.includes('*') || input.value.includes('/') || input.value.includes('+') ||input.value.includes('-') ){
//         input.value += noValue;  
//     } else {
//         input.value += valueToAppend;
//     }
// });

// Divide.addEventListener('click', () =>{
//     let valueToAppend = '/';
//     let noValue = "";
//     if(input.value.includes('/') || input.value.includes('*') || input.value.includes('+') ||input.value.includes('-') ){
//         input.value += noValue;  
//     } else {
//         input.value += valueToAppend;
//     }
    
// });



// Number_one.addEventListener('click', () =>{
//     let valueToAppend = '1';
//     input.value += valueToAppend ;

// });

// Number_two.addEventListener('click', () =>{
//     let valueToAppend = '2';
//     input.value += valueToAppend ;
// });

// Number_three.addEventListener('click', () =>{
//     let valueToAppend = '3';
//     input.value += valueToAppend ;
// });

// Number_four.addEventListener('click', () =>{
//     let valueToAppend = '4';
//     input.value += valueToAppend ;
// });

// Number_five.addEventListener('click', () =>{
//     let valueToAppend = '5';
//     input.value += valueToAppend ;
// });

// number_six.addEventListener('click', () =>{
//     let valueToAppend = '6';
//     input.value += valueToAppend ;
// });

// Number_seven.addEventListener('click', () =>{
//     let valueToAppend = '7';
//     input.value += valueToAppend ;
// });

// Number_eight.addEventListener('click', () =>{
//     let valueToAppend = '8';
//     input.value += valueToAppend ;
// });

// Number_nine.addEventListener('click', () =>{
//     let valueToAppend = '9';
//     input.value += valueToAppend ;
// });

// Zero.addEventListener('click', () =>{
//     let valueToAppend = '0';
//     input.value += valueToAppend ;
// });

// // this is the scrpting for the clears
// Clear.addEventListener('click', () =>{
//     input.value = "";
// });


// Equals.addEventListener('click', ()=>{
//     let valueToShow = parseInt(numberOne) + parseInt(numberTwo)



// })

// if(data.innerText.includes('jerry')){
//     data.innerText = "coding is fun" ;
//     data.classList.add("success")
// }
// else if (data.innerText.includes('glory')) {
//     data.classList.add("error")
// } else {
//     data.innerText = "coding is fun"
    
// }
// input.appendChild(Number_one);
// input.appendChild(Number_two);



                    // THE JQUERY

// $(console.log("working"))