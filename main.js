// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(a, b){
    // Your answer here
}if (a > b) {
  return a;
} else {
  return b;
}


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(a, b, c){
  if (a > b && a > c) {
    return a;
  }else if (b > c) {
    return b;
  }else {
    return c;
  }
}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
  char = char.lowercase();
  if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
    return true;
  }
  return false;

  }


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
  function sum(a, b) {
     return (a + b);

}






// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg(item1, item2, item3){
return (item1 + item2 + item3)/3;

}





// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(string) {
  return string.length;
}

// getLength('happy');

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
function greaterThan(item1, item2) {
    if (Item2 > Item1){
      return true;
    }
    return false;

  }


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
  function greet(Name) {
    return "Hello," + " " + Name +"!";
  }


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
  function madLib(person, place, verb, adjective) {
    return person + " " + "went to" + " " + place + " "  + "and" + " " + verb + " " + "with a" + " " + adjective + " " + "car.";
  }
