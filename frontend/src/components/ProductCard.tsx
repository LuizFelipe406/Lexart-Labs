import React from "react"
import { Product } from "../context"

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <img src={product.photo} alt={`Product ${product.description} image`} />
      <span>{product.category}</span>
      <h2>{product.description}</h2>
      <span>{product.price}</span>
      <span>From:</span><a target="_blank" href={product.website} rel="noreferrer">{product.website}</a>
    </div>
  )
}

export default ProductCard
