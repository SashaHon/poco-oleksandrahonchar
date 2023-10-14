// import {bottles} from "./mocks";

// const availProducts = bottles;
const products = [
  {
    title: "Retro",
    id: 1,
    price: 10,
    availability: true,
    descr: "Some description about this bottle",
    pic: "bottle_1.jpg",
    details: {
      color: "white",
      volume_l: 1,
      material: "steel",
      sustainability: "",
      isolation_h: "24h hot or cold",
    },
  },
];
const cart = [];
const orders = [];
const customers = [];

let orderID = 0;

// console.log(products);

function addToCard(productID) {
  //   let quantity = 0;

  //   quantity = cart.reduce((res, item) => {
  //     if (item.id === productID) {
  //       res += 1;
  //       return res;
  //     }
  //   }, 0);

  let productInList = false;

  cart.forEach((product) => {
    //check if the product is in the cart
    if (productID === product.id) {
      //if it is, increase quantity by 1
      product.quantity++;
      productInList = true;
    }
  });

  if (!productInList) {
    cart.push({
      id: productID,
      quantity: 1,
    });
  }
}

addToCard(1);
// console.log(cart);

function isNewCust(email) {
  customers.forEach((cust) => {
    if (cust.email === email) {
      return false;
    }
  });
  return true;
}

function createCust(customer) {
  customers.push({
    id: customers.length + 1,
    email: customer.email,
    fname: customer.fname,
    lname: customer.lname,
  }); //to do: all needed info
}

// function connectCust(cust) { }

function getCustID(email) {
  customers.forEach((customer) => {
    if (email === customer.email) {
      return customer.id;
    }
  });
}

function getProductInfos() {
  let resultArr = [];

  cart.forEach((item) => {
    let obj = {};
    products.forEach((product) => {
      if (product.id === item.id) {
        obj = product;
        obj.productID = item.id;
        obj.quantity = item.quantity;
        obj.totalSum = obj.quantity * product.price;
      }
    });
    resultArr.push(obj);
  });

  return resultArr;
}

function calculateTotal(productInfos) {
  let total = 0;
  productInfos.forEach((product) => {
    total += product.productSum;
    //same as total = total + product.productTotall
  });
  return total;
}

function clearCart() {
  cart.forEach((item) => {
    cart.pop();
  });
  return cart;
}

function getShippingAddress() {
  //////////////////////////////////////////////////////////////
}

function createOrder(formData) {
  //   isNewCust(customer.email) ? createCust(customer) : connectCust(customer);

  if (isNewCust(formData.email)) {
    createCust(formData);
  }
  let custID = getCustID(formData.email);
  let productInfos = getProductInfos();
  let total = calculateTotal(productInfos);
  //to do getSHippingAddress func
  let shippingAddress = getShippingAddress();

  const order = {
    id: order.length + 1,
    date: new Date().toISOString(),
    total: total,
    customerID: custID,
    paymentMethod: "card",
    shippingAddress: shippingAddress(),
    status: "new",
  };

  clearCart();
  formData = null;

  //cart info
  //product info: calc total,
  //form info
  //generate orderID, orderDate

  /*
     1. check if cust already exhists in customers
    2. if cust exhists: custID to store it later in the orders (connecting customers with orders);
    3. if cust doesn't exist create new cust and get new custID
    4. create a new order: get all product info of the products in the cart
    5. calc total
    6. create new obj in orders with : 
    orderID - num, 
    orderDate - string,
     custID - num,
      total -num, 
      productInfo - arr of objs,
      shipping address - obj, 
      status (new & unpaid, confirmed, processed, paid, delivered, canceled, returned),
      payment method - string
    7.clear cart and form data;
    
*/
}

// console.table(cart);
