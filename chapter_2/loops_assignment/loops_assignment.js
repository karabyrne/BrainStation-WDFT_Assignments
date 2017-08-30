//Array of people, there is no need to change this

const firstArray = [5,8,2,1,5,7,3,4,5,8,1,2,4,8,3,1,4,5];

const PERSONDATA = [{
    name:"Michael",
    rank:4,
    age:19,
    score: 66
},{
    name:"Emily",
    rank:7,
    age:22,
    score: 37
},{
    name:"Sam",
    rank:2,
    age:23,
    score:80
},{
    name:"William",
    rank:10,
    age:26,
    score:11
},{
    name:"James",
    rank:8,
    age:26,
    score:28
},{
    name:"Mia",
    rank:5,
    age:28,
    score:54
},{
    name:"Isabella",
    rank:1,
    age:31,
    score:100
},{
    name:"Alex",
    rank:3,
    age:34,
    score:75
},{
    name:"Olivia",
    rank:6,
    age:36,
    score:42
},{
    name:"Geoff",
    rank:9,
    age:41,
    score:19
}]

// search("James",PERSONDATA)  // Should log that James was found at position #5
// search("Eric",PERSONDATA)   // Should log that Eric was not found.

// console.log(filter(PERSONDATA, 50)) // Should display an array of everyone 
// with a score greater than 50
/* Ex: 
[ { name: 'Alex', rank: 3, age: 34, score: 75 },
  { name: 'Isabella', rank: 1, age: 31, score: 100 },
  { name: 'Mia', rank: 5, age: 28, score: 54 },
  { name: 'Michael', rank: 4, age: 19, score: 66 },
  { name: 'Sam', rank: 2, age: 23, score: 80 } ]
*/

/*
    Write your functions below.
*/

printNumbers(firstArray);

largestNumber(firstArray);

printNum(5);

printTriangle(5);

search("Olivia", PERSONDATA);

console.log(filter(PERSONDATA, 50));

// Exercise 1

// Create a loop that goes through a random array of numbers and logs only the 
// even ones. You can use the arrays given below or create some of your own to test 
// your loop.

function printNumbers(numbers){
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0){
            console.log(numbers[i]);
        }
    }
}

// // Exercise 2

// Create a loop that goes through an array of numbers and returns the value of the 
// largest number in the array. You can use the example arrays from Exercise 1 to test 
// your loop.


function largestNumber(num){
    let largest = 0;
    for(let i = 0; i < num.length; i++) {
       if(num[i] > largest){
           largest = num[i]
       }
    }
    console.log(largest);
};

// Exercise 3

// Create a function that takes in an integer and prints all numbers from 1 to 
// the given integer the number of times equal to the current loop index 
// (ie. 1, 2, 2, 3, 3, 3, ...).

function printNum(num){
    let output = "";
    for(let i = 1; i <= num; i++){ 
        //
        for(let e = 0; e < i; e++){
            
            if(i !== 1){
                output += ", "
            }
            output += String(i);
        }

    }
    console.log(output);
}

// Exercise 4

// Alter your answer to Exercise 3 to log the numbers in the form of a triangle.

function printTriangle(num){
    let output = "";
    for(let i = 1; i <= num; i++){ 
        for(let e = 0; e < i; e++){
            output += String(i);
        }
        console.log(output);    
    }
};

// Exercise 5

// Create a function that can search through the given array and find a person by a given name.
// If the person with a matching name is found, the function should log the name and their position 
// in the array. If they are not found, the function should log that this name could not be found.

function search(name, data){
    let nameIndex;
    for(var i = 0; i < PERSONDATA.length; i++){        
        if(PERSONDATA[i].name === name){
            nameIndex = name;
            break;
            } 
        }   
        if(nameIndex){
            console.log(nameIndex + " was found at position #" + (i + 1));
        } else {
            console.log(name + " was not found.");
    }
};

// Exercise 6

function filter(data, num){
    let highScores = [];
    for(let i = 0; i < PERSONDATA.length; i++){
        if(PERSONDATA[i].score > num){
            highScores.push(PERSONDATA[i]);
        }
    }
    return highScores; 
};