var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'John';
console.log('nameLet',nameLet);

const nameConst = 'Frank';
console.log('nameConst',nameConst)


// Block scoping

const fullName = 'Nuwan Goonewardena';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);