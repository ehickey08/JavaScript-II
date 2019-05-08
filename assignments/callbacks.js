// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

//Question 1
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
    return cb(arr.length);
}

//using a named formula technique
function returnLength(length){
    console.log(`Your array has ${length} items.`);
}

//invoke
getLength(items, returnLength);


//Question 2
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

//using a named formula technique
function returnLast (el) {
    console.log(`Your last element in the array is ${el}`);
}

//invoke
last(items, returnLast);

//Question 3
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}

//using anon function
sumNums(3,8, function(sum) {
    console.log(`Your sum is ${sum}`)
});


//Question 4
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}

//using anon function
multiplyNums(3,8, function(product) {
    console.log(`Your product is ${product}`);
});


//Question 5
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
    return cb(list.some((el) => el === item));
}

//using anon function
let testItem = 'Help'
contains(testItem, items, function(result) {
    if(result === true){
        console.log(`Your list contains ${testItem}.`);
    } else {
        console.log(`Your list does not contain ${testItem}.`);
    }
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let duplicateFree = array.filter((el, index) => {
    return el !== array[index+1];
  });
  return cb(duplicateFree);
}

let testArray = [1, 1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7, 7];

removeDuplicates (testArray, function(result) {
    console.log(`Your duplicate free array is ${result}`);
    console.log(`Your original array is still the same. See for yourself! ${testArray}`);
});


//MUCH EASIER WAY USING SET

function removeDuplicatesBySet (array, cb){
    return cb(Array.from(new Set(array)));
}

removeDuplicates (testArray, function(result) {
    console.log(`Your duplicate free array is ${result}`);
    console.log(`Your original array is still the same. See for yourself! ${testArray}`);
});


//Tried the original without arrow function

function removeDuplicatesTwo(array, cb) {
    // removeDuplicates removes all duplicate values from the given array.
    // Pass the duplicate free array to the callback function.
    // Do not mutate the original array.
    let duplicateFree = array.filter(duplicateRemoval);
    return cb(duplicateFree);
}

function duplicateRemoval(el, index, array) {
    return el !== array[index+1];
}

  
  removeDuplicatesTwo (testArray, function(result) {
      console.log(`Your duplicate free array is ${result}`);
      console.log(`Your original array is still the same. See for yourself! ${testArray}`);
  });


