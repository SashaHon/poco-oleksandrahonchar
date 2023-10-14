const bottles = [];

const allProducts = [
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

allProducts.map((item) => {
  let a = item.availability;
  if (a) {
    bottles.push(item);
  }
  return bottles;
});

console.log(bottles);
export default bottles;
