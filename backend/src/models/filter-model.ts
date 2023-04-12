import Filter from "../database/models/Filter";
import IFilter from "../interfaces/Filter";

export default class FilterModel {
  async create(filter: IFilter) {
    const newFilter = await Filter.create({ ...filter })
    return newFilter
  }
}