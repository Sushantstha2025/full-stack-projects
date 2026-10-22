import {randomUUID} from "node:crypto"
import {imageKit} from '../config/config.js'
import { toFile } from "@imagekit/nodejs"


// upload the file to the image kit and return the file url along with file id
const uploadImage = async (file) =>{
    const result = await imageKit.files.upload({
        file: await toFile(file.buffer, file.originalname), // takes the file buffer which is in bytes 
        fileName: randomUUID(),  // gives the file a unique name so that it doesn't clash
        folder: '/products' // stores the file in the folder
    })

    return ({
        url: result.url, 
        fileId: result.fileId
    })
}

export default uploadImage