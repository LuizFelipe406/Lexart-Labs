import React, { useContext } from "react"
import Context from "../context"
import ProductCard from "./ProductCard"

function ProductList() {
  const { products } = useContext(Context)

  return (
      <div className="w-screen mt-24 grid grid-cols-4 justify-items-center col-auto gap-y-4">
        {
          products.length > 0 && products.map(product => <ProductCard key={product.id} product={product}/>)
        }
      </div> 
  )
}

export default ProductList
