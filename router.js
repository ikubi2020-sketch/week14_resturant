import express from "express";
import middleWare from "./middleware.js"
import ctrl from "./ctrl.js"


const router = express.Router();


router.post("/", middleWare.postOrder, ctrl.postNewOrder)


router.get("/", ctrl.getAllOrders)


router.patch("/:id", (req, res)=>{})


router.put("/:id", (req, res)=>{})


router.delete("/:id",middleWare.delOrder, ctrl.delOneOrder)




export default router;













