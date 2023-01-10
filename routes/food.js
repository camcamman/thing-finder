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

//get all
foodRouter.get("/", (req, res) => {
    res.send(food)
})

//get one 
foodRouter.get("/:name", (req, res) => {
    const foodName = req.query.name
    const filteredFood = food.filter(food => food.name === foodName)
    res.send(filteredFood)
})

module.exports = foodRouter
