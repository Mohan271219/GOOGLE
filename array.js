let demo =["one" ,"two",3,4]
console.log(demo[0])

// push -  help add element in last

let mohan=["apple","mango","manga","grapes"]

mohan.push("kiwi")
console.log(mohan)

// pop help to remove last element

let mohan=["apple","mango","manga","grapes"]
mohan.pop()
console.log(mohan)

// shift() help to remove first element

let mohan=["apple","mango","manga","grapes"]
mohan.shift()
console.log(mohan)

//unshift()  help to add new element

let mohan=["apple","mango","manga","grapes"]
mohan.unshift("strawberry")
console.log(mohan)

// slice help to remove some elemnt

let mohan=["apple","mango","manga","grapes"]
console.log(mohan.slice(0,3))

// splice 

let mohan=["apple","mango","manga","grapes"]  // replace
mohan.splice(0,1,"blueberry")
console.log(mohan)

let mohan=["apple","mango","manga","grapes"] // remove
mohan.splice(0,1)
console.log(mohan)

let mohan=["apple","mango","manga","grapes"] 
mohan.splice(0,0,"orange")
console.log(mohan)


let num=[1,2,2,3,5,6,7,8,9,]
console.log(mohan.concat(num))
console.log(num.indexOf(1))
console.log(mohan.indexOf(1))

console.log(num.lastIndexOf(1))
console.log(mohan.lastIndexOf(1))

let num=[1,2,2,3,5,6,7,8,9,]
num.reverse()
console.log(num)


let num=[1,2,2,3,5,6,7,8,9,]
num.sort()
console.log(num)



