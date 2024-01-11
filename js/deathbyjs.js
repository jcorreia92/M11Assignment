// Part 4 - Death by JavaScript

// Unlike in strings.js, math.js, or dates.js, no code has been commented out.
// Each function verifies the input in case code is reused at later date.

/******************************************************************************/
// STEP 1

// This implementation assumes that punctuation, number symbols, and spaces are
// not included in the string (i.e. the string is a single word). The function
// only verifies that the input is a string.

function alphabetical(word) {

    // Verify that the input is a string
    if (!(typeof word === 'string')) {
        throw new Error('Input must be a string.')
    }

    // Split the string into array of characters and then sort
    let chars = word.split('')
    chars.sort() // alphabetical sort

    // Join the array elements into a new string without spaces or commas
    let sortedWord = chars.join('')

    // Return the sorted string
    return sortedWord
}

// Testing
console.log(alphabetical("webmaster"))     // Expected output: "abeemrstw"
console.log(alphabetical("hello"))         // Expected output: "ehllo"
console.log(alphabetical("javascript"))    // Expected output: "aacijprstv"
console.log(alphabetical("function"))      // Expected output: "cfinoontu"
console.log(alphabetical("testing"))       // Expected output: "eginstt"
 
/******************************************************************************/
// STEP 2

// This implementation assumes that the string parameter contains alphabetical
// letters and spaces only. The function only verifies that the parameter is
// a string.

function capitalize(sentence) {

    // Verify that the input is a string
    if (!(typeof sentence === 'string')) {
        throw new Error('Input must be a string.')
    }

    // Break the string up into an array of individual words
    let words = sentence.split(' ')

    // Capitalize the first letter in each word
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))

    // Join the array elements into a new string with proper spacing
    let capitalizedSentence = capitalizedWords.join(' ')

    // Return the new string
    return(capitalizedSentence)
}

// Testing
console.log(capitalize("the quick brown fox"))         // Expected output: "The Quick Brown Fox"
console.log(capitalize("hello world"))                 // Expected output: "Hello World"
console.log(capitalize("javascript is fun"))           // Expected output: "Javascript Is Fun"
console.log(capitalize("capitalize this sentence"))    // Expected output: "Capitalize This Sentence"
console.log(capitalize("first letter of each word"))   // Expected output: "First Letter Of Each Word"

/******************************************************************************/
// STEP 3

// This implementation only treats 'a', 'e', 'i', 'o', and 'u' as vowels

function vowels(str) {

    // Verify that the input is a string
    if (!(typeof str === 'string')) {
        throw new Error('Input must be a string.')
    }

    // Change the string to all lowercase; break the new string up into chars
    let chars = str.toLowerCase().split('')

    // Count the number of vowels by comparing them to lowercase ASCII values
    let numVowels = 0

    for (let i = 0; i < chars.length; i++) {
        let asciiValue = chars[i].charCodeAt(0)
        
        if (asciiValue == 97)       numVowels++ // 'a' ASCII val = 97
        else if (asciiValue == 101) numVowels++ // 'e' ASCII val = 101
        else if (asciiValue == 105) numVowels++ // 'i' ASCII val = 105
        else if (asciiValue == 111) numVowels++ // 'o' ASCII val = 111
        else if (asciiValue == 117) numVowels++ // 'u' ASCII val = 117
    }

    // Return the number of vowels
    return numVowels
}

// Testing
console.log(vowels("The quick brown fox"))  // Expected output: 5
console.log(vowels("Hello World"))          // Expected output: 3
console.log(vowels("JavaScript is fun"))    // Expected output: 5
console.log(vowels("aeiou"))                // Expected output: 5
console.log(vowels("bcdfg"))                // Expected output: 0
 
/******************************************************************************/
// STEP 4

// This implementation only generates string ids containing lowercase letters,
// uppercase letters, and numbers; one of these three categories is chosen
// at random for generating a char, at which point a random char from that
// category is generated. The function takes an integer as a parameter for the
// length of the id string.

// To uniformly sample each range of ASCII values, a random number is generated
// between 0 and 1 and then multiplied by the value (max - min + 1), where max
// and min refer to the maximum and minimum values of that ASCII range. Flooring
// the result and then adding the the minimum value guarantees a uniform 
// distribution between the min and max ASCII values within the given range.

function idGenerator(idLength) {

    // Verify that idLength is an integer
    if (!Number.isInteger(idLength)) {
        throw new Error('Input must be an integer.')
    }

    // Create an empty char array to store each randomly generated char
    let idChars = []

    // Populate the char array
    for (let i = 0; i < idLength; i++) {
        // Set char type
        let charType = Math.floor(Math.random() * 3) // Generates 0, 1, or 2

        // Generate lowercase letter if charType = 0 (ASCII range: 97-122)
        if (charType == 0) {
            let lowerCase = Math.floor(Math.random() * (122 - 97 + 1)) + 97
            idChars.push(String.fromCharCode(lowerCase)) // add char to id array
        }

        // Generate uppercase letter if charType = 1 (ASCII range: 65-90)
        else if (charType == 1) {
            let upperCase = Math.floor(Math.random() * (90 - 65 + 1)) + 65
            idChars.push(String.fromCharCode(upperCase)) // add char to id array
        }

        // Generate number if charType = 2, i.e. != 0 or 1 (ASCII range: 48-57)
        else {
            let number = Math.floor(Math.random() * (57 - 48 + 1)) + 48
            idChars.push(String.fromCharCode(number))
        }
    }
    // Join the char array elements and return the resulting string
    return idChars.join('')
}

// Testing
console.log(idGenerator(5))   // Expected output: A random string of length 5
console.log(idGenerator(8))   // Expected output: A random string of length 8
console.log(idGenerator(10))  // Expected output: A random string of length 10
console.log(idGenerator(15))  // Expected output: A random string of length 15
console.log(idGenerator(20))  // Expected output: A random string of length 20
 
/******************************************************************************/
// STEP 5

// This implementation returns either a single string or an array of strings
// depending on whether or not the list of countries has a tie among the longest
// names.

function longestCountryName(countryArray) {
    // Verify that countryArray is an array
    if (!Array.isArray(countryArray)) {
        throw new Error('Input must be an array.')
    }

    // Verify that countryArray is an array of strings
    if (!countryArray.every((item) => typeof item === 'string')) {
        throw new Error('All elements in the array must be strings.')
    }

    // Verify that countryArray is not empty
    if (countryArray.length === 0) {
        throw new Error('Input array must not be empty.')
    }

    // Iterate thru countryArray, tracking which element is the current longest
    let longest = [countryArray[0]] // default to first element as longest

    // Each element of countryArray is compared to the first element in the 
    // longest array.
    for (let i = 1; i < countryArray.length; i++) {

        // If the length of the current element of countryArray is equal to the 
        // first entry in the longest array, it's added to the array.
        if (countryArray[i].length == longest[0].length) {
            longest.push(countryArray[i])
        }

        // Otherwise, a new longest array is created with the longer country name
        // set as the first entry in the new array.
        else if (countryArray[i].length > longest[0].length) {
            longest = [countryArray[i]]
        }
    }

    // Return longest country name (string if only 1, array of strings if tied)
    if (longest.length == 1) return longest[0]
    else                     return longest.sort()
}

// Testing
console.log(longestCountryName(["Australia", "Germany", "United States of America"]))  // Expected output: "United States of America"
console.log(longestCountryName(["Spain", "France", "Italy"]))  // Expected output: "Spain", "Italy"
console.log(longestCountryName(["China", "India", "Brazil"]))  // Expected output: "Brazil"
console.log(longestCountryName(["Canada", "Mexico", "USA"]))   // Expected output: "Canada", "Mexico"
console.log(longestCountryName(["Japan", "Egypt", "Peru"]))    // Expected output: "Japan", "Egypt"