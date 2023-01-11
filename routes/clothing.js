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

//get all
clothingRouter.get("/", (req, res) => {
    res.send(clothing)
})

//get one 
clothingRouter.get("/:name", (req, res) => {
    const clothingName = req.query.name
    const filteredClothing = clothing.filter(clothing => clothing.name === clothingName)
    res.send(filteredClothing)
})

module.exports = clothingRouter