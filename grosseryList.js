/* Write a function groceries() that takes an array of object literals of 
grocery items. The function should return a string with each item separated 
by a comma except the last two items should be separated by the word 'and'. 
Make sure spaces (' ') are inserted where they are appropriate. */

function groceries(myArr) {
    let length = myArr.length;
    let items = [];
    myArr.forEach(item => {
        items.push(item.item);
    })
    let resultString = '';
    console.log(items);
    if (length === 1) {
        return items.toString();
    } else if (length === 2) {
        return items[0] + ' and ' + items[1];
    } else {
        for (let i = 0; i < items.length - 2; i++) {
            resultString += items[i] + ', ';
        }
        resultString += items[length-2] + ' and ' + items[length-1];
        return resultString;
    }
}

console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
// returns 'Bread and Butter'
 
console.log(groceries( [{item: 'Cheese Balls'}] ));
// returns 'Cheese Balls'