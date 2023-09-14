document.addEventListener("DOMContentLoaded", () => {
  const articles = document.getElementsByTagName("article");

  for (const article of articles) {
    article.addEventListener("click", (event) => {
      event.currentTarget.style.backgroundColor = createRandomColor();
    });
  }

  chickenInvasion();

  for (const potato of potatoes) {
    createAndAppendPotatoPost(potato);
  }

  // RGB Red Green Blue #00AAFF
  // rgb(0,150,255)
});
