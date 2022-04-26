import * as generate from "crypto";
import GatewaysDAO from "../dao/gatewayDAO.js";
import IP from 'validate-ip-node'

export default class GatewaysController {

  //method to add new Gateway
  static async apiAddGateway(req, res, next) {
    try {

      if (!IP(req.body.ip)) {
        return res.json({
          status: "Bad Request",
          message: "Invalid IP Address"
        })
      }

      const g_unique = generate.randomBytes(16).toString("hex");
      const name = req.body.name;
      const ip = req.body.ip;
      const device = []

      const response = await GatewaysDAO.addGateway(g_unique, name, ip, device)

      res.json({
        status: "success",
        message: response,
      });
    } catch (error) {
      console.error(`MUSALASOFTAPI: Unable to Post Controller Gateway: ${error}`);
    }
  }

  //method to get all registered gateway
  static async apiGetGateway(req, res, next) {
    try {
      const response = await GatewaysDAO.getGateways();
      res.json({
        status: "success",
        data: response
      })
    } catch (error) {
      console.error(`MUSALASOFTAPI: Unable to GET Controller Gateway: ${error}`);
    }
  }
}