import "./Price.css";

/* Returns the product price, including discounted price on products with campaign without decimals. */
function Price({ product }) {
  if (product.campaign) {
    if (product.campaign.discountPercent < 100) {
      const newPrice =
        product.price * ((100 - product.campaign.discountPercent) / 100);
      if (newPrice > 0) {
        return (
          <div className="price">
            <span className="campaignName">{product.campaign.name}</span>
            <span style={{ marginLeft: "5px", color: "#db2326" }}>
              {Math.round(newPrice.toFixed(0))}:-
            </span>
            <span style={{ marginLeft: "5px", textDecoration: "line-through" }}>
              {product.price.toFixed(0)}:-
            </span>
          </div>
        );
      }
    }
  }

  return (
    <div className="price">{Math.round(product.price.toFixed(0)) + ":-"}</div>
  );
}

export default Price;
