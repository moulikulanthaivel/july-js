let parent = document.querySelector(".main");

// these are traversing property 


console.log(parent.parentNode);
console.log(parent.firstChild);
console.log(parent.firstElementChild);
console.log(parent.childNodes);

let three = document.querySelector(".three");
console.log(three.previousElementSibling)
console.log(three.nextElementSibling)

 let arr = ['a','b','c']
arr.push(..."de")
console.log(arr)

//2.
let str = "racecar"
let reversedStr = str.split('').reverse().join('');
console.log(str === reversedStr)

let array =[1,2,3,4]
array.splice(2,1,"a","b")
console.log(array)