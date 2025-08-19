// string

let friends = "ash \nakash \pave"
// let fr = 'vickram'
// console.log(friends)



let veg = `brinjal onion 
cucumber raw banana
lemon
${friends}`
console.log(veg)

//string methods

let str = 'mohan is good boy';
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(4));
console.log(str.indexOf("h"));
console.log(str.lastIndexOf("n"));
console.log(str.includes("mohan"));
console.log(str.replace("mohan","ash"));
console.log(str.slice(0,3));
console.log(str.trim());
console.log(str.split(""));
console.log(str.concat(friends));
console.log(str.startsWith("mohan"));
console.log(str.endsWith('y')); 




///task revesre split reverse join.

const name = "mohan";
const reversed = name.split("").reverse().join("");
console.log(reversed);