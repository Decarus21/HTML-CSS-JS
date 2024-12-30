/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
for (let i = 1; i<= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (8 % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }


/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
