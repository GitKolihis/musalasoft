import {
    v4 as uid
} from "uuid"
import DevicesDAO from "../dao/deviceDAO.js"
import GatewaysDAO from "../dao/gatewayDAO.js"

export default class DevicesController {

    //method to add new device
    static async apiAddDevice(req, res, next) {
        try {
            const vendor = req.body.vendor
            const id = uid();
            const status = req.body.status

            //check if the vendor exist
            const check = await GatewaysDAO.findVendor(vendor);

            if (check != null) {
                //count number of devices registered with the vendor
                const totalNum = await DevicesDAO.countDevice(vendor);
                console.log(totalNum)

                if ( totalNum.length <= 9) {
                    //it exist then proceed to register the device
                    const response = await DevicesDAO.addDevice(id, vendor, status)

                    return res.json({
                        status: "success",
                        message: "Device Registered!",
                        data: response
                    })
                } else {
                    return res.json({
                        status: "success",
                        message: "Gateway exceeded number of devices allowed!",
                    })
                }

            } else {
                //the gatewate is not valid
                return res.json({
                    status: "success",
                    message: "Invalid Vendor"
                })
            }

        } catch (error) {
            console.error(`MUSALASOFTAPI: Unable to Post Device: ${error}`);
        }
    }

    //method to delete device
    static async apiDeleteDevice(req, res, next) {
        try {
            const vendor = req.body.vendor
            const device = req.body.device

            const response = await DevicesDAO.deleteDevice(vendor, device)
            return res.json({
                status: "success",
                message: "Device deleted!",
                data: response
            })
        } catch (error) {
            console.error(`MUSALASOFTAPI: Unable to Post Device: ${error}`);
        }
    }

    //method to update each device
    static async apiUpdateDevice(req, res, next) {
        try {
            const device = req.body.device
            const status = req.body.status

            const response = await DevicesDAO.updateDevice(device, status);
            return res.json({
                status: "success",
                message: "Device updated!",
                data: response
            })
        } catch(error) {
            console.error(`MUSALASOFTAPI: Unable to Post Device: ${error}`);
        }
    }
}