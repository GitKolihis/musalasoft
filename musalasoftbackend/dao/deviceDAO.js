let devices;

export default class DevicesDAO {
    //connection to the databse
    static async injectDB(conn) {
        if (devices) {
            return;
        }

        try {
            devices = await conn.db(process.env.GATEWAY_DB).collection("devices")
        } catch (error) {
            console.error(`MUSALASOFTAPI: Unable to Connect Devices Collection to databse: ${error}`);
        }
    }

    //method to add new device to a gateway
    static async addDevice(uid, vendor, status) {
        try {
            const deviceDoc = {
                uid: uid,
                vendor: vendor,
                date_created: new Date(),
                status: status
            }

            return await devices.insertOne(deviceDoc)
        } catch (error) {
            console.error(`MUSALASOFTAPI: Unable to Post Device: ${error}`);
        }
    }

    //method to count number of already registred devices per vendor
    static async countDevice(vendor) {
        try {
            return await devices.find({
                vendor: vendor
            }).toArray()
        } catch (error) {
            console.error(`MUSALASOFTAPI: Unable to Count Devices: ${error}`);
        }
    }

    //method to delete device
    static async deleteDevice(vendor, device) {
        try {
            const response = await devices.deleteOne({
                vendor: vendor,
                uid: device
            })

            return response
        } catch (error) {
            console.error(`MUSALASOFTAPI: Unable to Delete Device: ${error}`);
        }
    }

    //method to update device status
    static async updateDevice(device, sta) {
        try {
            const response = await devices.updateOne({
                "uid": device
            }, {
                $set: {
                    "status": sta
                }
            })
            return response
        } catch (error) {
            console.error(`MUSALASOFTAPI: Unable to Update Device: ${error}`);
        }
    }
}