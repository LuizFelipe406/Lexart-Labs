import React from "react";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <SearchBar />
      <ProductList />
    </div>
  )
}

export default App
