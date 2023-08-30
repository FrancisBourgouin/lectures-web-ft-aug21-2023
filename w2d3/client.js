const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = net.createConnection({ host: "localhost", port: 1337 });

client.setEncoding("utf8");

client.on("data", (data) => console.log(data));

// setInterval(() => {
//   client.write("I WANT POTATO");
// }, 2000);

rl.on("line", (line) => {
  client.write(line);
});
