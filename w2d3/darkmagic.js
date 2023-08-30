const client1 = { name: "bob" };
const client2 = { name: "bob" };

console.log(client1 === client2);

// We want to compare if the two structures share the same keys and values

const clientList = [client1, client2];

console.log(clientList[0] === client1);

const client3 = client1;

console.log(client1 === client3);
