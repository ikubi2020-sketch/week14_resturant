import console, { error } from "console"
import fs from "fs/promises"


async function getFile() {
    try {
        const file = await fs.readFile("./order.json", "utf-8")
        return JSON.parse(file)
    } catch (e){
        console.log(e)
    }
}

async function writeInFile(data) {
    try {
    const file = await fs.writeFile(JSON.stringify(data), "./order.json")
    return "done"
    } catch(e){
        console.log(e)
    }
}

export default {getFile, writeInFile}

