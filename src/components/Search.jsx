
import React, { useState } from "react";
import category from "./category.json";
import products from "./products.json";
import './Search.css'

function Search() {
  const [search, setSearch] = useState("");
  const [selectcategory, setSelectCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      selectcategory === "All" ||
      product.category === selectcategory;  

    return nameMatch && categoryMatch;
  });

  return (
    <div>
      <div className="search">
        <input
          className="input"
          type="search"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="dropdown"
          value={selectcategory}
          onChange={(e) => setSelectCategory(e.target.value)}
        >
          {category.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className='container'>
        {filteredProducts.map((product) => (
         <div key={product.id} className='card' >
          {<img src={product.img} alt="" className='image' ></img>}
            <h2 className='name'>{product.name}</h2>
            <h3 className='category'>{product.category}</h3>
            <h3 className='price'>₹{product.price}</h3>
            <h2 className='stock'>{product.stockQuantity}</h2>
            <p className='description'>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;

