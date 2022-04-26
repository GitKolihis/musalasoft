import express from "express";
import GatewaysController from "../controller/gateway.controller.js";

const router = express.Router();

router
  .route("/gateway")
  .post(GatewaysController.apiAddGateway)
  .put()
  .get(GatewaysController.apiGetGateway)
  .delete();

export default router;
