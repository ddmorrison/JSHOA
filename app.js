console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function plus(number) {
  return (plusNumber) => (plusNumber += number);
}
var plus15 = plus(15);
var plus = 0;
console.log(plus15(10));
