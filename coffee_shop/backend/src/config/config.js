import 'dotenv/config'
import ImageKit from '@imagekit/nodejs'

export const config = {
    port: process.env.PORT, 
    mongodb_uri: process.env.MONGO_URI
}

export const imageKit = new ImageKit({
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
})