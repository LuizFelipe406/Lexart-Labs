import { Request, Response } from "express";
import ProductService from "../services/product-service";
import bodySchema from "../validation/joi-validator";


export default class ProductController {
  constructor(private productService: ProductService) {}

  async create(req: Request, res: Response){
    const { error } = bodySchema.validate(req.body)
    if (error) {
      res.status(400).json(error.message)
    }

    const insertedValues = await this.productService.create(req.body.filter, req.body.products)

    res.status(201).json(insertedValues)
  }
}