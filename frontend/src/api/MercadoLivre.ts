import { IFilter } from "../interfaces/IFilter";
import { IProduct } from "../interfaces/IProduct";

const CATEGORIES = {
  TV: "MLB1002",
  Mobile: "MLB1055",
  Refrigerator: "MLB181294",
  "": null
}

interface ApiProduct {
  id: string;
  title: string;
  price: number;
  permalink: string;
  thumbnail: string;
}

export const searchInMercadoLivre = async ({ category, name }: IFilter): Promise<IProduct[]> => {
  const categoryId = CATEGORIES[category]
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${name}`;
  const request = await fetch(endpoint);
  const { results }: { results: ApiProduct[] } = await request.json()
  console.log(results[0])
  const correctedResults = results.map(result => ({
    id: result.id,
    description: result.title,
    photo: result.thumbnail.replace("-I.jpg", "-O.webp"),
    price: result.price.toString(),
    category: category,
    website: result.permalink
  }))
  return correctedResults
}