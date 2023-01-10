const express = require('express')
const app = express()
const port = 3003

app.use("/things", require("./routes/things"))
app.use("/food", require("./routes/food"))

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})