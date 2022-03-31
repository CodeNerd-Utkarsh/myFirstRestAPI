// imports

import express from "express"
import bodyParser from "body-parser"

import userRoutes from "./routes/userRoutes.js"

// app config
const PORT = process.env.PORT || 5000
const app = express()

// middlewares
app.use(bodyParser.json())
// custom Routes
app.use("/users", userRoutes)
// app routes
app.get("/", (req, res) => {
    console.log("homepage request")
    res.send("Hello World!")
})



// app start
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
})
