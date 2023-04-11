import React, { createContext, PropsWithChildren, useState } from "react";

type Filters = {
  name: string;
  category: string;
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

export function ContextProvider({ children }: PropsWithChildren) {
  const [products] = useState<object[]>([]);

  const searchProducts = (filters: Filters) => {
    throw new Error(`Function not implemented. ${filters}`);
  }

  const contextValue = {
    products,
    searchProducts
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}