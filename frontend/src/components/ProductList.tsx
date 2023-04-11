import React, { useContext } from "react"
import Context from "../context"
import ProductCard from "./ProductCard"

function ProductList() {
  const { products } = useContext(Context)

  return (
    <div>
      {
        products.length > 0 && products.map(product => <ProductCard key={product.id} product={product}/>)
      }
    </div>
  )
}

export default ProductList
