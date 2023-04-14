import { IFilter } from "../interfaces/IFilter";
import { IProduct } from "../interfaces/IProduct";


interface ApiProduct {
  id: string;
  title: string;
  price: string;
  website: string;
  image: string;
}

export const searchInBuscape = async ({ category, name }: IFilter): Promise<IProduct[]> => {
  const url = import.meta.env.VITE_SCRAPER_URL || "http://localhost:3002"
  console.log(import.meta.env.VITE_SCRAPER_URL)
  const endpoint = `${url}/search/${category}/${name || "null"}`;
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