// - Find a thief by it's email or id

const findThiefById = (thieves, id) => {
  return thieves[id];
};

const findThiefByEmail = (thieves, email) => {
  const thievesList = Object.values(thieves);

  const thief = thievesList.find((thief) => email === thief.email);

  return thief;
};

// - Identify / Authenticate a thief

const authenticateThief = (thieves, email, password) => {
  // {err, thief}
  // Check if thief exists
  const thief = findThiefByEmail(thieves, email);

  if (!thief) {
    return { error: "User doesn't exist", thief: undefined };
  }

  // Check if password matches

  if (thief.password !== password) {
    return { error: "Password doesn't match", thief: undefined };
  }

  return { error: undefined, thief };
};

// - Create a thief

const createThief = (thieves, email, password, name) => {
  const newThief = {
    email,
    name,
    password,
    imagePath: "arsene.gif",
    id: Object.keys(thieves).length + 1,
  };

  thieves[newThief.id] = newThief;

  return newThief;
};

module.exports = {
  findThiefByEmail,
  findThiefById,
  createThief,
  authenticateThief,
};
