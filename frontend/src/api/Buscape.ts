import axios from "axios"
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
  const url = import.meta.env.MODE === "production" ? "https://lexart-labs-scraper-production.up.railway.app" : "http://localhost:3002"
  console.log(import.meta.env)
  const endpoint = `${url}/search/${category}/${name || "null"}`;
  const { data } = await axios.get(endpoint)
      .then(({ status, data }) => ({ status, data }))
      .catch((error) => error.toJSON());
  console.log("return from scraper", data)
  return data.map((product: ApiProduct) => ({
    id: product.id,
    description: product.title,
    photo: product.image,
    price: product.price.replace(/[^\d.,]*/g, ''),
    website: product.website,
    category: category,
  }))
}