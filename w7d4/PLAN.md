# NERF: Neat Electronics Repair Forum

Create a forum-like website where we see questions and their replies. We should see the information for the users, profile pictures and responses.

## Data

### User

Object or Array ?

```jsx
const user = {
  username,
  bio
  id,
  profile_url
}
```

```jsx
const user = {
  id: 1,
  profile_url: "/profile_pictures/1.png",
  username: "CircuitSavior",
  bio: "Electronics enthusiast, on a mission to resurrect circuits from the dead.",
};
```

### Topic

```jsx
const topic = {
  question,
  userId,
  replies: [],
};
```

```jsx
const topic = {
  userId: 8,
  question:
    "I'm working on a laptop that isn't charging properly. It only charges when the charging cable is held at a certain angle. What could be causing this issue?",
  replies: [],
};
```

### Reply

```jsx
const reply = {
  userId,
  content,
};
```

```jsx
const reply = {
  userId: 2,
  content: "Check the power cable and outlet first. Sometimes it's a simple power issue.",
};
```

### Topics

Depends!

```jsx
const topicsArr = [];
const topicsObj = {};
```

```jsx
const topics = {
  1: question,
  2: question,
};

const topics = [question, question];
```

### Users

Object

```jsx
const users = { 1: user, 2: user };
```

```jsx
const users = {
  1: question,
  2: question,
};
```

## Seed Data

Go see files questions.js + users.js

## Structure

### HTML

### Components

### Component Data

### Helper functions!
