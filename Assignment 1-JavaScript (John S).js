// Collect first and last name, then assign to fullname, ice cream
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullname = firstName + " " + lastName;

// Replace 'o' with 'a' in fullname
fullname = fullname.replace(/o/g, 'a');

// Output the altered fullname
console.log(fullname);

// Collect two numbers, one above 10 and one below 10
var numAboveTen = parseInt(prompt("Enter a number larger than 10:"));
var numBelowTen = parseInt(prompt("Enter a number smaller than 10:"));

// Calculate and output the remainder
var remainder = numAboveTen % numBelowTen;
console.log("The remainder is: " + remainder);