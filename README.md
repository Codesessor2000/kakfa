This project was created as a tutorial to understand basics of Kafka and its architecture.

Steps to run the project.
Step 1: clone the repository.
Step 2: Go to file client.js and replace PRIVATE_IP with your network IP.
Step 3: Open command prompts: run the following commands
      1] Start Zookeper Container and expose PORT 2181.-->
         Command: docker run -p 2181:2181 zookeeper
      2] Start Kafka Container, expose PORT 9092 and setup ENV variables.
         Command(Windows): docker run -p 9092:9092 `
                          -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 `
                          -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 `
                          -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 `
                          confluentinc/cp-kafka
      3] Run multiple consumers.
         Command: node consumer.js <GROUP_NAME>  // replace <GROUP_NAME> with any name you like for your group. eg:group-1
      4] Create Producer
         Command: node producer.js
         In here you should enter message like 
            > Raj North
            > Ram South
            > Rohit North
            > Ronit South
