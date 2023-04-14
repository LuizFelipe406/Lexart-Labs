import { createContext } from "react";
import { IFilter } from "../interfaces/IFilter";
import { IProduct } from "../interfaces/IProduct";

interface IContext {
  products: IProduct[];
  searchProducts: (filters: IFilter) => void;
}

const defaultContext: IContext = {
  products: [],
  searchProducts: function (filters: IFilter): void {
    throw new Error(`Function not implemented. ${filters}`);
  },
}

const Context = createContext(defaultContext);

export default Context;
