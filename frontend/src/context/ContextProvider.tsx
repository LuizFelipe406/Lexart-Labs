import React, { PropsWithChildren, useState } from "react";
import Context, { Filters } from ".";
import { searchInMercadoLivre } from "../api/MercadoLivre";

function ContextProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<object[]>([]);

  const searchProducts = async (filters: Filters) => {
    if (filters.source === "MercadoLivre") {
      const result = await searchInMercadoLivre(filters);
      setProducts(result)
    }
  }

  const contextValue = {
    products,
    searchProducts
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default ContextProvider
