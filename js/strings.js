// Part 1 - Strings and String Manipulation

// Each step has been written to function independently
// All code and accompanying comments have been commented out

/******************************************************************************/
// STEP 1

/* N.B. This implementation doesn't require that the user give a single name */

// // Prompt user for their name
// let userName = prompt('Please enter your name:')

// // Remove any spaces based on user input (e.g. user entered first and last name)
// userName = userName.replace(/\s+/g, '')

// // Find the number of characters in their name
// let length = userName.length
// alert(`The length of your name is ${length} characters.`)


/******************************************************************************/
// STEP 2

/* Implementation limitations:
* 1. Does not check if user enters a name with spaces
* 2. Does not explain to user what bounds the number should fall between
* 3. Assumes the user is giving a number based on 1-indexing
*/

// // Prompt user for their name
// let userName = prompt('Please enter your name:')

// // Prompt user for a numeric value
// let num = parseInt(prompt('Please enter a numeric value:'))

// // Check that num is valid (i.e. is a number and between 1 and name length)
// while (isNaN(num) || num < 1 || num > userName.length) {
//     num = parseInt(prompt('Invalid input. Please enter a numeric value:'))
// }

// // Adjust numeric value for 0-indexing and find the corresponding character
// let char = userName.charAt(num - 1)

// // Determine the correct suffix for ordinal of numeric value
// function ordinalSuffix(num) {
//     if (num == 1)      return 'st'
//     else if (num == 2) return 'nd'
//     else if (num == 3) return 'rd'
//     else               return 'th'
// }

// let suffix = ordinalSuffix(num)
// alert(`The ${num}${suffix} character in your name is ${char}.`)


/******************************************************************************/
// STEP 3

// // Prompt the user for their first and last names
// let firstName = prompt('Please enter your first name:')
// let lastName = prompt('Please enter your last name:')

// // Concatenate the first and last names with a space in between
// let fullName = firstName.concat(' ', lastName)

// // Display the full name by concatenating the full name to the alert message
// alert('Your name is: ' + fullName)


/******************************************************************************/
// STEP 4

/* N.B. With 0-based indexing, the result should be index 16 */

// // Define the sentence
// let sentence = 'The quick brown fox jumps over the lazy dog'

// // Find the index of the word 'fox'
// let index = sentence.indexOf('fox')

// // Display the index for the word 'fox'
// alert(`In the sentence, the word "fox" begins at index ${index}.`)

/******************************************************************************/
// STEP 5

/* N.B. With 0-based indexing, the result should be index 40 */

// // Define the sentence
// let sentence = 'The quick brown fox jumps over the lazy fox'

// // Find the last index of the word 'fox'
// let index = sentence.lastIndexOf('fox')

// // Display the last index for the word 'fox'
// alert(`In the sentence, the last instance of 'fox' occurs at index ${index}.`)


/******************************************************************************/
// STEP 6

// // Define the sentence
// let sentence = 'The quick brown fox jumps over the lazy dog'

// // Prompt user for full name
// let fullName = prompt('Please enter your first and last name:')

// // Replace 'the lazy dog' with the user's full name
// sentence = sentence.replace('the lazy dog', fullName)

// // Display the new sentence
// alert(sentence)


/******************************************************************************/
// STEP 7

// // Define the sentence
// let sentence = 'The quick brown fox jumps over the lazy dog'

// // Prompt user for a word
// let word = prompt('Please enter a word you\'d like to search:')

// // Search for all instances of the exact word (not substring) in the sentence
// let exactMatch = new RegExp('\\b'.concat(word, '\\b'))
// let matches = sentence.match(exactMatch, 'g')

// // Count the number of matches (or set to 0 if null)
// let count = matches ? matches.length : 0

// // Find all indices of the word (if it could be found)
// if (matches) {
//     let indices = [] // array of indices that the word occurs at
//     let currentIndex = sentence.indexOf(word) // first instance of word

//     // loops until indexOf() returns -1
//     while (currentIndex != -1) {
//         // Add the index of that instance to array
//         indices.push(currentIndex)

//         // Search for next index by only searching the remainder of the sentence
//         currentIndex = sentence.indexOf(word, currentIndex + 1)
//     }

//     // Display the result
//     if (count == 1) alert(`The word '${word}' occurred ${count} time at index ${sentence.indexOf(word)}.`)
//     else            alert(`The word '${word}' occurred ${count} times at indices ${indices.join(', ')}.`)
// }

// else alert(`The word '${word}' could not be found in the sentence.`)


/******************************************************************************/
// STEP 8

// // Define the sentence
// let old_string = 'The quick brown fox jumps over the lazy dog'

// // Extract the substring (it is assumed we know or have calculated the indices)
// let new_string = old_string.slice(31, 43)

// // Convert the new string to uppercase and display the result
// alert(new_string.toUpperCase())


/******************************************************************************/
// STEP 9

// // Define the sentence
// let sentence = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          '

// // Trim the whitespace and convert the result to lowercase
// let trimmedLowerCase = sentence.trim().toLowerCase()

// // Display the result compared to the original
// alert(`Original: '${sentence}'\nEdited: '${trimmedLowerCase}'`)


/******************************************************************************/
// STEP 10

// // Define the sentence
// let sentence = 'the quick brown fox jumps over the lazy dog'

// // Get the character at index 0 and capitalize it
// let capitalLetter = sentence.charAt(0).toUpperCase()

// // Concatenate the rest of the sentence with the capitalized letter
// let edited = capitalLetter.concat(sentence.slice(1))

// // Display the original and edited sentences
// alert(`Original: '${sentence}'\nEdited: '${edited}'`)