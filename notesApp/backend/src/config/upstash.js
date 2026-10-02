import {Ratelimit} from '@upstash/ratelimit'
import {Redis} from '@upstash/redis'
import config from '../config/config.js'

const redis = new Redis({
    url: config.redis_res_url, 
    token: config.redis_rest_token
})

// limit 5 requests per 20 seconds
const rateLimit = new Ratelimit({
    redis, 
    limiter: Ratelimit.slidingWindow(5, "20 s")
})

export default rateLimit