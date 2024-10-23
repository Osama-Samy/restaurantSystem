import express from "express"
import {connectDB} from "./database/dbConn.js"
import inventoryRouter from "./src/modules/inventory/inventory.routes.js"
import menuRouter from "./src/modules/menu/menu.routes.js"
import orderRouter from "./src/modules/order/order.routes.js"
import reservationRouter from "./src/modules/reservation/reservation.routes.js"

const app = express()

app.use(express.json())

// routes 
app.use('/api', inventoryRouter)
app.use('/api', menuRouter)
app.use('/api', orderRouter)
app.use('/api', reservationRouter)

app.use("*" , (req, res) => {
    res.send("Not Found")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server is running successfully")
})