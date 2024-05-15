console.log("I am testing the console")

let firstName = "Tolani"; //declaring a variable

firstName = "Aramide"; //reassigning a variable

const a = 85;
let b = 15;
let c = a + b;

console.log(c);

b = 25;
c = a + b;
console.log(c);

/*
var $firstName;

var first_name;

var name1;
var name2;
var _first_name;

$firstName = "Lorraine";
*/

//creating a function
function sayHey() {
    console.log("Hey");
}

sayHey(); //call the function

function conversation() {
    sayHey();
    console.log("How are you?");
    console.log("Goodnight");
}

conversation();

//function with parameter
function greeting(name) {
    console.log("Hello " + name + "!");
}

greeting("Sakirat");
greeting("Varlene");
greeting("Beauty");

function addition(num1, num2) {
    return(num1 + num2);
}

addition(1000, -2)
addition(2300, 4000)

let additionOfTwoNumbers = addition(1000, -2); // 998
console.log(additionOfTwoNumbers);