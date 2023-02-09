import "./Product.css";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import { getProductImageURL } from "../../utilities/ProductImageUtility";
import Price from "../price/Price";

function Product() {
  let { productId } = useParams();
  const [product, setProduct] = useState();
  const getProductData = useCallback(async () => {
    /* Fetches the product with product ID param */
    const response = await fetch(
      `http://localhost:3001/products?id=${productId}`
    );
    const products = await response.json();
    setProduct(products[0]);
  }, [productId]);

  useEffect(() => {
    getProductData();
  }, [getProductData]);

  let productCard;

  if (product) {
    productCard = (
      <div className="productCard">
        <div className="image">
          <img
            alt={product.name}
            src={getProductImageURL(product.productImage)}
          />
        </div>
        <div className="productName">{product.name}</div>
        <div className="productDescription">{product.description}</div>
        <div className="productPrice">
          <Price product={product} />
        </div>
        <div className="button">
          <button
            onClick={() => {
              alert("Varan har lagts till i varukorgen");
            }}
          >
            Köp
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product">
      <a className="backButton" href="/">
        <Icon path={mdiArrowLeft} size={1.5} />
      </a>
      {productCard}
    </div>
  );
}
export default Product;
