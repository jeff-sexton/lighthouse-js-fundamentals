function lastIndexOf (array, value) {
  let position = -1;
  array.forEach(function(currentValue, index){
    if (currentValue === value) {
      position = index;
    }
  });
  return position;
  //return array.lastIndexOf(value);
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);