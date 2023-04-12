import axios from "axios"
import { IFilter } from "../interfaces/IFilter";
import { IProduct } from "../interfaces/IProduct";


export const searchInDB = async ({ source, category, name }: IFilter): Promise<IProduct[] | null> => {
  const endpoint = `http://localhost:3001/product/${source}/${category}/${name || "null"}`
  const { status, data } = await axios.get(endpoint)
  
  if (status === 200) return data
  return null
}

export const insertInDb = async (filter: IFilter, products: IProduct[]) => {
  const endpoint = 'http://localhost:3001/product'
  const { status, data } = await axios.post(endpoint, {
    filter,
    products
  })

  if (status === 201) console.log(data)
}