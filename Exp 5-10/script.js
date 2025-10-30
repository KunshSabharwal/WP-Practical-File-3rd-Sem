function printToWindow(message) {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML += message + "<br>";  
}
let number = 42;            
let string = "Hello, World!";
let isBoolean = true;         
let undefinedVariable;          
let nullValue = null;            
let person = {                 
    name: "Yash",
    age: 20,
    isStudent: true
};
let fruits = ["Apple", "Banana", "Mango"];  
printToWindow("Number: " + number);
printToWindow("String: " + string);
printToWindow("Boolean: " + isBoolean);
printToWindow("Undefined: " + undefinedVariable);
printToWindow("Null: " + nullValue);
printToWindow("Object: " + JSON.stringify(person));
printToWindow("Array: " + fruits.join(", "));
if (number > 20) {   
    printToWindow("Number is greater than 20");
} else {
    printToWindow("Number is less than or equal to 20");
}
for (let i = 0; i < fruits.length; i++) {
    printToWindow("Fruit " + (i + 1) + ": " + fruits[i]);
}
function multiply(a, b) {
    return a * b;
}
let product = multiply(5, 10);   
printToWindow("Product of 5 and 10: " + product);
let sum = 5 + 10;          
let difference = 15 - 5;      
let product2 = 4 * 6;            
let quotient = 20 / 4;     
let remainder = 19 % 5;   
printToWindow("Sum: " + sum);
printToWindow("Difference: " + difference);
printToWindow("Product: " + product2);
printToWindow("Quotient: " + quotient);
printToWindow("Remainder: " + remainder);
let isAdult = (person.age >= 18 && person.isStudent); 
let canVote = (person.age >= 18 || person.isStudent); 
printToWindow("Is person an adult and a student: " + isAdult);
printToWindow("Is person eligible to vote: " + canVote);
let day = 3;
switch (day) {
    case 1:
        printToWindow("It's Monday");
        break;
    case 2:
        printToWindow("It's Tuesday");
        break;
    case 3:
        printToWindow("It's Wednesday");
        break;
    default:
        printToWindow("It's another day");
}
const PI = 3.14;                
let radius = 5;
let area = PI * radius * radius;  
printToWindow("Area of the circle: " + area);
