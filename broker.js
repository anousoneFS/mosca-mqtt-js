// MQTT broker
var mosca = require("mosca");
var settings = { port: 5000 };
var broker = new mosca.Server(settings);

broker.on("ready", () => {
  console.log("Broker is ready!");
});
