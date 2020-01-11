/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 100) {
  let result = '';
  if (x % 3 === 0) {
    result = 'Fizz';
  }

  if (x%5 === 0) {
    result = result + 'Buzz';
  }

  if (result === '') {
    result = x;
  }

  console.log(result);
  x += 1;
}
