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

        // await client.zAdd("cart", [{
        //     score: 100, value: "cart 1"
        // },
        // {
        //     score: 150, value: "cart 2"
        // },
        // {
        //     score: 10, value: "cart 3"
        // }])

        // const getTopCartItems = await client.zRange("cart", 0, -1)
        // console.log(getTopCartItems);

        // const extractAllItemsWithScore = await client.zRangeWithScores("cart", 0, -1)
        // console.log(extractAllItemsWithScore);

        // const cartTwoRank = await client.zRank("cart", "cart 1")
        // console.log(cartTwoRank + 1);

        // hashes -> HGET,HSET,HGETALL,HDEL
        await client.hSet("product:1", {
            name: "Product 1",
            description: "product one description",
            rating: "5"
        })

        const getProductRating = await client.hGet("product:1", "rating")
        console.log(getProductRating);

        const getProductDetail = await client.hGetAll("product:1")
        console.log(getProductDetail);

        await client.hDel("product:1", "ranking")
        const updatedProduct = await client.hGetAll("product:1")
        console.log(updatedProduct);




    }
    catch (err) {
        console.error(err);

    } finally {
        await client.quit()
    }
}

redisDataStructure()