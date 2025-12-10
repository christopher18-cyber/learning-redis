import redis from "redis"

const client = redis.createClient({
    host: "localhost",
    port: 6379
})

// event listener
client.on("error", (err) => { console.log("Redis client error.", err) })

async function redisDataStructure() {
    try {
        await client.connect()
        // String -> SET,GET,MSET,MGET

        // await client.set("user:name", "Adegoke Christopher")
        // const name = await client.get("user:name")
        // console.log(name);

        // await client.mSet(["user:email", "christopher@gmail.com", "user:age", "60", "user:country", "Nigeria"])
        // const [email, age, country] = await client.mGet(["user:email", "user:age", "user:country"])

        // console.log(email, age, country);

        // lists -> LPUSH,RPUSH,LRANGE,LPOP,RPOP

        // await client.lPush("notes", ["note 1", "note 2", "note 3"])
        // const extractedValue = await client.lRange("notes", 0, -1)
        // console.log(extractedValue);

        // const firstNote = await client.lPop("notes")
        // console.log(firstNote);

        // const remainingNotess = await client.lRange("notes", 0, -1)
        // console.log(remainingNotess);

        // await client.sAdd("user:nickName", ["john", "varun", "xyz"])
        // const extractedNickname = await client.sMembers("user:nickName")
        // console.log(extractedNickname);

        // const isVarunOfOneUsers = await client.sIsMember("user:nickName", "varu")
        // console.log(isVarunOfOneUsers);

        // await client.sRem("user:nickName", "xyz")
        // const updatedUsersNickname = await client.sMembers("user:nickName")
        // console.log(updatedUsersNickname);

        // sorted sets
        // ZADD, ZRANGE, ZRANK, ZREM
    }
    catch (err) {
        console.error(err);

    } finally {
        await client.quit()
    }
}

redisDataStructure()