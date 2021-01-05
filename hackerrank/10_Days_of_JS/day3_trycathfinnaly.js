/* ry to reverse string  using the split, reverse, and join methods.
If an exception is thrown, catch it and print the contents of the exception's  on a new line.
Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
*/
function reverseString(s) {
    try{
        let wsplipt = s.split("");
        console.log(wsplipt);
        let wreverse = wsplipt.reverse();
        console.log(wreverse);
        let wjoin = wreverse.join("");
        console.log(wjoin);
        // Chaining
        //console.log(s.split("").reverse().join(""));
    }
    catch(err) {
        console.log(err.message);
    }
    finally {
        console.log(s);       
    }
}

 
//This line only here to test - Not to submit
//reverseString("1234");
reverseString(Number(1234));


// function getElement(arr, pos) {
//     return arr[pos];
// }

// //let arr = [1, 2, 3, 4, 5];

// try {
//     console.log(getElement(arr, 4));
// } 
// /*  Result catch
//         arr is not defined
//         The program continued executing!
// */ 
// catch (e) {
//     console.log(e.message);
// }
// /* If we remove the catch block and add the finally block 
// shown below, it will instead print Finally Block and then 
// terminate due to the uncaught exception 
// (ReferenceError: arr is not defined). */
// /*finally {
//     console.log("Finally Block");
// }*/
// console.log("The program continued executing!");

/*  Result
Assignment to constant variable.
[ 1, 3, 4, 4, 5 ]
*/
// const arr = [1, 4, 3, 4, 5];

// try {
//     arr = [4, 2];
//     console.log(arr.sort());
// } 
// catch (e) {
//     console.log(e.message);
// } 
// finally {
//     console.log(arr.sort());
// }




