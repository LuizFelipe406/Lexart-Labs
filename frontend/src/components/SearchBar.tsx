import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useContext, useState } from "react";
import Context from "../context";
import { IFilter } from "../interfaces/IFilter";
import Button from "@mui/material/Button";

function SearchBar() {
  const [filters, setFilters] = useState<IFilter>({
    name: "",
    category: "",
    source: ""
  })
  const { searchProducts } = useContext(Context)

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target

    setFilters((oldState) => ({
      ...oldState,
      [name]: value
    }))
  }

  const handleSelectChange = ({ target }: SelectChangeEvent) => {
    const { name, value } = target

    setFilters((oldState) => ({
      ...oldState,
      [name]: value
    }))
  }

  return (
    <div>
      <TextField
        label="Type something to search"
        variant="outlined"
        type="text"
        name="name"
        value={filters.name}
        onChange={handleInputChange}
      />
      <FormControl>
        <InputLabel id="source-label">Source</InputLabel>
        <Select
          labelId="source-label"
          label="source"
          name="source"
          value={filters.source}
          onChange={handleSelectChange}
        >
          <MenuItem value="MercadoLivre">Mercado Livre</MenuItem>
          <MenuItem value="Buscape">Buscape</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          label="category"
          name="category"
          value={filters.category}
          onChange={handleSelectChange}
        >
          <MenuItem value="Mobile">Mobile</MenuItem>
          <MenuItem value="Refrigerator">Refrigerator</MenuItem>
          <MenuItem value="TV">TV</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        type="button"
        onClick={() => searchProducts(filters)}
      >
        Search
      </Button>
    </div>
  )
}

export default SearchBar;
