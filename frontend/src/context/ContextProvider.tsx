import React, { PropsWithChildren, useState } from "react";
import Context, { Filters, Product } from ".";
import { searchInBuscape } from "../api/Buscape";
import { searchInMercadoLivre } from "../api/MercadoLivre";

function ContextProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>([]);

  const searchProducts = async (filters: Filters) => {
    if (filters.source === "MercadoLivre") {
      const results = await searchInMercadoLivre(filters);
      setProducts(results)
    }
    
    if (filters.source === "Buscape") {
      const results = await searchInBuscape(filters);
      setProducts(results)
    }
  }

  const contextValue = {
    products,
    searchProducts
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default ContextProvider
