import React from "react"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IProduct } from "../interfaces/IProduct"

type ProductCardProps = {
  product: IProduct
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <a target="_blank" href={product.website} rel="noreferrer" className="transition h-full w-3/4 rounded-lg shadow-lg hover:scale-105 bg-white border">
      <div
        style={{
          backgroundImage: `url(${product.photo})`,
        }}
        className="h-60 bg-contain bg-no-repeat bg-center border-b"
      ></div>
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {product.category}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
        >
          {product.description}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
        >
          {`R$ ${product.price}`}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="break-all"
        >
          {`From: ${product.website}`}
        </Typography>
      </CardContent>
    </a>
  )
}

export default ProductCard
