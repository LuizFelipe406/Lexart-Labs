import ProductController from "../../controllers/product-controller";
import FilterModel from "../../models/filter-model";
import ProductModel from "../../models/product-model";
import ProductService from "../../services/product-service";

const makeProductController = () => {
  const productModel = new ProductModel();
  const filterModel = new FilterModel();

  const productService = new ProductService(productModel, filterModel);

  const productController = new ProductController(productService)

  return productController
}

export default makeProductController