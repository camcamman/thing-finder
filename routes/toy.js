const express = require("express")
const toyRoutes = express.Router()

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

toyRoutes.get("/", (req, res) => {
    res.send(toyArry)
})

module.exports = toyRoutes