import redis from "redis"

const client = redis.createClient({
    host: "localhost",
    port: 6379
})

// event listener
client.on("error", (err) => { console.log("Redis client error.", err) })

async function testRedisConnection() {
    try {
        await client.connect()
        console.log("Connected to Redis.");

        await client.set("name", "chris")

        const extractValue = await client.get("key")
        console.log(extractValue);

        const deleteCount = await client.del("name")
        console.log(deleteCount);

        const extractedValues = await client.get("name")
        console.log(extractedValues);

        await client.set("count", "100")
        const incrementCount = await client.incr("count")

        console.log(incrementCount);

        const decrementCount = await client.decr("count")
        console.log(decrementCount);




    }
    catch (err) {
        console.error(err)
    } finally {
        await client.quit()
    }
}

testRedisConnection()