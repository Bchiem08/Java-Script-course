console.log('hello')

// alert('yoo');

//variables
var b = 'smoothie';
console.log (b)

var someNumber = 45
console.log(someNumber)


// var age = prompt("what is your age?")

// document.getElementById('someText').innerHTML= age

var num1 = 10;
num1++;

num1--;
console.log(num1)

console.log(num1 / 6)

num1 += 10
console.log(num1)

/* FUNCTIONS
    1. crete the function
    2. call the funtion
    lets create a function that creates a name and returns to you and says hello followed by my name
*/
function fun() {
    alert('this is a function')
}
 
fun()

var name = prompt('what is your name?')

function greeting(yourName) {
   
    var result = 'Hello'+ " " + yourName
    console.log (result)
}

greeting(name)

function sumNumbers(x, y) {
    var reslit = x + y
    console.log(x + y)
}

sumNumbers(12 , 10)

// while(num < 100) {
//     num += 1;
//     console.log(num)
// }

for (let num = 0; num < 100; num++) {
    console.log(num);
}

