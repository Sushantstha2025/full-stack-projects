import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await rateLimit.limit('my-rate-limiter')
        if(!success){
            return res.status(429).json({
                message: "Too many requests"
            })
        }
        
        next()

    } catch (error) {
        console.log("Error on rate limiting middleware", error.message)
        next(error)
    }
}


export default rateLimiter