import mongodb from "mongodb";

let gateways;

export default class GatewaysDAO {
  //connection to the databse
  static async injectDB(conn) {
    if (gateways) {
      return;
    }

    try {
      gateways = await conn.db(process.env.GATEWAY_DB).collection("gateways");
    } catch (e) {
      console.error(
        `MUSALASOFTAPI: Unable to establish collection handles in gatewaysDAO. ${e}`
      );
    }
  }

  //method to add gatewat
  static async addGateway(serial, name, ip, devices) {
    try {
      const gatewayDoc = {
        gatewayId: serial,
        name: name,
        ipv4: ip,
        date_created: new Date(),
      };

      return await gateways.insertOne(gatewayDoc);
    } catch (err) {
      console.error(`MUSALASOFTAPI: Unable to Post Gateway: ${err}`);
    }
  }

  //method to get all gateways
  static async getGateways() {
    try {
      return await gateways.find({}).toArray()
    } catch (error) {
      console.error(`MUSALASOFTAPI: Unable to Get Gateway: ${error}`);
    }
  }

  //method to find a particular gateway
  static async findVendor(id) {
    try {
      const data = {
        gatewayId: id
      }
      return await gateways.findOne(data)
    } catch (error) {
      console.error(`MUSALASOFTAPI: Unable to find Vendor in Gateway: ${error}`);
    }
  }

  //method to check if a filed exist
  static async findSerial(id) {
    try {
      const search = {
        serial: id,
      };
      let data = gateways.findOne(search);
      if (data === null) {
        return false;
      } else {
        return true;
      }
    } catch (err) {
      console.error(`MUSALASOFTAPI: Unable to Post Gateway: ${err}`);
    }
  }
}