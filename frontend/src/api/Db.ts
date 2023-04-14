import axios from "axios"
import { IFilter } from "../interfaces/IFilter";
import { IProduct } from "../interfaces/IProduct";


export const searchInDB = async ({ source, category, name }: IFilter): Promise<IProduct[] | null> => {
  const url = process.env.DB_URL || "http://localhost:3001"
  const endpoint = `${url}/product/${source}/${category}/${name || "null"}`
    const { status, data } = await axios.get(endpoint)
      .then(({ status, data }) => ({ status, data }))
      .catch((error) => error.toJSON());
    
    if (status === 200) return data;

    return null
}

export const insertInDb = async (filter: IFilter, products: IProduct[]) => {
  const url = process.env.DB_URL || "http://localhost:3001"
  const endpoint = `${url}/product`
  const { status, data } = await axios.post(endpoint, {
    filter,
    products
  })

  if (status === 201) console.log(data)
}