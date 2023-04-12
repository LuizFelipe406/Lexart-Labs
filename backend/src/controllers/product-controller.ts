import { Request, Response } from "express";
import ProductService from "../services/product-service";
import bodySchema from "../validation/joi-validator";


export default class ProductController {
  constructor(private productService: ProductService) {}

  async create(req: Request, res: Response) {
    const { error } = bodySchema.validate(req.body)
    if (error) {
      res.status(400).json(error.message)
    }

    const insertedValues = await this.productService.create(req.body.filter, req.body.products)

    res.status(201).json(insertedValues)
  }

  async getAll(req: Request, res: Response) {
    try {
      const { category, name, source } = req.params;
      const products = await this.productService.getAll({ category, name: name || "", source })

      res.status(200).json(products)

    } catch (error) {
      if (error instanceof Error) res.status(404).json(error.message)

      res.sendStatus(500)
    }
  }
}