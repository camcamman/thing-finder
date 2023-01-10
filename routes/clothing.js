const express = require("express")
const clothingRouter = express.Router()

const clothing = [
    {
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    }
]

clothingRouter.get("/", (req, res) => {
    res.send(clothing)
})

module.exports = clothingRouter