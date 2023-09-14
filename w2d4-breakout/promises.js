// New Promise

// .then() (When the promise is resolved)
// .catch() (When the promise is mad (rejected))
// .finally() (When the promise finishes)

const loadAFile = (filePath) => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("I AM THE CONTENTS OF THE FILE");
    } else {
      reject("FILE NOT FOUND");
    }
    // }, 2000);
  });
};

// console.log("Starting to read the file");

loadAFile("./QUESTIONS.md")
  .then((content) => console.log(content))
  .catch((err) => console.log("OH NO", err))
  .finally(() => console.log("Finished to read the file"));

console.log("IM REALLY DONE NOW!");

// Async / Await
// const someFunction = async () => {
//   try {
//     const result = await loadAFile();
//   } catch (error) {
//     console.log("Oh no...");
//   }
//   return 5 + 5;
// };

// const someFunctionWithoutAsync = () => {
//   return loadAFile().then(() => 5 + 5);
// };

// someFunctionWithoutAsync().catch()

console.log(someFunction());
