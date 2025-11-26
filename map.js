// The map() method creates a new array by applying a callback function to each element of the original array.
// It does not modify the original array

//Example: 1
let arr = ["apple","banana","mango"];
let res = arr.map((num) => {
    return num.toUpperCase();
});
console.log(res);

//Example: 2
let number1 = [1,2,3,4]
number1.map((num2) => {
    console.log(num2);   
})

//Example: 3
let number = [1,2,3,4]
let double = number.map((num1) => num1 * 2)
console.log(double);