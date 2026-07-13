import { getFile, writeInFile } from "./repo.js"
import utils from "./utils.js"


const id = utils.autoIncrement()


async function postNewOrder(req, res) {
    const {customer, table} = req.body
    const newOrder = {}
    newOrder.id = id()
    newOrder.status = "new"
    newOrder.table = req.body.table
    newOrder.customer = req.body.customer
    const orders = await getFile()
    orders.push(newOrder)
    console.log(orders)
    await writeInFile(orders)
    return res.status(200).json("well done")
};

export default  {postNewOrder}