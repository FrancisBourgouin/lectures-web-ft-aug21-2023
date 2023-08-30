const clientList = [];

const broadcastMessage = (client, data) => {
  console.log(data);
  for (const storedClient of clientList) {
    if (client !== storedClient) {
      storedClient.write(data);
    }
  }
};

const replyToClient = (client, data) => {
  console.log(data);
  client.write(`🦜: ${data} \n`);
};

const sayWelcomeMessage = (client) => {
  console.log("Oh we have a new client!", clientList.length);
  client.write(`You are the client #${clientList.length}`);
};

const addClientToList = (client) => clientList.push(client);

module.exports = { addClientToList, sayWelcomeMessage, broadcastMessage, replyToClient };
