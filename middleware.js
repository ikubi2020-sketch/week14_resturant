


function validStatusUpdate(req, res, next){
    const {id} = req.params
    const {status} = req.body
    const validStatuses = ["preparing", "ready", "delivered", "canceled"];
    if (!validStatuses.includes(status) || status == null) return res.status(400).json ({"result" : "incorrect status"})
    if (typeof(isNaN(Number(id))))  return res.status(400).json ({"result" : "incorrect ID"})
    next()
}


function postOrder(req, res, next) {
    const {customer, table} = req.body
    if (!customer || !table) return res.status(400).json({"result" : "missing key"})   
    else if (customer.length < 2 || isNaN(Number(table))) return  res.status(400).json({"result" : "missing value"})
    next()
}

function delOrder(req, res, next) {
    const {id} = req.params
    if(isNaN(Number(id))) return res.status(400).json({"result" : "ID not a number"})
    next()
}

export default {validStatusUpdate, postOrder, delOrder}