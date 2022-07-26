// This is how to comment SINGLE LINE ONLY
/* 
This is a multi-line comment
*/
var myName;
myName = "Chiku";

var a;
a = 47
//console.log(a);
//console.log("this is a")

var b;
b = a;
console.log("b is equal to: " + b);

//assignment operator
var c = 0;

//string
var myFristName = "Chiku";
var myLastName = "None of your business";
var num = "12";

var number = "code";

var x = 1;
var y = 5;
var z = "I am a";

x = x + 1;
y = y + 5;
z = z + "Coder";

console.log(x);
console.log(y);
console.log(z);

var camper = "Chiku";
var camper = "Wendu";
console.log(camper);

let student = "Chiku";
//let student = "Chiku";
//with let, the variable cannot be overriden or changed.
console.log(student);

const Fav_Pet = "Dogs";

const SUM = 10 + 10;
const DIFFERENCE = 45 - 20;
const QUOTIENT = 66 / 33;
const PRODUCT = 8 * 10;
console.log(SUM);
console.log(DIFFERENCE);
console.log(QUOTIENT);
console.log(PRODUCT);

let newVar = 47;
newVar = newVar + 1;
//equivalent to...
newVar++;

console.log(newVar);

newVar = newVar - 1;
//same as...
newVar--;

let v = 1;
v += 5;
console.log("this is v" + v);

let s = 10;
s -= 5;
console.log("this is s" + s);

let m = 5;
s *= 2;
console.log("this is m" + m);

let d = 10;
s /= 2;
console.log("this is d" + d);

//n == 22
var n = 23;

/* if (n == 22) {
    console.log("this number is 22");
}
console.log("this number is not 22");
*/

/* if (n == 22) {
    console.log("this number is 22");
} else {
    console.log("this number is not 22");
}
*/

if (n == 22) {
    console.log("this number is 22");
} else if (n == 23) {
    console.log("this number is 23");
} else {
    console.log("this number is neither 22 or 23");
}

/*
// AND conditional
if (n == 22 && n == 23) {
    console.log("n is 22 or 23");
} else {
    console.log("n is neither 22 or 23");
}
*/

/*
// OR considitonal

if (n == 22 || n == 23) {
    console.log("n is 22 or 23");
} else {
    console.log("n is neither 22 or 23");
}
*/

var number = "47";

if (number == 47) {
    console.log("checked: this number is 47");
} else {
    console.log("checked: this number isn't 47");
}

// +=, -=, *=, /=

number++;
number--;

//concentration of strings
console.log("number = " + number);
console.log("number is" + number + ". This number is prime");

// >= , <=

var numCheck = 20;
if (numCheck <= 20) {
    console.log("num is less than or equal to 10");
} else if (number >= 11) {
    console.log("num is greater than or equal to 11");
} else {
    console.log("this is not a number");
}

const PET = "dog";

//these lines of codes are very repetitive
if (PET === "lizard") {
    console.log("I own a lizard");
} else if (PET === "dog") {
    console.log("I own a dog");
} else if (PET === "cat") {
    console.log("I own a cat");
} else if (PET === "snake") {
    console.log("I own a snake");
} else if (PET === "parrot") {
    console.log("I own a parrot");
} else if (PET === "bunny") {
    console.log("I own a bunny");
} else if (PET === "fish") {
    console.log("I own a fish");
}

// make a list less repetitive
switch (PET) {
    case "lizard":
        console.log("I own a lizard");
        break;
    case "dog":
        console.log("I own a dog");
        break;
    case "cat":
        console.log("I own a cat");
        break;
    case "snake":
        console.log("I own a snake");
        break;
    case "bunny":
        console.log("I own a bunny");
        break;
    case "fish":
        console.log("I own a fish");
        break;
    default:
        console.log("I don't own a pet")
}
const COUNTRY = "United States";
switch (COUNTRY) {
    case "France":
    case "Spain":
    case "Ireland":
    case "Portugal":
        console.log("This country is in Europe");
        break;
    case "United States":
        defualt:
        console.log("This country is not in Europe");
        break;
}

const ERRAND = "Going shopping";
switch (ERRAND) {
    case "Going to the Dentist": {
        let message = "I hate going to the dentist";
        console.log(message);
        break;
    }
    case "Going shopping": {
        let message = "I love to shop!";
        console.log(message);
        break;
    }
    case "Chores": {
        let message = "I hate doing chores";
        console.log(message);
        break;
    }
    default:
        let message = "No errands";
        console.log(message);
        break;
}

// structure of a function

function myFunction() {
    // whatever
    // console.log(ERRAND);
    // alert("I am an alert box!")
    /* var txt;
    if (confirm("Press a button")) {
        txt = "You pressed ok!";
    } else {
        txt = "You pressed cancel!"
    }
    document.getElementById("demo").innerHTML = txt;
    */

    let text;
    let person = prompt("Please enter your name:");
    if (person == null || person == " ") {
        text = "User cancle the prompt";
    } else {
        text = "Hello" + " " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = text;

}

/*
var i = 0;
console.log("Starting Loop");
while (i < 10) {
    console.log("this number is " + i);
    i++;
}
console.log("End of Loop");
*/

/*
var i = 10;
console.log("Starting Loop")
do {
    console.log("the number is " + i);
    i--
} while (i > 0)
*/

var count;
console.log("Starting loop");
for(count = 0; count < 10; count++) {
    console.log("current count: " + count);
}
console.log("Loop stopped");

var fruits = ["apple", "strawberry", "pineapple", "starfruit", "mago", "peaches", "passionfruit"];
//to specifically call strawberry
fruits[1];
console.log(fruits[0] + "is the first fruit");
console.log(fruits[1] + "is the seocnd fruit");
console.log(fruits[2] + "is the second fruit");
console.log(fruits[3] + "is the furth fruit");
//arrays are good for quickly retriving infor without having to sort through tons of data.

var i;
for(i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let text = "<ul>";
fruits.forEach(fruitfunction);
text += "</ul>";
document.getElementById("fruitText").innerHTML = text;

//declare the fruitFunction
function fruitfunction(value) {
    text += "<li>" + value + "</li>";
}