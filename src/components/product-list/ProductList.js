import "./ProductList.css";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import { getProductImageURL } from "../../utilities/ProductImageUtility";
import Price from "../price/Price";

/* Creating list of fetched products */
function ProductList() {
  const [products, setProducts] = useState();
  const [searchText, setSearchText] = useState();
  const getProductData = useCallback(async () => {
    const response = await fetch("http://localhost:3001/products");
    const products = await response.json();
    setProducts(products);
  }, []);

  useEffect(() => {
    getProductData();
  }, [getProductData]);

  /* Triggers when the search input field changes and sets its value to the state */
  function onSearchChange(searchText) {
    setSearchText(searchText);
  }

  const productList = [];
  if (products) {
    for (const product of products) {
      /* Validates the product. If search text has been set in the state it will filter the products based on their name. */
      if (
        product.id &&
        product.productImage &&
        (!searchText ||
          product.name.toLowerCase().includes(searchText.toLowerCase())) &&
        product.price > 0
      ) {
        productList.push(
          <Link key={product.id} to={`/products/${product.id}`}>
            <div className="card">
              <div className="image">
                <img
                  alt={product.name}
                  src={getProductImageURL(product.productImage)}
                />
              </div>
              <div className="productName">{product.name}</div>
              <div className="productPrice">
                <Price product={product} />
              </div>
            </div>
          </Link>
        );
      }
    }
  }

  return (
    <div className="productListContainer">
      <Search onChange={onSearchChange} />
      <div className="productList">
        <div className="list">{productList}</div>
      </div>
    </div>
  );
}

export default ProductList;
