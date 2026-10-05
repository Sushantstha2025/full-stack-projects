import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import config from "./config.js";

const redis = new Redis({
    url: config.url, 
    token: config.token
})


const rateLimit = new Ratelimit({
    redis, 
    limiter: Ratelimit.slidingWindow(10, "20 s")
})


export default rateLimit