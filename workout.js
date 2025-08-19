/// home wor

function REPORT (NAME , AGE , TAMIL , ENGLISH , MATHS , SCIENCE , SOCIAL ){
    let upperNAME = NAME.toUpperCase();
    let TOTAL =  TAMIL + ENGLISH + MATHS + SCIENCE + SOCIAL;
    let MAXTOTAL = 5 * 100;
    let percentage = (TOTAL / MAXTOTAL) * 100;
console.log(`<NAME>: ${upperNAME}`);
  console.log(`AGE      : ${AGE}`);
  console.log(`TOTAL    : ${TOTAL} / ${MAXTOTAL}`);
  console.log(`PERCENT  : ${percentage.toFixed(2)}%`);
}
REPORT("ASH", 16, 88, 92, 79, 85, 90);

// calculator

function calculate(a, b, op) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b === 0 ? 'Error: Division by zero' : a / b;
    default: return 'Error: Invalid operator';
  }
}

console.log(calculate(5, 3, '-')); 



// 


let ASH =[10,20,30,40,50]
ASH.push(60)
  console.log(ASH)
ASH.pop()
console.log(ASH)
ASH.unshift(5)
console.log(ASH)
ASH.shift()
console.log(ASH)




// homework

let Country = ["India","China","Japan","Canada","Africa"]


const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] 
   console.log(text)
}
 console.log(text)




 // map method

 let  a =[10,20,30,40]
 let b=a.map(x => x*10)
 console.log(b)


 // home work

 let office = ["chair","table","computer","food","water","sofa"];
 let space = office
  .filter(office => office.length >3);

console.log(space);






 const names = ["chair","table","computer","food","water","sofa"];
const people = names
  .filter(name => name.length > 3)
  .map(name => name.toUpperCase());
console.log(people);



let arr=[1,2,3,4,5,6,7,8,9]
let five=arr.map((el)=>el*5)
console.log(five)








