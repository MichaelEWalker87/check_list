// example: log to the console the data type of `true`:
 var lies = true;
 console.log(lies);

// Write code that combines the variables below into a string that
// reads "The quick red fox jumped over the lazy brown dog":

var foxy =("The quick red fox jumped over ");
var dogy = ("the lazy brown dog");

console.log =(foxy + dogy);

// example: Write code below to log your name in the console:

var name = ("mike walker");
console.log = (name);

/* ----------------------------
Using the variables defined below, determine if you have the
ingredients to make a pizza. A pizza requires at least two cups
of flour and sauce.

You should be able to change the variables to achieve the following outputs:
When cupsOfFlour = 1 and hasSauce = true, your program should log "I cannot make pizza";
When cupsOfFlour = 1 and hasSauce = false, your program should log "I cannot make pizza";
When cupsOfFlour = 2 and hasSauce = true, your program should log "I can make pizza";
When cupsOfFlour = 3 and hasSauce = true, your program should log "I can make pizza";
*/
var cupsOfFlour = 3;
var hasSauce = true;

if (cupsOfFlour <= 1 && hasSauce == true) {
  console.log("I cannot make pizza!")
}else if (cupsOfFlour > 1 && hasSauce == false){
  console.log("I can't make pizza!")
} else if (cupsOfFlour <= 1 && hasSauce == false) {
  console.log("I can't make pizzza!!!")
} else{ console.log("I can make Pizza!")
      }

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

console.log(67 % 3)


//1. In the space below, create an Object stored to a variable named `petStore`.
//This object should hold an inventory
//of items and the number of that item that you might find at a pet store.


var petStore = {
  apples: 2,
  foodBags: 93,
  yoyo: 10, 
}
​
console.log(petStore)
