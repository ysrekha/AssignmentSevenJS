
//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

const ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(`1. Created the ages array with values : ${ages}`)

/*  a.) Programmatically subtract the value of the first element in the array from the value in the last element of the array.
    Do not use numbers to reference the last element, find it programmatically.
    ages[7] - ages[0] is not allowed!
 */

var lastMinusFirst = ages[ages.length - 1] - ages[0];
console.log(`a. Now the last minus first age is : ${lastMinusFirst}`);

// b.) Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(40);
lastMinusFirst = ages[ages.length - 1] - ages[0];
console.log(`b. Now the new last minus first age is : ${lastMinusFirst}`);

// c.) Use a loop to iterate through the array and calculate the average age.

let sum = 0;
for (i of ages) {
    sum += i;
}
console.log(`c. the average age is: ${sum / ages.length}`);


//2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(`2. Created an array called names with values : ${names}`)

// a.) Use a loop to iterate through the array and calculate the average number of letters per name.

let sumOfLetters = 0;
for (let i of names) {
    sumOfLetters += i.length;
}
console.log(`a. The average number of letters per name is : ${sumOfLetters / names.length}`);


// b.)Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let concatNames = [];
for (let name of names) {
    concatNames += (name + ' ');
}
console.log(`b. Heres the concatenated list of names separated by spaces: ${concatNames}`);


//3. How do you access the last element of any array?

console.log(`3. The last element of array is : ${names[names.length - 1]}`);



//4. How do you access the first element of any array?

console.log(`4. The first element of array is : ${names[0]}`);

/*
  5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    For example:
    
    let names = ["Kelly", "Sam", "Kate"];    // starting with this array
    let nameLengths = [5, 3, 4];             // create a new array
  */

let nameLengths = [];
for (let name of names) {
    nameLengths = nameLengths.concat(name.length);
}
console.log(`5. Here is the nameLengths array: ` + nameLengths);


// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let sumOfLength = 0;
for (let nameLength of nameLengths) {
    sumOfLength += nameLength;
}
console.log(`6. The sum of nameLengths array is : ${sumOfLength}`);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word 
// concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').


let concatWordNTimes = (word, n) => {
    let newWord = ''
    for (let i = 0; i < n; i++) {
        newWord += word;
    }
    return newWord;
}
console.log(`7. Heres the word concatenated to itself n number of times : ${concatWordNTimes('Hello', 3)}`);

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space. 


let fullName = (firstName, lastName) => (firstName + ' ' + lastName);
console.log(`8. Heres the Full Name : ${fullName('MinHo', 'Lee')}`);

//9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let arrayOfNumbers = [2,5,60];
//

//let arrayOfNumbers = [30, 25, 10, 40];
let sumOfNumbers = 0;
let sumOfArrayNum = (NumbersArray) => {
    for (let i of NumbersArray) {
        sumOfNumbers += i;
    }
    console.log(`sum is: ${sumOfNumbers}`);
    if (sumOfNumbers > 100)
        return true;
    else
        return false;
}
console.log(`9. Sum of numbers is greater than 100? ${sumOfArrayNum(arrayOfNumbers)}`);


// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.


let newArrayOfNumbers = [30, 25, 10, 35];
let avgOfArrayNum = (newNumbersArray) => {
    const sumOfNewArray = newArrayOfNumbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    return (sumOfNewArray / newNumbersArray.length);
}
console.log(`10. Average of array numbers is:  ${avgOfArrayNum(newArrayOfNumbers)}`);


//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let arrayOneArg = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
let arrayTwoArg = [11, 12, 13, 14, 15, 15, 16, 17, 18, 19];

let avgOfFirstGreaterThanSecond = (arrayOneArg, arrayTwoArg) => {
    // Arrow function to calculate the average of first array.
    let avgOfFirstArray = (newArrayOne) => {
        const sumOfFirstArray = newArrayOne.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        return (sumOfFirstArray / newArrayOne.length);
    }
    // Arrow function to calculate the average of second array.
    let avgOfSecondArray = (newArrayTwo) => {
        const sumOfSecondArray = newArrayTwo.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        return (sumOfSecondArray / newArrayTwo.length);
    }
    // checking if average of first array is > second array.
    if (avgOfFirstArray(arrayOneArg) > avgOfSecondArray(arrayTwoArg))
        return true;
    else
        return false;
}
console.log(`11. The average of the elements in the first array is greater than the average of the elements in the second array : ${avgOfFirstGreaterThanSecond(arrayOneArg, arrayTwoArg)}`);


//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside && (moneyInPocket > 10.50))
        return true;
    else
        return false;
}
console.log(`12. Is it hot outside and have money in pocket > 10.50: ${willBuyDrink(true, 12)}`);

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// I want to buy a dog if it doesnot shed and it is young. So I coded it in the following function to see if it meets my requirements.

let BuyADog = (DoesnotShed, IsYoung) => {
    if (DoesnotShed && IsYoung)
        return true;
    else
        return false;
}
if (BuyADog(true, false) === true)
    console.log('13. Please buy this dog');
else
    console.log('13. Donot buy this dog');
