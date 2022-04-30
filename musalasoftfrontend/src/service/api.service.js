import httpConnect from "../http-common"

class GatewayService {
    getAllGateway() {
        return httpConnect.get("/gateway")
    }
    registerGateway(data) {
        return httpConnect.post("/gateway", data)
    }
}

export default GatewayService;