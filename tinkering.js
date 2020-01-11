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