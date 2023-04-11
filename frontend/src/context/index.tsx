import { createContext } from "react";

export type Filters = {
  name: string;
  category: "TV" | "Mobile" | "Refrigerator";
  source: string;
}

const defaultContext = {
  products: [{}],
  searchProducts: function (filters: Filters): void {
    throw new Error(`Function not implemented. ${filters}`);
  },
}

const Context = createContext(defaultContext);

export default Context;
