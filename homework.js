// 



const cart = [
{item: "book", price: 120, quantity: 2},
{item: "pen", price: 10, quantity: 5},
{item: "bag", price: 500, quantity: 1},
];

for (const product of cart) {
    const totalcost = product.price * product.quantity;
    console.log(`${product.item}: Total cost = ${totalcost}`);
}

///

const cart = [
  { item: "book", price: 120, quantity: 2 },
  { item: "pen", price: 10, quantity: 5 },
  { item: "bag", price: 500, quantity: 1 }
];

for (const product of cart) {
  const totalCost = product.price * product.quantity;
  console.log(`${product.item}: Total Cost = ₹${totalCost}`);
}



const friends = ["Ashwin", "Akash", "Pave", "vickram", "Mohan", "reno"];
const people = friends
  .filter(friends => friends.length > 5)
  .map(friends => friends.toUpperCase());
console.log(people);



