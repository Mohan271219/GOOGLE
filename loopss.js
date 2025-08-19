//for loops

for(let a = 0;a<=10;a++){
    console.log(a)
}

let x =0
for(let b=0;b<=10;b++){
x+=b                             // x=x+i   0+0=0 0+1=1 1+2=3 
console.log(x)             
}
console.log(x)


let str ="akashashwin"
for(i=0;i<str.length;i++){
    console.log(str[i])
}

let cars = ["Saab", "Volvo", "BMW"]
for(i=0;i<cars.length;i++){
   console.log(cars[i])
}


let str ="javascript"
let single=""
for(i=0;i<str.length;i++){
    single=single+str[i]
// console.log(single)
}
console.log(single)

let arr = ["Saab", "Volvo", "BMW"]
let single=""
for(i=0;i<arr.length;i++){
single=single+arr[i]
console.log(arr)
}





/// while loop

let wloop=1
while(wloop<=10){
    wloop++
    console.log(wloop)
}


// do while

let dloop=1
do{
    console.log(dloop)
    dloop++
}
while(dloop<=3)


    

///  for in 

let obj ={
  name : "mohan",
  place : "chennai",
  studies : "Bsc",
  number : 8807523804
}

for(let key in obj){
    console.log(key +":" + obj[key])
}



// for of

let arr=["apple","pineapple","orange","banana"]

for(let fruit of arr){
    console.log(fruit)
}


// for each
let arr=["apple","pineapple","orange","banana"]

arr.forEach((val)=>{
    console.log(val)
})

// MRF METHOD


let arr=[1,2,3,4,5,6,7,8,9]
let five=arr.map((el)=>el*5)
console.log(five)

// filter

let arr=[1,2,3,4,5,6,7,8,9]
let even=arr.filter((el)=>el%2==0)
console.log(even)

// reduce
let arr=[1,2,3,4,5,6,7,8,9]
let sum=arr.reduce((acc,val)=>acc+val,500)
console.log(sum)