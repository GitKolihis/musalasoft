import express from "express"
import DevicesController from "../controller/device.controller.js"

const router = express.Router()

router.route("/device")
.post(DevicesController.apiAddDevice)
.get()
.put(DevicesController.apiUpdateDevice)
.delete(DevicesController.apiDeleteDevice)

export default router;