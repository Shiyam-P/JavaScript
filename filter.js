// filter() is an array method used to create a new array containing only the elements that pass a condition (return true).
// filter() returns a new array
// Original array stays the same
// Used when you want to remove unwanted items
// Callback must return true/false

//Example: 1
let humanNames = ["Itachi","minato","Jiraya","kakashi"];

let result = humanNames.filter((user) => user.length > 6);

console.log(result);

//Example: 2
let animeNames = [
    {name : "Hinata", active : true},
    {name : "Sakura", active : false},
    {name : "Tsunade", active : true},
]

let result2 = animeNames.filter((name) => name.active);
console.log(result2);

