

function changStatus(newStatus, oldStatus) {
    if (newStatus === "preparing" && oldStatus !== "new") return { "status": 400, "result": "only new can be updated" }
    else if (newStatus === "ready" && oldStatus !== "preparing") return { "status": 400, "result": "only preparing can be updated" }
    else if (newStatus === "delivered" && oldStatus !== "ready") return { "status": 400, "result": "only ready can be updated" }
    else if (newStatus === "canceled" && !["new", "preparing"].includes(oldStatus)) return { "status": 400, "result": "only preparing and new can be updated" }
    else return { "status": 200, "result": "status updata matched" }
}

function autoIncrement() {
    let id = 1
    function inner(){
        id++
        return id
    }
    return inner
}



export default {autoIncrement , changStatus}