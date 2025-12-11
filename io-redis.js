import Redis from "ioredis";

const redis = new Redis()

async function ioRedisDemo() {
    try {
        await redis.set("key", "value")
        const val = await redis.get("key")
        console.log(val);

    }
    catch (err) {
        console.error(err)
    } finally {
        await redis.quit()
    }
}

ioRedisDemo()