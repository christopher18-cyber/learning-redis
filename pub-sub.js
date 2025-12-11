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

        const subsciber = client.duplicate()  ///create a new client -> shares the same connection
        await subsciber.connect()

        await subsciber.subscribe("dummy-channel", (message, channel) => {
            console.log(`Received message from ${channel} : ${message}`);
        })

        // publish the message to the dummy channel
        await client.publish("dummy-channel", "some dummy data from publisher")

        await client.publish("dummy-channel", "some new message again from the publisher")

        await new Promise((resolve) => setTimeout(resolve, 3000))

        await subsciber.unsubscribe("dummy-channel")

        await subsciber.quit()
    }
    catch (err) {
        console.error(err);
    } finally {
        await client.quit()
    }
}

testAdditionalFeatures()