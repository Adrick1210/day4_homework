//////////////////////
// Section 1
//////////////////////
// 1.

// The difference between a parameter and a argument is a parameter is a variable that is
// defined to represent the argument(s) in the function while the argument is the actual
// data set.

// 2.

// The difference between a console log and the return is that console log only logs the
// value we are asking for and isn't generally useful, where as return takes the value
// we are creating inside of a function that we can use in our main programs.

//////////////////////
// Section 2
//////////////////////

// // define the function
// const checkPalindrome = (str) => {
//     // I want to set the string to lower case and replace
//     // unnecessary characters of the string
//     str = str.toLowerCase().replace(/\W/g, '');
//     // loop over every letter in the string
//   for (let i = 0; i < str.length; i += 1) {
//     // A conditional that determines a false palindrome
//     if (str[i] !== str[str.length - 1 - i]) {
//       return "Is not a Palindrome";
//     }
//   }
//   // return true if it is a palindrome
//   return "Is a Palindrome";
// };

// let str1 = "RaceCar" //true
// let str2 = "Grandpa" //false
// let str3 = "Anna" //true
// let str4 = "MoPaR" //false
// let str5 = "A man, a plan, a canal. Panama" //false?
// // actually is true after replacing the characters we don't need
// let str6 = "Radar" //true

// console.log(checkPalindrome(str1));
// console.log(checkPalindrome(str2));
// console.log(checkPalindrome(str3));
// console.log(checkPalindrome(str4));
// console.log(checkPalindrome(str5));
// console.log(checkPalindrome(str6));

//////////////////////
// Section 3
//////////////////////

// // Define the function sumArray
// function sumArray(array){
//     // Define the variable sum starting at a value 0;
//     let sum = 0;
//     // Loop over ever item in the array and add it to the sum variable
//     for (let i = 0; i < array.length; i += 1) {
//         sum += array[i]
//     }
//     // Can console log from inside this function || can console log outside
//     console.log(sum);
//     // Return the summed value of sum after every item is added to the sum variable
//     return sum;
// }

// // This will console log sum twice as there's two calls to console log
// console.log(sumArray([1,3,5,6,9])) // 24
// // This will console log 56 once as the console log call is inside of our function
// sumArray([10, 2, 35, -3, 12]) // 56
// sumArray([-2,-12,14, 22, 1]) // 23

//////////////////////
// Section 4
//////////////////////

// // Define a function that checks for the prime numbers
// function checkPrime(num) {
//   // numbers less than or equal to 1 cannot be prime
//   if (num <= 1) return false;
//   // loop over every number starting from 2
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     // if num is dividable by i(2) and the remainder is 0, we want to return false;
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   // if prime, it will print true
//   return true;
// }
// // console.log(checkPrime(12))

// // Define the function that will print my prime numbers
// function printPrime(num) {
//    // loop over every value up until the limit we set
//   for (let i = 2; i <= num; i++) {
//     // conditional for true if it is a prime number (our function call checks here)
//     if (checkPrime(i)) {
//         // I log the prime number value to the console
//       console.log(`${i}`);
//     }
//   }
// }
// printPrime(20);

//////////////////////
// Section 5
//////////////////////