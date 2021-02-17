/* Write a function subLength() that takes 2 parameters, a string and a single 
character. The function should search the string for the two occurrences of 
the character and return the length between them including the 2 characters. 
If there are less than 2 or more than 2 occurrences of the character 
the function should return 0. */

function findChar (myString, myChar) {
    return myString.indexOf(myChar);
}

function subLength(myString, myChar) {
    let myArr = Array.from(myString);
    let counter = 0;
    myArr.forEach(char => {
        if(char === myChar) {
            counter +=1;
        }
    });
    if (counter !== 2) {
        return 0;
    }
    
    let firstIndex = findChar(myString, myChar);
    let subString = myString.substring(firstIndex+1, myString.length);
    let secondIndex = findChar(subString, myChar) + firstIndex + 1;
    return secondIndex - firstIndex + 1;
}

console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0