// arithmetic operator

//add+
//sun-
//mul*
//div/
//modulus
//exponed**
//increment++
//decrement --

let a =60;
let b =3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

let c=10;
c++
console.log(c);

let d=19;
d--
console.log(d);


//asignment operator
let as =10;
as =10;
console.log(as);


// we have to use incre decre but output should be same stored value

//comparison operator
//<
//>
//<=
//>=



let ls = 10;
let gr = 10;
console.log(ls<gr);
console.log(ls>gr);
console.log(ls<=gr);
console.log(ls>=gr);

//logical operator
// && -- and
// ||  -- or
// !  -- not


let not = 10;
let val = 10;
console.log(not != val);


// strict operator

// ==  loose equality / double equal
// === strict equality / triple equality

let ash = 10;
let akash = '10';
console.log(ash==akash);
console.log(ash===akash);


// ternary operators
// syntax 
// variable name (condition)? : "true value" : "false value"

let age = 29;
let result = (age >=18)? " he is eligible to vote" : " not eligible"
console.log(result);

// and operator   any one condition faLse all are false..


let age = 17;
let result = (age >=18 && age <=80)? " he is eligible to vote" : " not eligible"
console.log(result);

// or operator any one is fales all are true..

let mark = 50;
let result =(mark >=50 || mark <=100 )? "pass" : "fail"
console.log(result);


// use or operator and get result as fail.. homework..


let mark = 35;
let result =(mark >=36|| mark <= 34)? "pass" : "fail"
console.log(result);