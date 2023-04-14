import React, { PropsWithChildren, useState } from "react";
import Context from ".";
import { searchInBuscape } from "../api/Buscape";
import { insertInDb, searchInDB } from "../api/Db";
import { searchInMercadoLivre } from "../api/MercadoLivre";
import { IFilter } from "../interfaces/IFilter";
import { IProduct } from "../interfaces/IProduct";

function ContextProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<IProduct[]>([]);

  const searchProducts = async (filters: IFilter) => {
    // const productsInDb = await searchInDB(filters)
    // if (productsInDb) {
    //   setProducts(productsInDb)
    // } else {
      if (filters.source === "MercadoLivre") {
        const results = await searchInMercadoLivre(filters);
        setProducts(results)
        insertInDb(filters, results)
      }
      
      if (filters.source === "Buscape") {
        const results = await searchInBuscape(filters);
        setProducts(results)
        insertInDb(filters, results)
      }
    }
    // }

  const contextValue = {
    products,
    searchProducts
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default ContextProvider
