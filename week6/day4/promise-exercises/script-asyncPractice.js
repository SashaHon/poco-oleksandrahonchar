function defineTopping() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which topping would you like?"));
    }, 3000);
  });
}

async function kitchen() {
  console.log("A");
  console.log("B");
  console.log("C");

  await defineTopping();

  console.log("D");
  console.log("E");
}

kitchen();

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking orders");
