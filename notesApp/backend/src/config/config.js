import "dotenv/config"

const config = {
    mongodb_uri: process.env.MONGO_URI,
    port: process.env.PORT, 
    redis_res_url: process.env.UPSTASH_REDIS_REST_URL, 
    redis_rest_token: process.env.UPSTASH_REDIS_REST_TOKEN

}


export default config