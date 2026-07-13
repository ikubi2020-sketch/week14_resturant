import express from "express";
const PORT = process.env.PORT;
import router from "./router.js";




const app = express();

app.use(express.json())

app.use("/orders", router)

app.listen(PORT, ()=>{
    console.log("server running")
});










