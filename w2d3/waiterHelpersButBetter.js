// HOF => Higher Order Function
// 1- A function that would take another function as a parameter
// 2- A function that returns a function definition

const clientList = [];

const createWaiterHelpers = (client) => {
  const broadcastMessage = (data) => {
    console.log(data);
    for (const storedClient of clientList) {
      if (client !== storedClient) {
        storedClient.write(data);
      }
    }
  };

  const replyToClient = (data) => {
    console.log(data);
    client.write(`🦜: ${data} \n`);
  };

  const sayWelcomeMessage = () => {
    console.log("Oh we have a new client!", clientList.length);
    client.write(`You are the client #${clientList.length}`);
  };

  const addClientToList = () => clientList.push(client);

  return { addClientToList, sayWelcomeMessage, broadcastMessage, replyToClient };
};

module.exports = createWaiterHelpers;
