// Problem: Reverse String
// Category: String

/*
Description:
Print numbers 1–100. For multiples of 3 print "Fizz", 
multiples of 5 print "Buzz", both print "FizzBuzz".
*/

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0){
        console.log("Fizz Buzz");
    } else if(i % 3 === 0){
        console.log("Fizz");
    } else if(i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
  }
}

console.log(fizzBuzz());
