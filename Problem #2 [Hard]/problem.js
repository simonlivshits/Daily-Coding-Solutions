/* Good morning! Here's your coding interview problem for today.

This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division? */

let testArray = [1, 2, 3, 4, 5], 
    productArray = [],
    product;

//solution
function createProductArray (array) {
    let sum = array.reduce((a, b) => a + b);
    for (let i = 0; i < array.length; i++) {
        productArray[i] = sum / array[i];
    }
    console.log(productArray);
}

//follow-up solution
function createProductArray1 (array){
    for (let i = 0; i < array.length; i++) {
        product = 1;
        for (let j = 0; j < array.length; j++) {
            if (j != i) {
                product *= array[j];
            }
        }
        productArray[i] = product;
    }
    console.log(productArray);
}

createProductArray1(testArray);
createProductArray1(testArray);