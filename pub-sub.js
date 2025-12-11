import redis from "redis"

const client = redis.createClient({
    host: "localhost",
    port: 6379
})

client.on("error", (err) => {
    console.log("Redis client err", err);
})

async function testAdditionalFeatures() {
    try {
        await client.connect()

        // const subsciber = client.duplicate()  ///create a new client -> shares the same connection
        // await subsciber.connect()

        // await subsciber.subscribe("dummy-channel", (message, channel) => {
        //     console.log(`Received message from ${channel} : ${message}`);
        // })

        // publish the message to the dummy channel
        // await client.publish("dummy-channel", "some dummy data from publisher")

        // await client.publish("dummy-channel", "some new message again from the publisher")

        // await new Promise((resolve) => setTimeout(resolve, 3000))

        // await subsciber.unsubscribe("dummy-channel")

        // await subsciber.quit()

        // pipeline & transactions
        // const multi = client.multi()

        // multi.set("key-transaction1", "value1")
        // multi.set("key-transaction2", "value2")
        // multi.get("key-transaction1")
        // multi.get("key-transaction2")

        // const results = await multi.exec()
        // console.log(results);

        // const pipeline = client.multi()
        // multi.set("key-pipeline1", "value1")
        // multi.set("key-pipeline2", "value2")
        // multi.get("key-pipeline1")
        // multi.get("key-pipeline2")

        // const pipelineResult = await multi.exec()
        // console.log(pipelineResult);

        // const pipelineOne = client.multi()

        // for (let i = 0; i < 1000; i++) {
        //     pipeline.set(`user:${i}`)
        // }

        // await pipelineOne.exec()

        const dummyExample = client.multi()
        multi.decrBy("account:1234:balance", 100)
        multi.incrBy("account:0000:balance", 100)

        const finalResult = await multi.exec()

    }
    catch (err) {
        console.error(err);
    } finally {
        await client.quit()
    }
}

testAdditionalFeatures()