import React, { PropsWithChildren, useState } from "react";
import Context from ".";
import { searchInBuscape } from "../api/Buscape";
import { searchInMercadoLivre } from "../api/MercadoLivre";
import { IFilter } from "../interfaces/IFilter";
import { IProduct } from "../interfaces/IProduct";

function ContextProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<IProduct[]>([]);

  const searchProducts = async (filters: IFilter) => {
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
