const express = require("express")
const clothingRoutes = express.Router()

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

clothingRoutes.get("/", (req, res) => {
    res.send(clothing)
})

module.exports = clothingRoutes