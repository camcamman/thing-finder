const express = require("express")
const toyRouter = express.Router()

const toyArry = [
    {
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    }
]

//get all 
toyRouter.get("/", (req, res) => {
    res.send(toyArry)
})

//get one 
toyRouter.get("/:name", (req, res) => {
    const toyName = req.query.name
    const filteredtoy = toyArry.filter(toy => toy.name === toyName)
    res.send(filteredtoy)
})

module.exports = toyRouter

