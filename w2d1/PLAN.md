# Shopping Cart !

Takes in a list of items (cart), and will list subtotal, total, tax, amount of items (output)

# Data structures

## Item

Object, price, name, id, icon

```jsx
const itemObj = {
  id: 1,
  name: "Potato",
  icon: "🥔",
  price: 1.99,
};

// const itemArr = [1, "potato", "🥔", 2];
```

## Cart

Object vs Array ?

```jsx
const cartArr = [item, item, item];

// const cartObj = {
//   1:item,
//   2:item,
// }
```

## Output

subtotal, total, tax, amount of items

```jsx
// const outputArr = [9.99, 11.48, 1.49, 5]

const outputObj = {
  subtotal: 9.99,
  total: 11.48,
  taxAmount: 1.49,
  amountOfItems: 5,
};
```

## Function Flow

```jsx
// const cartArr = [
//   {
//     id: 1,
//     name: "Potato",
//     icon: "🥔",
//     price: 0.99,
//   },
//   {
//     id: 1,
//     name: "Potato",
//     icon: "🥔",
//     price: 1.99,
//   },
// ];

// const taxPercentage = 14.975

const output = calculateCart(cart, taxPercentage);

// calculateCart
// amountOfItems first
// .length

// subtotal second
// loop over the items
// accumulate the price with the .price key

// taxAmount third
// subtotal * taxPercentage

// total fourth
// subtotal + taxAmount

// output
// {
//   subtotal: 9.99,
//   total: 11.48,
//   taxAmount: 1.49,
//   amountOfItems: 5,
// };
```

## What if?

### Goes wrong

- Invalid (negative, string) price in one of the items (NEEDS TO BE A NUMBER)
- Throw an error if there is no cart, or no tax percentage
- Throw an error if the cart is empty

### Goes right

- When we have a cart with items, and a taxpercentage
