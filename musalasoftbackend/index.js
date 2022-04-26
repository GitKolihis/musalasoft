import GatewaysDAO from "./dao/gatewayDAO.js";
import DevicesDAO from "./dao/deviceDAO.js"
import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.GATEWAY_DB_URI, {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
    })
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
    .then(async (client) => {
        //make sure the collections are connected to before listing to call via the port
        await GatewaysDAO.injectDB(client);
        await DevicesDAO.injectDB(client);

        app.listen(port, () => {
            console.log(`MUSALASOFTAPI: ${port}`);
        })
    })