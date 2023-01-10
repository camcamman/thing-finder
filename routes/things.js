const express = require('express')
const thingsRouter = express.Router() 

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
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
thingsRouter.get("/", (req, res) => {
    res.send(inventoryItems)
})

//get one
thingsRouter.get("/:type", (req, res) => {
    const thingType = req.query.type
    const filteredThing = inventoryItems.filter(theThing => theThing.type === thingType)
    res.send(filteredThing)
})

module.exports = thingsRouter