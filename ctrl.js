import { getFile, writeInFile } from "./repo.js"
import utils from "./utils.js"


const id = utils.autoIncrement()


async function postNewOrder(req, res) {
    const { customer, table } = req.body
    const newOrder = {}
    newOrder.id = id()
    newOrder.status = "new"
    newOrder.table = req.body.table
    newOrder.customer = req.body.customer
    const orders = await getFile()
    orders.push(newOrder)
    await writeInFile(orders)
    return res.status(200).json("well done")
};

async function getAllOrders(req, res) {
    const orders = await getFile()
    res.status(200).json({ "orders": orders })
}

async function delOneOrder(req, res) {
    const { id } = req.params
    const orders = await getFile()
    const filteredOrders = orders.filter(order => order.id !== +id)
    if (orders.length === filteredOrders.length) return res.status(404).json({ "error": "not found any order in this ID" })

    else await writeInFile(filteredOrders)
    return res.status(200).json({ "result": "order was deleted" })
}

async function updateStatus(req, res) {
    const { status } = req.body
    const { id } = req.params
    const orders = await getFile()
    const order = orders.find(order => order.id === +id)
    if(!order) return res.status(404).json({ "error": "not found any order in this ID"})
    const statusCheck = utils.changStatus(status, order.status)
    if (statusCheck.status !== 200) return res.status(statusCheck.status).json(statusCheck.result)
    const updatedOrders = orders.map()
}

export default { postNewOrder, getAllOrders, delOneOrder }