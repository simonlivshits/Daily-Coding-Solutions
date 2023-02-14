/* Good morning! Here's your coding interview problem for today.

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass? */

let k = 17, sum, numList = [10, 35, 3, 7];

//solution
function checkList(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (j != i) {
                sum = list[i] + list[j];
                if (sum === k) {
                    return console.log(true);
                }          
            }
        }
    }
    console.log(false);
}

//bonus solution?

checkList(numList);