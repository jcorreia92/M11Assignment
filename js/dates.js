// Part 3 - Date and Date Functions

// Each step has been written to function independently
// All code and accompanying comments have been commented out

// While each function is only called within its own step, parameters are still
// validated in case code gets used later

/******************************************************************************/
// STEP 1

// To find the number of days in a month, we create a function that takes params 
// for a given month and year (in case of leap years for Feb) to find the last 
// day of that month (i.e. the number of days in that month)

// function daysInMonth(year, month) {
    
//     // Verify that the paramaters are valid (integers, month between 0-11)
//     if (!Number.isInteger(year) || !Number.isInteger(month)) {
//         throw new Error('Both year and month must be integer values.')
//     }

//     if (month < 0 || month > 11) {
//         throw new Error('The month must be a 0-indexed value between 0 and 11')
//     }

//     // Create a new Date object for the first day of the next month
//     let date = new Date(year, month + 1, 1)

//     // Set the date back one day
//     date.setDate(0)

//     // Return the current date
//     return date.getDate();
// }

// // Testing (note to self: months are 0-indexed)
// console.log(`Days in February 2024: ${daysInMonth(2024, 1)}`)  // Should be 29 b/c leap year
// console.log(`Days in February 2023: ${daysInMonth(2023, 1)}`)  // Should be 28
// console.log(`Days in August 1990: ${daysInMonth(1990, 7)}`)    // Should be 31
// console.log(`Days in November 2000: ${daysInMonth(2000, 10)}`) // Should be 30
// console.log(`Days in March 2015: ${daysInMonth(2015, 2)}`)     // Should be 31


/******************************************************************************/
// STEP 2

// To get the name of a month from a Date object (without using a manually
// written switch statement to return the names of each month), we create a
// function that takes a given Date object and parses the name of the month
// from the toLocaleString() method by passing in an options object for month

// function nameOfMonth(date) {
    
//     // Verify that date is a Date object
//     if (!(date instanceof Date)) {
//         throw new Error('Argument must be a Date object')
//     }

//     // Extract the month from toLocaleString() using an options object
//     return date.toLocaleString(undefined, { month: 'long' })
// }

// // Testing
// console.log(nameOfMonth(new Date(2022, 0, 1)))  // Should log "January"
// console.log(nameOfMonth(new Date(2022, 4, 1)))  // Should log "May"
// console.log(nameOfMonth(new Date(2022, 1, 1)))  // Should log "February"
// console.log(nameOfMonth(new Date(2022, 3, 1)))  // Should log "April"
// console.log(nameOfMonth(new Date(2022, 2, 1)))  // Should log "March"


/******************************************************************************/
// STEP 3

// To determine whether a given date is a weekday, we use getDay() which is
// 0-indexed from 0 (Sunday) to 6 (Saturday). If the day is 0 or 6, it must
// be a weekend.

// function isWeekend(date) {
    
//     // Verify that date is a Date object
//     if (!(date instanceof Date)) {
//         throw new Error('Argument must be a Date object')
//     }

//     // Get the day of the week (0-6)
//     let dayOfWeek = date.getDay()

//     // Return the result of comparing dayOfWeek to 0 or 6
//     return dayOfWeek == 0 || dayOfWeek == 6
// }

// // Testing
// console.log(isWeekend(new Date(2022, 0, 15)))  // Should log true (January 15, 2022 is a Saturday)
// console.log(isWeekend(new Date(2022, 2, 9)))   // Should log false (March 9, 2022 is a Wednesday)
// console.log(isWeekend(new Date(2022, 4, 22)))  // Should log true (May 22, 2022 is a Sunday)
// console.log(isWeekend(new Date(2022, 7, 1)))   // Should log false (August 1, 2022 is a Monday)
// console.log(isWeekend(new Date(2022, 11, 25))) // Should log true (December 25, 2022 is a Sunday)

/******************************************************************************/
// STEP 4

// To determine yesterday's day of the week, we create a Date object for today
// and then create a second Date object starting at today and then readjusted
// to set the date back one day. We then can find the name for that day of the
// week using the same process as Step 2 but with an options object for weekday

// // Create a Date object for today
// let today = new Date()

// // Create a Date object for yesterday with respect to today
// let yesterday = new Date(today)
// yesterday.setDate(today.getDate() - 1)

// // Display yesterday's day of the week in the console
// console.log(`Yesterday was ${yesterday.toLocaleString(undefined, { weekday: 'long' })}.`)

/******************************************************************************/
// STEP 5

// We can use a similar approach to Steps 2 and 4 using toLocaleString() with
// an options object passed in for weekday set to long. We then use charAt()
// to find the first letter in the name for that day of the week.

// // Create a Date object for today
// let today = new Date()

// // Extract the string representation of the weekday using toLocaleString()
// let dayOfWeek = today.toLocaleString(undefined, { weekday: 'long' })

// // Extract the first character in dayOfWeek and display it in the console
// console.log(dayOfWeek.charAt(0))