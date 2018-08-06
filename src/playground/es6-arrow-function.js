//function square (x) {
 //   return x*x;
//};

//console.log(square(3));

//const squareArrow = (x) => {
//   return x*x;
//};

//const squareArrow = (x) => x*x;


//console.log(squareArrow(4));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

let firstName = '';

const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
};

getFirstName("Mike Smith");

const getFirstName2 = (fullName) => fullName.split(" ")[0];

console.log(getFirstName("Mike Smith"));

console.log(getFirstName2("Nuwan Goonewardena"))