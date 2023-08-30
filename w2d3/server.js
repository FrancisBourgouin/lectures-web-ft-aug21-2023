const net = require("net");
// const {
//   addClientToList,
//   sayWelcomeMessage,
//   broadcastMessage,
//   replyToClient,
// } = require("./waiterHelpers");
const generateWaiterHelpers = require("./waiterHelpersButBetter");

const waiterHandbook = (client) => {
  const waiter = generateWaiterHelpers(client);
  // const { addClientToList, sayWelcomeMessage, broadcastMessage, replyToClient } = generateWaiterHelpers(client)

  client.setEncoding("utf8");

  waiter.addClientToList();
  waiter.sayWelcomeMessage();

  client.write("Welcome to Potato World ! 🥔🍟🥔 \n");

  // client.on("data", waiter.replyToClient);
  client.on("data", waiter.broadcastMessage);
};

const waiter = net.createServer(waiterHandbook);

waiter.listen(1337);
