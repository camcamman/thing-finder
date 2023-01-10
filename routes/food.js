const express = require("express")
const foodRouter = express.Router()

const food = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

foodRouter.get("/", (req, res) => {
    res.send(food)
})

module.exports = foodRouter