# Thieve's Den!

Login, then see the content of the vault, unique per user.

## Data

## Thief

id, unique identifier (email), password, name, imagePath

```js
const thief = {
  id: 1,
  email: "",
  name: "",
  password: "",
  imagePath: "",
};
```

## ThiefList

Object of thieves, Array of thieves

Easier to access a specific thief with an object
Easier to show all the thieves with an array

```js
const thievesArr = [thief, thief];
const thievesObj = { 1: thief, 2: thief };
```

## Seed

```jsx
const thief1 = {
  id:1,
  name:"Arsene Lupin",
  email:"gentleman@cambrioleur",
  password:"tophat"
  imagePath:"arsene.gif"
}

const thief2 = {
  id:2,
  name:"Doug Judy",
  email:"pontiac@bandit.com",
  password:"rosa",
  imagePath:"rosa.webp"
}


const thieves = {
  1:thief1,
  2:thief2
}
```

## Structure

### Helpers!

- Identify / Authenticate a thief
- Create a thief
- Find a thief by it's email or id

### HTML
