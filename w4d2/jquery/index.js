$(document).ready(() => {
  // $("article").on("click", event => {
  //   $(event.currentTarget).css("background-color", createRandomColor())
  // })

  // Random color per article (already on the page)
  $("article").click((event) => {
    $(event.currentTarget).css("background-color", createRandomColor());
    console.log("color changed!");
  });

  // Chicken Invasion
  $("header").append("<p>🐓🐓🐓🐓🐓🐓</p>");

  setInterval(() => {
    $("header").append("<p>🐓🐓🐓🐓🐓🐓</p>");
  }, 3000);

  // Insert a bunch of potato articles

  const createPotatoPost = (potato) => {
    const content = `
    <article>
    <h1>${potato.title}</h1>
    <p>${potato.text}</p>
    </article>
    `;

    $("main").append(content);
  };

  const createPotatoPostButBetter = (potato) => {
    const $article = $("<article>");
    const $h1 = $("<h1>");
    const $p = $("<p>");

    $h1.text(potato.title);
    $p.text(potato.text);

    $article.append($h1);
    $article.append($p);

    $article.click((event) => {
      $(event.currentTarget).css("background-color", createRandomColor());
      console.log("color changed!");
    });

    $("main").append($article);
  };

  for (const potato of potatoes) {
    createPotatoPostButBetter(potato);
    // Random color per article (already on the page)
  }
});
