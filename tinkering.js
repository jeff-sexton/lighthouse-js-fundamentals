/*
function multiply(a, b) {
  return a * b;
}

const result = multiply(2,10);

console.log(result);
*/

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

 /*
var num = 99;

while (num >= 1) {
    // check value of num
    let call = '';
    if (num === 1) {
        call = num + ' bottle ';
    } else {
        call = num + ' bottles ';
    }
    
    let response = '';
    let nextNum = num - 1;
    if (nextNum === 1) {
        response = nextNum + ' bottle ';
    } else {
        response = nextNum + ' bottles ';
    }    
    // print lyrics using num
    console.log( call + 'of juice on the wall! ' + call + 'of juice! Take one down, pass it around... ' + response + 'of juice on the wall!')
    // decrement num
    num = nextNum;
}

*/

/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

 /*
let time = 60;

while( time >= 0) {
  if (time === 50) {
    console.log('Orbiter transfers from ground to internal power');
  } else if (time === 31) {
    console.log('Ground launch sequencer is go for auto sequence start');
  } else if (time === 16) {
    console.log('Activate launch pad sound suppression system');
  } else if (time === 10) {
    console.log ('Activate main engine hydrogen burnoff system');
  } else if (time === 6) {
    console.log('Main engine start');
  } else if (time === 0) {
    console.log('Solid rocket booster ignition and liftoff!');
  } else {
    console.log('T-' + time + ' seconds');
  }
  time -= 1;
}
*/

/*

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function (num){
  num = num + 100;
});
test[0] = test[0] + 100;

console.log(test);

*/


var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for (let row = 0; row < numbers.length; row++) {
    for (let col = 0; col < numbers[row].length; col++) {
        if (numbers[row][col] % 2 === 0) {
            numbers[row][col] = 'even';
        } else {
            numbers[row][col] = 'odd';
        }
    }
}