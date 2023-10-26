"use strict";
let stocks = {
  fruits: ["Strawberry", "Banana", "Apple", "Pear"],
  luquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocoloate", "peanuts"],
};

//this is CALLBACK HELL
// let order = (fruit_name, call_production) => {
//   setTimeout(function () {
//     console.log(`${stocks.fruits[fruit_name]} was selected`);
//     // Order placed. Call production to start
//     setTimeout(function () {
//       console.log("the fruit has been choped");
//       setTimeout(function () {
//         console.log(`${stocks.luquid[0]} and ${stocks.luquid[1]}`);
//         setTimeout(function () {
//           console.log("start the machine");
//           setTimeout(function () {
//             console.log(`Ice cream placed on ${stocks.holder[0]}`);
//             setTimeout(function () {
//               console.log(
//                 `${stocks.toppings[0]} is sprincled over the ice-cream`
//               );
//               setTimeout(function () {
//                 console.log("finally served");
//               }, 1000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(function () {
//     console.log("production has started");
//   }, 0);
// };

// order(0, production);

let isShopOpen = true;

async function completeOrder(time, work) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
}

// completeOrder(2000, () => console.log(`${stocks.fruits[0]} was selected`))
//   .then(() => {
//     return completeOrder(0, () => console.log("production has started"));
//   })
//   .then(() => {
//     return completeOrder(2000, () => console.log("the fruit has been choped"));
//   })
//   .then(() => {
//     return completeOrder(1000, () =>
//       console.log(`${stocks.luquid[0]} and ${stocks.luquid[1]}`)
//     );
//   })
//   .then(() => {
//     return completeOrder(1000, () => console.log("start the machine"));
//   })
//   .then(() => {
//     return completeOrder(2000, () =>
//       console.log(`ice cream placed on ${stocks.holder[1]}`)
//     );
//   })
//   .then(() => {
//     return completeOrder(3000, () =>
//       console.log(`${stocks.toppings[0]} as toppings`)
//     );
//   })
//   .then(() => {
//     return completeOrder(1000, () => console.log("ice-cream is served"));
//   })
//   .catch(() => console.log("customer left"))
//   .finally(() => console.log("end of the day"));

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}

async function cook() {
  try {
    //do stuff here
    await time(2000);
    console.log(`${stocks.fruits[0]} was selected`);

    await time(0);
    console.log("production has started");

    await time(2000);
    console.log("the fruit has been choped");

    await time(1000);
    console.log(`${stocks.luquid[0]} and ${stocks.luquid[1]}`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[1]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} as toppings`);

    await time(1000);
    console.log("ice-cream is served");
  } catch (error) {
    //error management here
    console.log("Customer left", error);
  } finally {
    console.log("Day ended, shop closed");
  }
}

cook();
