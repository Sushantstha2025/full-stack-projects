import 'dotenv/config'

const config = {
    port: process.env.PORT, 
    mongo_uri: process.env.MONGO_URI, 
    url: process.env.UPSTASH_REDIS_REST_URL, 
    token: process.env.UPSTASH_REDIS_REST_TOKEN
}


export default config