import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage(), 
    limits: {
        fileSize: 5*1024*1024,  // 5MB
        files: 1
    }, 

    fileFilter: (req, file, cb)=>{
        const allowedTypes = [
            "image/jpeg", 
            "image/webp", 
            "image/png"
        ]

        if(!allowedTypes.includes(file.mimetype)){
            return cb(new Error("Only JPEG, PNG, and WebP images are allowed"));
        }

        cb(null, true)
    }
})

export default upload