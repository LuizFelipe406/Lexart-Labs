import React, { PropsWithChildren, useState } from "react";
import Context, { Filters, Product } from ".";
import { searchInMercadoLivre } from "../api/MercadoLivre";

function ContextProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>([]);

  const searchProducts = async (filters: Filters) => {
    if (filters.source === "MercadoLivre") {
      const results = await searchInMercadoLivre(filters);
      const correctedResults: Product[] = results.map(result => ({
        id: result.id,
        description: result.title,
        photo: result.thumbnail,
        price: result.price,
        category: filters.category,
        website: result.permalink
      }))
      setProducts(correctedResults)
    }
  }

  const contextValue = {
    products,
    searchProducts
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default ContextProvider
