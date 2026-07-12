import express from "express";
import middleWare from "./middleware.js"
const router = express.Router();


router.post("/", middleWare.postOrder(), )


router.get("/", (req, res)=>{})


router.post("/:id", (req, res)=>{})


router.put("/:id", (req, res)=>{})


router.delete("/:id", (req, res)=>{})















export default router;













