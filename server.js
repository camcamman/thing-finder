const express = require('express')
const app = express()
const port = 3003

//routes 
// app.use("/things", require("./routes/things"))
app.use("/food", require("./routes/food"))
app.use("/clothing", require("./routes/clothing"))
app.use("/toy", require("./routes/toy"))

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})