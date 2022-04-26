import express from "express"
import cors from "cors"
import gateway from "./route/gateway.route.js"
import devices from "./route/devices.route.js"


const app = express();
app.use(cors())
app.use(express.json())

//Route registering
app.use("/api/v1/musalasoft", gateway)
app.use("/api/v1/musalasoft", devices)

//bounce fake access
app.use("*", (req, res) => {
    res.status(404).json({
        errorMessage: "Invalid Resource(s)"
    })
})


export default app;