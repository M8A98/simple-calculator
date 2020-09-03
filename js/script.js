//NUMBERS
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("one");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let cero = document.getElementById("cero");

//RESULT
let visualResult = document.getElementById("result");

//OPERATIONS
let addition = document.getElementById("addition");
let difference = document.getElementById("difference");
let multiplication = document.getElementById("multiplication")
let division = document.getElementById("division");
//DELETE
let ac = document.getElementById("AC");
// +/-
let plusMinus = document.getElementById("plusMinus");
// = and .
let equal = document.getElementById("giveMeResult");
let dot = document.getElementById("dot");



let working = 0;
let currentNumber = "";
let currentSymbol = "";
let currentOperation = [];
// EVENT LISTENERS



seven.addEventListener("click",()=>{
    currentNumber += seven.innerHTML;
    console.log(currentNumber);
});
addition.addEventListener("click",()=>{
    let sumResult = 0;
    currentOperation.push(currentNumber);
    currentNumber = "";
    currentSymbol = "+";
    if(currentOperation.length > 1){
        solveProblem();
    }
});

equal.addEventListener("click",()=>{
    
})

function solveProblem(){
    if (currentSymbol === "+"){
        let initialOperationsResult = currentOperation.reduce((accum,numb)=>{
            return accum + parseInt(numb);
        },0);
        visualResult.innerHTML = initialOperationsResult;
    }
    
}



/* Things learned:

1.- let cero = parseInt(document.getElementById("cero").innerHTML); Will give me a number. (from the elements above)
2.- You need to leave them as document.getElementById("cero"); that way you can use methods like addEventListener.

*/