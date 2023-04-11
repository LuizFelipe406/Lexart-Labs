import { Filters, Product } from "../context";

interface ApiProduct {
  id: string;
  title: string;
  price: string;
  website: string;
  image: string;
}

export const searchInBuscape = async ({ category, name }: Filters): Promise<Product[]> => {
  const endpoint = `http://localhost:3002/search/${category}/${name || "null"}`;
  const request = await fetch(endpoint);
  const result: ApiProduct[] = await request.json()
  return result.map(product => ({
    id: product.id,
    description: product.title,
    photo: product.image,
    price: product.price.replace(/[^\d.,]*/g, ''),
    website: product.website,
    category: category,
  }))
}