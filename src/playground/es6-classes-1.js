
// Setup constructor to take name and age (default to 0)
// getDescription - Nuwan Goonewardena is 25 year(s) old.

class Person {
    constructor(name = 'Anonymous', age = 0) {
       this.name = name;
       this.age = age;
    }
    getGreeting() {
        return `My name is ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
       return description;
    }
}

class Traveler extends Person {
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` His hometown is ${this.homeLocation}`;
        }
        return greeting;
    }
}

// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. My name is Nuwan Goonewardena. I'm visitng from the Death Star.
// 2. Hi I am Anonymous.

const me = new Traveler('Nuwan Goonewardena', 25, 'The Death Star');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());