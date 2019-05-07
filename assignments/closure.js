// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const day = 'Monday';

function calendar () {
    return `Today is ${day}`
}

console.log(calendar());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function () {
    count ++;  
    return count;
  }
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
const counterFactory = () => {
    let count = 0;
    return countingObject = {
      increment() {
            count ++;
            return count;
            },

      decrement() {
            count --;
            return count;
            }
  }
};


const newCounterFactory = counterFactory();
console.log(newCounterFactory.increment()); //1
console.log(newCounterFactory.increment()); //2
console.log(newCounterFactory.increment()); //3
console.log(newCounterFactory.decrement()); //2