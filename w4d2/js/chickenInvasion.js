const chickenInvasion = () => {
  const newElement = document.createElement("p");
  newElement.innerText = "🐓🐓🐓🐓🐓🐓";

  const header = document.getElementById("chickenHeaderParty");
  header.append(newElement);

  setInterval(() => {
    const newElement = document.createElement("p");
    newElement.innerText = "🐓🐓🐓🐓🐓🐓";

    const header = document.getElementById("chickenHeaderParty");
    header.append(newElement);
  }, 10000);
};
