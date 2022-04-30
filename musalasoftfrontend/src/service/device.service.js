import httpConnect from "../http-common"

class DeviceService {
    getAllDevice() {
        return httpConnect.get("/device")
    }
    registerDevice(data) {
        return httpConnect.post("/device", data)
    }
    updateDevice(data) {
        return httpConnect.put("/device", data)
    }
    deleteDevice(data) {
        return httpConnect.delete("/device", data)
    }
}

export default DeviceService;