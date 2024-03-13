import express from "express"
const app = express() 
const PORT = 5000

// database: 
import "./db/db.js"

// models: 
import User from "./models/User.js"

// routes:
import authRouter from "./routes/auth.js"


app.use(express.json()) // middlewear 

app.use(authRouter)





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})



