
function postOrder(req, res, next) {
    const {customer, status, table} = req.body
    if (!customer || !status || !table) return res.status(400).json ({"result" : "missing key"})
    else if (customer.length > 2 || !status ["new"] || isNaN(Number(table))) return {"status" : 400, result : "wrong values"}
    next()
}

function validStatusUpdate(newStatus){
    const validStatuses = ["preparing", "ready", "delivered", "canceled"];
    if (!validStatuses.includes(newStatus)) return res.status(400).json ({"result" : "incorrect status"})
}

export default {postOrder}