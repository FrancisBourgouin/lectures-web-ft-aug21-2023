const createAndAppendPotatoPost = (potato) => {
  const newPotatoPost = document.createElement("article");
  const newPotatoTitle = document.createElement("h1");
  const newPotatoContent = document.createElement("p");

  newPotatoPost.addEventListener("click", (event) => {
    event.currentTarget.style.backgroundColor = createRandomColor();
  });
  newPotatoTitle.innerText = potato.title;
  newPotatoContent.innerText = potato.text;

  newPotatoPost.append(newPotatoTitle);
  newPotatoPost.append(newPotatoContent);

  document.getElementsByTagName("main")[0].append(newPotatoPost);
};
