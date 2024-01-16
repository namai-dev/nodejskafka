const express = require("express");
const { Kafka } = require("kafkajs");
const { send_email } = require("./my_mailer.js");

const app = express();
app.get("/", (req, res) => {
  res.send("Haha i see you....");
});

const kafka = new Kafka({
  clientId: "email_service",
  brokers: ["localhost:9092"],
});

const run_consumer = async () => {
  const consumer = kafka.consumer({
    groupId: "email",
  });

  await consumer.connect();

  await consumer.subscribe({
    fromBeginning: true,
    topics: ["email"],
  });

  await consumer.run({
    eachMessage: async (result) => {
      console.log(result.message.value.toString());
      send_email(result.message.value.toString());
    },
  });
};
run_consumer();

app.listen(8011, "127.0.0.1", () => {
  console.log("Server Listening....");
});
