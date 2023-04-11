import { createContext } from "react";

export type Filters = {
  name: string;
  category: "TV" | "Mobile" | "Refrigerator";
  source: string;
}

export type Product = {
  id: string;
  description: string;
  photo: string;
  price: number | string;
  category: string;
  website: string;
}

interface IContext {
  products: Product[];
  searchProducts: (filters: Filters) => void;
}

const defaultContext: IContext = {
  products: [],
  searchProducts: function (filters: Filters): void {
    throw new Error(`Function not implemented. ${filters}`);
  },
}

const Context = createContext(defaultContext);

export default Context;
