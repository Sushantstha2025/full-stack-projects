import app from "./src/app.js";
import config from "./src/config/config.js";
import connectDB from "./src/config/db.js";

const port = config.port

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server running on port: ${port}`)
    })
})
