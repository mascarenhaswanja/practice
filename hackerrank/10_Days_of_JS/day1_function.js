/**
Factorial
**/

function factorial(n) {
    let result=1;
    
    for(let i=n; i > 0; i--) {
        result *= i;
    }
    return result;
}

//This line only here to test - Not to submit
console.log(factorial(4));
