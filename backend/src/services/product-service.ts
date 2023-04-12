import IFilter from "../interfaces/Filter";
import IProduct from "../interfaces/Product";
import FilterModel from "../models/filter-model";
import ProductModel from "../models/product-model";

export default class ProductService {
  constructor (private productModel: ProductModel, private filterModel: FilterModel) {}

  async create(filter: IFilter, products: IProduct[]) {
    const newFilter = await this.filterModel.create(filter)

    const insertedProducts: IProduct[] = []
    await Promise.all(
      products.map(async (product) => {
        const newProcut = await this.productModel.create({ ...product }, newFilter.id);
        insertedProducts.push(newProcut);
      })
    )

    return {
      filter: newFilter.dataValues,
      products: insertedProducts
    }
  }
}