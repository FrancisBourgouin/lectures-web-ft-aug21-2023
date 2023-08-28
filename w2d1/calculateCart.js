// * 100
// / 100

// * 10
// / 10

// * 1
// / 1

// 10^0
// 10^1
// 10^2
const fancyRound = (number, precision) => {
  const multiplivider = Math.pow(10, precision);

  const result = Math.round(number * multiplivider) / multiplivider;

  return result;
};

const calculateCart = (cart, taxPercentage) => {
  if (!Array.isArray(cart)) {
    throw new Error("HEY DON'T FORGET THE CART!");
  }
  if (taxPercentage < 0 || typeof taxPercentage !== "number") {
    throw new Error("HEY WHERE'S THE TAX DUDE!");
  }
  if (cart.length === 0) {
    throw new Error("WHY IS THE CART EMPTY!");
  }

  const validatedCart = cart.filter(
    (item) => item.price >= 0 && typeof item.price === "number"
  );

  // amountOfItems first
  // .length

  // output.amountOfItems = validatedCart.length;
  //
  // subtotal second
  // loop over the items
  // accumulate the price with the .price key
  let subtotal = 0;
  for (const item of validatedCart) {
    subtotal += item.price;
  }
  //
  // taxAmount third
  // subtotal * taxPercentage
  const taxAmount = fancyRound(subtotal * taxPercentage, 2);
  //
  // total fourth
  // subtotal + taxAmount
  const total = fancyRound(subtotal + taxAmount, 2);

  return {
    amountOfItems: validatedCart.length,
    subtotal,
    taxAmount,
    total,
  };
};
// const calculateCart = (cart, taxPercentage) => {
//   if (!Array.isArray(cart)) {
//     throw new Error("HEY DON'T FORGET THE CART!");
//   }
//   if (taxPercentage < 0 || typeof taxPercentage !== "number") {
//     throw new Error("HEY WHERE'S THE TAX DUDE!");
//   }
//   if (cart.length === 0) {
//     throw new Error("WHY IS THE CART EMPTY!");
//   }

//   const validatedCart = cart.filter(
//     (item) => item.price >= 0 && typeof item.price === "number"
//   );
//   const output = {};

//   // amountOfItems first
//   // .length
//   output.amountOfItems = validatedCart.length;
//   //
//   // subtotal second
//   // loop over the items
//   // accumulate the price with the .price key
//   output.subtotal = 0;
//   for (const item of validatedCart) {
//     output.subtotal += item.price;
//   }
//   //
//   // taxAmount third
//   // subtotal * taxPercentage
//   output.taxAmount = fancyRound(output.subtotal * taxPercentage, 2);
//   //
//   // total fourth
//   // subtotal + taxAmount
//   output.total = fancyRound(output.subtotal + output.taxAmount, 2);

//   return output;
// };

module.exports = calculateCart;
