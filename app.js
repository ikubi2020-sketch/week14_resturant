import express from "express";
const PORT = process.env.PORT;
import router from "./router.js";




const app = express();



app.listen(PORT, ()=>{
    console.log("server running")
});










