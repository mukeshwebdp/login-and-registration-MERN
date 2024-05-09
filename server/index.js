import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import connectDB from "./db/db.js";
import router from "./route/router.js";
dotenv.config({
    path: "./.env"
})
const app = express();
const PORT = process.env.PORT || 7000
app.use(cors());
app.use(bodyParser.json());
app.use('/api',router);
app.get('/',(req,res)=>{
    res.send(`<h1>Hello world</h1>`)
})
    //******************* Database connection *************************** */
connectDB()
.then(()=>{
    app.listen(PORT,()=> {
        console.log(`server running at ${PORT}`);
    })
}).catch((error)=>{
    console.log(`MongoDB connection faild :${error}`);
})

    //******************* end *********************************************** */

