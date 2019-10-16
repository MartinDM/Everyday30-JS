console.log(5);

// JS tries to be smart and coerces the str to an int
// Treats everything as a number
console.log('5' - 5); // 0

// Treats everything as a string
console.log(5 + '5'); // 55

const name = 'Alex'
console.log(typeof name)

const pass = 1;
if (pass) {
  console.log('Passed!')
}

/* 
ID
token
email */

// login dets from db, may be empty
const loginDetails = [];
const loginId = loginDetails[0];
if (loginDetails) {
  console.log('Allow login')
  console.log(loginDetails)
} else {
  console.log('Auth failed')
  console.log('It was empty!')
}