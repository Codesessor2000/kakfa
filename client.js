const {Kafka} = require("kafkajs");


exports.kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['<PrivateIP>:9092']
});