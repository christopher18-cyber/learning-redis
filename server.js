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
    }
    catch (err) {
        console.error(err)
    } finally {
        await client.quit()
    }
}

testRedisConnection()