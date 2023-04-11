import React, { useState } from "react";

function SearchBar() {
  const [filters, setFilters] = useState({
    name: "",
    category: "",
    source: ""
  })

  const handleChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = currentTarget

    setFilters((oldState) => ({
      ...oldState,
      [name]: value
    }))
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        value={filters.name}
        onChange={handleChange}
      />
      <select
        name="source"
        value={filters.source}
        onChange={handleChange}
      >
        {filters.source === "" && <option value=""></option>}
        <option value="MercadoLivre">Mercado Livre</option>
        <option value="Buscape">Buscape</option>
      </select>
      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
      >
        {filters.category === "" && <option value=""></option>}
        <option value="Mobile">Mobile</option>
        <option value="Refrigerator">Refrigerator</option>
        <option value="TV">TV</option>
      </select>
      <button
        type="button"
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar;
