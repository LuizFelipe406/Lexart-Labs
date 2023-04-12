import express from "express";
import makeProductController from "../factories/product-factory";

const router = express.Router();

const controller = makeProductController();

router.post('/', (req, res) => controller.create(req, res))

export default router
