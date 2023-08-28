const calculateCart = require("./calculateCart");

const cart = [
  {
    id: 1,
    name: "Potato",
    icon: "🥔",
    price: 0.99,
  },
  {
    id: 2,
    name: "Chicken",
    icon: "🐔",
    price: 9.99,
  },
  {
    id: 3,
    name: "Water",
    icon: "🌊",
    price: 1.99,
  },
  {
    id: 4,
    name: "Eggs",
    icon: "🥚",
    price: 5,
  },
];

const taxPercentage = 0.14975;

const result = calculateCart(cart, taxPercentage);

console.log(result);
