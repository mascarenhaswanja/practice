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

function throwMyError(input) {
    // Generate an exception with a value read from stdin
    throw new Error(input);
}

    try {
        throwMyError("My message");
    }
    catch (e) {
        console.log(e.message);
    }
 
//This line only here to test - Not to submit

