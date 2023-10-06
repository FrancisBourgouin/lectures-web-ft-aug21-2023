# Mystified ?

- prev ?

```jsx
const [count, setCount] = useState(0);

setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

setCount((pendingState) => pendingState + 1); // 1
setCount((pendingState) => pendingState + 1); // 2
setCount((pendingState) => pendingState + 1); // 3

const state = {
  interviews: [],
  appointments: [],
  students: [],
};

get("interviews").then(setState({ ...state, interviews }));
get("interviews").then(setState({ ...state, appointments }));
get("interviews").then(setState({ ...state, students }));

Promise.all();
```
