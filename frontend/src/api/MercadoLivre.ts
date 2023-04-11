import { Filters } from "../context";

const CATEGORIES = {
  "TV": "MLB1002",
  "Mobile": "MLB1055",
  "Refrigerator": "MLB181294"
}

interface ApiProduct {
  id: string;
  title: string;
  price: number;
  permalink: string;
  thumbnail: string;
}

export const searchInMercadoLivre = async ({ category, name }: Filters): Promise<ApiProduct[]> => {
  const categoryId = CATEGORIES[category]
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${name}`;
  const request = await fetch(endpoint);
  const result = await request.json()
  return result.results
}