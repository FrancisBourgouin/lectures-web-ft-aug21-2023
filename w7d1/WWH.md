# What was hard?

- React, a library or framework ?

React => Library (Framebrary)

Purpose => EJS or jQuery

EJS => Templating Language
Great for separating concerns
Downside is annoying syntax, limited functionality to create bigger structures

jQuery => Facilitate Interactivity in browser
Easier to automate, nightmare to write

React => JSX

JSX smells like HTML
JSX tastes like HTML
JSX ain't HTML

JSX is a templating language

FROM

```jsx
const greeting = <p className="greeting">Hello there! {2 + 2}</p>;

for (let i = 0; i < 10; i++) {
  greeting;
}
```

TO

```js
ReactDOM.createElement("p", { innerText: "Hello there!" });
```

```jsx
const Header = require("./Header.jsx)

<Header />
```

```html
<img src="..." class="..." alt="..." />
```

src, class, alt => Attributes of the html tag (Property)

```jsx
const properties = {
  src: "",
  class: "",
  alt: "",
};
```

```jsx
<PlantListItem name="" lastWateredDate="" >
```

<!-- url, method, data, dataType, callBackType
$.ajax() -->

```js
const createUser = (firstName, lastName, isAdmin, email) => {
  ...
};


createUser("Bob", "McBob", true, "bob@email.com")

createUser(undefined, undefined, false, "some@email")


const createUserButBetter = (userProperties) => {
  // ...
}

createUserButBetter({
  lastName:"McBob",
  isAdmin:true,
  email:"bob@bob.com"
  firstName:"Bob",
})

createUserButBetter({
  isAdmin:false,
  email:"some@email"
})
```
