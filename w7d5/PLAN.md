# Quiz App!

View multiple questions, and answer them one at a time, and say wow when we have the right answer

- What is the hottest planet in the solar system? Venus
- What is the capital of Toronto? T
- What is the powerhouse of the cell ? Mitochondria
- How many stomachs do cows have? 4

# Data Structures

# questionIndex

```jsx
const questionIndex = 0; // Random
```

# Points!

```jsx
const points = {
  right: 0,
  total: 0,
};
```

# Question

```jsx
const question = {
  id: 0,
  question: "",
  answer: "",
};
```

# Questions

```jsx
const questionArr = [question, question];
const questionObj = { 1: question, 2: question };
```

# HTML Structure

- body
  - header
    - h1 title
    - nav
      - a
      - a
  - main
    - section
      - form quiz
        - p question
        - input answer
        - button answer
        - button skip
    - section
      - h1 score
      - h2 percentage
    - section
      - form create
        - input question
        - input answer
        - button add

# Component Structure

- App
  - Header
  - QuizForm
  - CurrentScore
  - QuestionForm
