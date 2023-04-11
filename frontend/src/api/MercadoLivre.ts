import { Filters, Product } from "../context";

const CATEGORIES = {
  TV: "MLB1002",
  Mobile: "MLB1055",
  Refrigerator: "MLB181294"
}

interface ApiProduct {
  id: string;
  title: string;
  price: number;
  permalink: string;
  thumbnail: string;
}

export const searchInMercadoLivre = async ({ category, name }: Filters): Promise<Product[]> => {
  const categoryId = CATEGORIES[category]
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${name}`;
  const request = await fetch(endpoint);
  const { results }: { results: ApiProduct[] } = await request.json()
  const correctedResults = results.map(result => ({
    id: result.id,
    description: result.title,
    photo: result.thumbnail,
    price: result.price,
    category: category,
    website: result.permalink
  }))
  return correctedResults
}