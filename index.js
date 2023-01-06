// 1.

var ages = [3, 9, 23, 64, 2, 8, 28, 93];//1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
console.log(ages);

console.log(ages[ages.length - 1] - ages[0]);//1a. Subtract the value of the first element in the array from the value in the last element of the array 

ages.push(25);
console.log(ages[ages.length - 1] - ages[0]); //1b.	Add a new age to your array and repeat the step above to ensure it is dynamic.

function findAverage(data){
    let total = 0;
    for (i = 0; i < data.length; i++){
        total += data[i];    
    }
let avg = total / data.length;
return Math.round(avg);    
}
let averageAge = findAverage(ages);
console.log(findAverage(ages));//1c. Use a loop to iterate through the array and calculate the average age. 
/////////////////////////////


// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let namesArray = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
//a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
  function averageNumberOfLetters(input){
    let totalLetters = 0;
    for (let i = 0; i < namesArray.length; i++){
        totalLetters += input[i].length;
    }
    console.log(totalLetters);
    return (totalLetters / input.length); 
}
console.log(averageNumberOfLetters(namesArray)); 
//b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
 let concatNames = " ";
 for (let i = 0; i < namesArray.length; i++){
    concatNames += namesArray[i];
    if (i < namesArray.length - 1) {
        concatNames += " ";
    }
 }
console.log(concatNames); 
//////////////////////////////////

//3.	How do you access the last element of any array?
 //The .length property will show you total elements, and you would -1 from that number to find its index. arrayName.length – 1

//4.	How do you access the first element of any array?
//The first element of an array will always be at index 0.



// 5.Create new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [];

for (let i = 0; i < namesArray.length; i++){
    let name = namesArray[i].length; 
    console.log(name);
    nameLengths.push(name);
} 
console.log(nameLengths);

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

function findSum(data){
    let total = 0;
    for (i = 0; i < data.length; i++){
        total += data[i];    
    }
    return total;
}
console.log(findSum(nameLengths)); 

// 7.

let result = " ";
let myFunction = (word, n) => {
        for (let i = 0; i < n; i++){
            result += word;
        }
        return result;
    }
    console.log(myFunction("Hello", 3)); // week 4 arrow functions vid- https://youtu.be/_a9CEBxDP2Q

// 8. 

let fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName("Zoe", "Rothchild"));

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

var numberArray = [1, 5, 6, 9, 100, 50];
var sum = 0;

numberArray.forEach(x => {
    sum += x; //https://www.geeksforgeeks.org/how-to-find-the-sum-of-all-elements-of-a-given-array-in-javascript/
});
console.log(sum); //just checking

if (sum > 100){
    console.log(true);
} else {
    console.log(false);
}

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.


function averageOfNumbers(data){
    let total = 0;
    for (i = 0; i < numberArray.length; i++){
        total += data[i];
    }
    let avg = total/numberArray.length;
    return Math.round(avg);
}
let averageNumber1 = averageOfNumbers(numberArray);
console.log(averageNumber1);


// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array. 

let secondNumberArray = [636, 4, 721, 20]

function secondAverage(data){
    let total = 0;
    for (i=0; i < secondNumberArray.length; i++){
        total += data[i];
    }
    let avg = total / secondNumberArray.length;
    return Math.round(avg);
}
let averageNumber2 = secondAverage(secondNumberArray);
console.log(averageNumber2); //get average of second array

if (averageNumber1 > averageNumber2){
    console.log(true);
} else {
    console.log(false);
} 

// 12	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside === true && moneyInPocket > 10.50){
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 11.00));
console.log(willBuyDrink(false, 11.05)); //just checking

// 13   Create a function of your own that solves a problem. 

function doesJoshuaGetCandy(behaviourAtSchool){
    if (behaviourAtSchool === "Amazing"){
        console.log("Awesome job today! Pick out a candy.");
    } else if (behaviourAtSchool === "Alright"){
        console.log("You can have a piece of candy, but we have some things to work on, right?");
    } else {
        (behaviourAtSchool === "Poor");
        console.log("I know it's sad that you can't have candy today, but we can always try again tomorrow!");
    }
}
    

doesJoshuaGetCandy("Amazing");
doesJoshuaGetCandy("Poor");
/* This function checks to see if my son Joshua behaved at school or not. 
I totally use bribery, so if he was a good student and didn't get sent home, he gets a piece of candy, lol. */