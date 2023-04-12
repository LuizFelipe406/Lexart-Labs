import Product from "../database/models/Product";
import IProduct from "../interfaces/Product";

export default class ProductModel {
  async create(product: IProduct, filterId: number) {
    const newProduct = await Product.create({
      ...product,
      filterId
    })

    return newProduct
  }

  async getAll(filterId: number) {
    const products = await Product.findAll({ where: { filterId } })

    return products
  }
}