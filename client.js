/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */


// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

let hobbies = [`hockey`, `basketball`, `coding`];

for (let hobby of hobbies){
     console.log(hobby);
}

for (let i = 0; i < hobbies.length; i ++){
     console.log(`hobby`, hobbies[i]);
}

console.log(hobbies.length);

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */


// Example output
// green, red, teal, orange, teal
// Teal was found 2 times
let colors = [`blue`, `green`, `red`, `purple`, `teal`, `teal`, `teal`]
let tealCount = 0

for (let color of colors){
     if(color===`teal`){
          tealCount++;
     }
     else{}
}
console.log(`i am counting teals`, tealCount);

/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2

let numbers = [34, 57, 129, 75, 9, 82]

let oddNumbers = []
let evenNumbers = []

for(let number of numbers){
     if(number%2===0){
          evenNumbers.push(number);
     }
     else{
          oddNumbers.push(number);
     }
}
console.log(`evens`, evenNumbers);
console.log(`odds`, oddNumbers);

/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */


// Example output
// true, false, true, true
// Toggled false, true, false, false

let booleans = [true, false, true, false, false, true, true]
let toggled = []

// for(let boolean of booleans){
//      if(boolean===true){
//           toggled.push(false)
//      }
//      else{
//           toggled.push(true)
//      }
//      console.log(`booleans`, booleans);
//      console.log(toggled);
// }

for(let i=0; i<booleans.length; i++){
     if(booleans[i]===true){
          toggled.push(false)
     }
     else{
          toggled.push(true)
     }
}
console.log(`booleans`, booleans);
console.log(`toggled`, toggled);


/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8

let zeros = [6, 3, 7, 0, 8, 0, 0, 0, 0]

console.log(zeros);
while(zeros.length>0 && zeros[zeros.length-1]===0){
//for as long as there are numbers in the array
//and if the number at the end of the array is 0
     zeros.pop()
//pop it
}
console.log(zeros);

/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */


// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3

let largish = [2, 2, 7, 4, 1, 7, 12, -7, 8, 6, 7, 19, 12]
let high = largish.length
let low = largish.length

for(let i of largish){
     if(i > high){
          high = i;
     }
     if(i < low){
          low = i;
     }
}

//if you use an actual value for the high and low variables, 
//then this doesn't work if there aren't negative numbers; it just gives 0
//not sure how to fix it

console.log(`low`, low);
console.log(`high`, high)

let highWhile = 0
let lowWhile = 0
