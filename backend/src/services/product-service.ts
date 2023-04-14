import IFilter from "../interfaces/Filter";
import IProduct from "../interfaces/Product";
import FilterModel from "../models/filter-model";
import ProductModel from "../models/product-model";

export default class ProductService {
  constructor (private productModel: ProductModel, private filterModel: FilterModel) {}

  async create(filter: IFilter, products: IProduct[]) {
    const newFilter = await this.filterModel.create({ ...filter, name: filter.name ? filter.name.toLowerCase() : null });

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

  async getAll(filter: IFilter) {
    const filterInDB = await this.filterModel.get({...filter, name: filter.name === "null" ? null : filter.name})
    if (!filterInDB) {
      throw new Error("Filter not found")
    }

    const products = await this.productModel.getAll(filterInDB.id)

    return products
  }
}