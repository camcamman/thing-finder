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

toyRouter.get("/", (req, res) => {
    res.send(toyArry)
})

module.exports = toyRouter

