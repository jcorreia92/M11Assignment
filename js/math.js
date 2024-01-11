// Part 2 - Math and Math Functions

// Each step has been written to function independently
// All code and accompanying comments have been commented out

/******************************************************************************/
// STEP 1

// // Prompt user for a number (of any type)
// let num = Number(prompt('Please enter a number:'))

// // Verify that the number is valid; prompt the user for a new number if not
// while (isNaN(num)) num = Number(prompt('Invalid input. Please enter a number:'))

// // Apply the absolute value function and display the result
// console.log(`Original: ${num}\nAbsolute Value: ${Math.abs(num)}`)

/******************************************************************************/
// STEP 2

// // Prompt user for a floating point number
// let num = Number(prompt('Please enter a floating point number:'))

// // Verify that the number is valid (i.e. is a number and not an integer)
// while (isNaN(num) || Number.isInteger(num)) {
//     num = Number(prompt('Invalid input. Please enter a floating point number:'))
// }

// // Round the number up and display the result
// console.log(`Original: ${num}\nRounded Up: ${Math.ceil(num)}`)

/******************************************************************************/
// STEP 3

// // Prompt user for a floating point number
// let num = Number(prompt('Please enter a floating point number:'))

// // Verify that the number is valid (i.e. is a number and not an integer)
// while (isNaN(num) || Number.isInteger(num)) {
//     num = Number(prompt('Invalid input. Please enter a floating point number:'))
// }

// // Round the number down and display the result
// console.log(`Original: ${num}\nRounded Down: ${Math.floor(num)}`)

/******************************************************************************/
// STEP 4
/* Unlike earlier, user input is assumed to be valid and correctly formatted */

// // Prompt user for a list of numbers as comma-separated values
// let numCSV = prompt('Please enter 5 numbers as comma-separated values without spaces (e.g. 1,2,3,4,5):')

// // Convert CSVs into array of strings; convert that array into array of numbers
// let nums = numCSV.split(',').map(Number)

// // Sort the array of numbers from smallest to largest
// nums.sort(function(a, b) {
//     return a - b
// })

// // Access the first and last indices in the sorted array and display the result
// console.log(`Smallest: ${nums[0]}\nLargest: ${nums[nums.length - 1]}`)

/******************************************************************************/
// STEP 5

// // Prompt user for a number (of any type)
// let num = Number(prompt('Please enter a number:'))

// // Verify that the input is valid; prompt the user for a new number if not
// while (isNaN(num)) num = Number(prompt('Invalid input. Please enter a number:'))

// // Calculate the square root (to 5 decimal places) and display the result
// console.log(`Original: ${num}\nSquare Root: ${Math.sqrt(num).toFixed(5)}`)