const input = document.querySelector('#cal_screen'); // assigning a  variable to a the calulator screen
const numbers = document.querySelectorAll('#number');
const Operators = document.querySelectorAll('#operator');
const Clear = document.querySelector('#clear');

let firstNum = "";
let secondNum = "";
let operator = "";
let anotherOperator = ""


numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") { // Read first number if no operator set yet
            firstNum += e.target.innerText;
            input.value = firstNum
            console.log(firstNum)

        } else if (operator === "+" || operator === "-"|| operator === "*" || operator === "/" ){
            input.value  = "";
            secondNum += e.target.innerText;
            input.value = secondNum
            console.log(secondNum)

        } else { // Read second number

            console.log(secondNum)
            
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
            firstNum += operator // aapend the  first number to the operator sign
            input.value = firstNum // displaying the appeneded first number to the scrren
            secondNum = firstNum + secondNum // appending the second number to the first on the cal screen

            console.log(firstNum); // Print the first number
            console.log(operator); // Print the operator

        } else { // If equals button clicked



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
    input.value = ""; // setting the screen to be empty
    firstNum = ""; // setting the variable to be empty
    secondNum = ""; // setting the variable to be empty
    operator = ""; // setting the variable to be empty
});






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