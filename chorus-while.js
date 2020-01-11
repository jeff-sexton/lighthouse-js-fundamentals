const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 20) {
  if (repeat === 11) {
    console.log("*change key*");
  }
  if (repeat === 15) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");