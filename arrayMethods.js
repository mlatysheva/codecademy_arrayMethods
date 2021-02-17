/* Write a function, reverseArray(), that takes in an array as an argument 
and returns a new array with the elements in the reverse order. */

function reverseArray(myArr) {
    let reversedArray = []
    for (let i = myArr.length-1; i>=0; i--) {
      reversedArray.push(myArr[i]);
    }
    return reversedArray;
  }
   
  // Test the function:
   
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];

  /* Write a function, greetAliens(), that takes in an array of strings 
  and uses a for loop to print a greeting with each string in the array. */

function greetAliens(myArr) {
    for (greeting of myArr) {
      console.log(`Oh powerful ${greeting}, we humans offer our unconditional surrender!`)
    }
  }

// Test the function:
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

/* Write a function, convertToBaby(), that takes in an array as an argument 
and, using a loop, returns a new array with each string in the array prepended 
with 'baby '. */

function convertToBaby(myArr) {
    let babyArr = [];
    for (animal of myArr) {
      babyArr.push('baby ' + animal);
    }
    return babyArr;
  }

// Test the function:  
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)); 

/* Write a function declineEverything() that takes in an array of strings and, 
using .forEach(), loops through each element in the array and calls politelyDecline() 
with each of them.
The .forEach() function should apply politelyDecline() directly; 
it should NOT merely receive an argument function that uses politelyDecline(). */

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

function declineEverything(myArr) {
  myArr.forEach(politelyDecline)
}

declineEverything(veggies);

function acceptEverything(myArr) {
  for (element of myArr) {
    console.log(`Ok, I guess I will eat some ${element}.`);
  }
}
acceptEverything(veggies);

/* Write a function, squareNums(), that takes in an array of numbers and, 
using .map(), returns an array with the square of each of the elements of that array. */

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

function squareNums(myArr) {
  return myArr.map(toSquare);
}
// Test the function:
console.log(squareNums(numbers));

/* Write a function shoutGreetings() that takes in an array of strings 
and returns a new array. This new array should contain all the strings 
from the argument array but with capitalized letters and an exclamation 
point appended to the end: 'heya' will become 'HEYA!' */

const shoutGreetings = myArr => {
    return myArr.map(element => `${element.toUpperCase()}!`);
  }

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

/* Write a function sortYears() that takes in an array of years, and, 
using the built-in .sort() method, returns that array with the years 
sorted in descending order. */

function sortYears(myArr) {
    return myArr.sort(function(a, b) {
      return b-a});
  }

// Test the function:
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

/* Write a function justCoolStuff() that takes in two arrays of strings, 
and, using the built-in .filter() method, returns an array with the items 
that are present in both arrays. */

function justCoolStuff (arr1, arr2) {
    return arr1.filter(element => {
      return arr2.includes(element);
    }); 
  }

// Test the function:
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

/* Write a function isTheDinnerVegan() that takes in an array of food objects 
in the format: 
{name: 'cabbage', source: 'plant' }
and returns a boolean value based on whether or not every item in the array 
has entirely plant-based origins. */

function isTheDinnerVegan (myArr) {
    return myArr.every(element => {
      return element.source === 'plant';
    })
  }

// Test the function:
const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false

/* Write a function sortSpeciesByTeeth() that takes in an array of species 
objects in the format:
{speciesName: 'shark', numTeeth: 50 }
and sorts the array in ascending order based on the average number of teeth 
that species possesses (numTeeth). */

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

function sortSpeciesByTeeth(myArr) {
  return myArr.sort((element1, element2) => {
    return element1.numTeeth - element2.numTeeth;
  })  
}

/* Write a function, findMyKeys(), that takes in an array of strings which 
may or may not contain 'keys'. If the keys are in the array, your function 
should return the index at which they can be found. If they’re not in 
the array, your function should return -1. */

const findMyKeys = myArr => {
    return myArr.findIndex(element => {
      return element === 'keys';
    })
  }
// Test the function:
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4

/* Write a function, dogFactory(). It should:

    - have 3 parameters: name, breed, and weight (in that order)
    - expect name and breed to be strings
    - expect weight to be a number
    - return an object
have each of those parameters as keys on the returned object returned with 
the values of the arguments that were passed in.

Add getters and setters for each of the three properties and change the property 
names to have an underscore prepended.

Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and 
.eatTooManyTreats() which should increment the weight property by 1. */

function dogFactory(name, breed, weight) {
    return {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name() {
        if (typeof name != 'string') {
          console.log('The name is not valid.');
        } else return this._name;
      },
      get breed() {
        if (typeof breed != 'string') {
          console.log('The breed is not valid.');
        } else return this._breed;
      },
      get weight() {
        if (typeof weight === 'number') {
          return this._weight;
        } else console.log('The weight is not a number.');
      },
      set name(newName) {
        if (typeof newName === 'string') {
          this._name = newName
        } else {
          console.log('Enter a valid name');
        }
      },
      set breed(newBreed) {
        if (typeof newBreed === 'string') {
          this._breed = newBreed
        } else {
          console.log('Enter a valid breed')
        }
      },
      set weight(newWeight) {
        if (typeof newWeight === 'number') {
          this._weight = newWeight
        } else {
          console.log('Enter a valid weight');
        }
      },
      bark() {
        return 'ruff! ruff!';
      },
      eatTooManyTreats() {
        return this._weight += 1;
      }
    }
  }
// Test the function:
const Antey = dogFactory('Antey', 'Ridgback', 8);
console.log(Antey.weight);
console.log(Antey._name);
Antey.weight = 12;
console.log(Antey.weight);
console.log(Antey.bark());
console.log(Antey.eatTooManyTreats());