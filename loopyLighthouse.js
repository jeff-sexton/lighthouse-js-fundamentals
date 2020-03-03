/* Origional Problem Solution
for (let i = 100; i <= 200; i++) {
  if ((i % 3 === 0) && (i % 4 === 0)){
    console.log('LoopyLighthouse');
  } else if (i % 3 === 0) {
    console.log('Loopy');
  } else if (i % 4 === 0) {
    console.log('Lighthouse');
  } else {
    console.log(i);
  }
}
*/

/* function loopyLighthouse(range, multiples, words){
  for (let i = range[0]; i <= range[1]; i++) {
    if ((i % multiples[0] === 0) && (i % multiples[1] === 0)){
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }

} */

function loopyLighthouse(range, multiples, words){
  for (let i = range[0]; i <= range[1]; i++) {
    let result = '';
    if (i % multiples[0] === 0) {
      //console.log(words[0]);
      result += words[0];
    }
    if (i % multiples[1] === 0) {
      //console.log(words[1]);
      result += words[1];
    }
    if (result === '') {
      //console.log(i);
      result = i;
    }
    console.log(result);
  }

}


//test case
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);