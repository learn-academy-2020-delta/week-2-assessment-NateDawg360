// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

//a function that takes a number and returns whether a number is divisbleby 3

//consider else/if statement...


let multipleOfThree = (number) =>{
  if (number % 3 === 0 ) {
    return `${number} is divisble by three`;
  } else {
    return `${number} is not divisble by three`;
  }
}
// console.log(multipleOfThree(num2));


// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
//create a function that will loop through given array "randomNouns"

//push into new array
  // let newArray = []

  // const capitalizer = (randomNouns) =>{ // }
//think string

function capitalizer(array){
    const newArray = array.map((item)=>{
        return item.charAt(0).toLocaleUpperCase() + item.slice(1)
    })
    return newArray
}

// console.log(capitalizer(randomNouns))


//expected returned array should have every word in array with first letter caps

//try .map function vs for loop

// const titleCase(str) => {
  //.split array
//    var splitStr = str.toLowerCase().split(' ');
//    for (var i = 0; i < splitStr.length; i++) {
//        // Assign it back to the array
//        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//    }
//    // Directly return the joined string
//    return splitStr.join(' ');
// }


// console.log(randomNouns.indexOf(0));




// const newArray = randomNouns.split()
//
// console.log(newArray(randomNouns));
// const capitalizer = randomNouns.map(index =>{
//   let firstIndexCaps = randomNouns.indexOf(0) {
//     return
//   }
//
// })


// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

//first filter out NUMBERS
const onlyNums = (array) => {
    let newArr = array.filter(value => {
        if (typeof value === "number") {
            return value
        }
    })

    //using sort method and changing it to recognize numbers
    return newArr.sort((a, b) => a - b)
}
// console.log(onlyNums(mixedDataArray))

// ***ignore below***

// var numbers = mixedDataArray.filter(onlyNums);
//
//   function onlyNums(value) {
//       if(typeof (value) === "numbers") {
//           return value
//       }
//
//   }
// console.log(onlyNums(mixedDataArray));

// const onlyNums = (array) => {
//     if (typeof(value) === "number") {
//         return value
//     }
//
//   // return array.filter(index => index === 0)
// }
// console.log(onlyNums(mixedDataArray));
//then return all  numbers, sorting from least to greatest





// function onlyNumbers(array){
//     const newArray = array.filter((value)=>{
//
//     return newArray
// })
//
// }
// console.log(onlyNumbers(mixedDataArray));
// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3


//create a function that takes in a string
const firstVowelFinder = (string) => {
   // split string into array using .split function...
   let arrOfLetters = string.split("")
   // create a variable that will id vowels
   // try filter vs map
   let vowelsDefined = arrOfLetters.filter(letter => letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u")

   // figure out how to return the index of each vowel given
   let firstVowelChar = vowelsDefined[0]

   let indexOfFirstVowel = string.indexOf(firstVowelChar)
        return indexOfFirstVowel
}
var vowelTester1 = "learn"
// Expected log output: 1
// console.log(firstVowelFinder(vowelTester1));
var vowelTester2 = "throw"
// Expected log output: 3
// console.log(firstVowelFinder(vowelTester2));





// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

//create a function that takes in 2 numbers and a math operator

//help identify opertors in arguments

//if else statement?

//how to keep function from becoming hard codepen

//maybe think string

const calculator = (num1, operator, num2) => {
    // if number is 0, return "cant divide by 0"
    if (num2 === 0 && operator === "/") {
        return "Can't divide by 0!  Try again."
    }
    //creating four else if statements to help identify which basic math operation is being used.
    else if (typeof num1 === "number" && typeof num2 === "number" && operator === "+") {
        return num1 + num2
    }
    else if (typeof num1 === "number" && typeof num2 === "number" && operator === "-") {
        return num1 - num2
    }
    else if (typeof num1 === "number" && typeof num2 === "number" && operator === "*") {
        return num1 * num2
    }
    else if (typeof num1 === "number" && typeof num2 === "number" && operator === "/") {
        return num1 / num2
    }
    // creating a blanket statement, "else" statement, in case a number is not entered
    else {
        return "USER ERROR: please enter a number, an operator, and another number"
    }
}

//Note self: double check all syntax errors and mispelling

// let numArray = [3, "", 9] =>{
//   const calculator = arr.map()
//   return calculator
// }



// let calculator = (a,[""],c) => {
// 	var answer = a [""] b;
// 	return answer;
// }

// function math() {
//   if (typeof num + typeof num)
// } return `${}`
// console.log(math);

// Uncomment and use the following console logs to test your function
// console.log(calculator(3, "*", 9))
// Expected output: 27

// console.log(calculator(16, "+", 3))
// Expected output: 19

// console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"



// --------------------6) Create a function that takes in the following variable and returns only the websites that end in ".io".

var websites = ["codepen.io", "codecademy.com", "coursera.org", "codepen.io", "udemy.com", "pluralsight.com", "udacity.com", "sitepoint.com"]
// Expected output: "codepen.io" "codepen.io"


//create a function that can run through an array and check if a string has .IO at the entered

//return only strings with .io

//consider for loop, .map or .filter?

//return shorter array, try .filter

const checkIo = (array) => {
    // filter each value in the array
    let ioOnly = array.filter(url => {
        // use filter method, and return only urls if they include ".io"
        return url.toLowerCase().includes(".io")
    }).join(" ").toLowerCase()
    // joining array into strings
    // return the string for ioOnly
    return (ioOnly)
}


// Expected output: "codepen.io" "codepen.io"
// console.log(checkIo(websites));

// --------------------6) STRETCH: Write a function that takes a number as an argument and uses a WHILE loop to count up to that number from 0.
