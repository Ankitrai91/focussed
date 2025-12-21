import { categoriesDB } from "../../data/categoriesDB";

export default function ProductDisplay({
  category,
  subCategory,
}) {
  let products = [];

  if (category === "Non-Ferrous Metals" && subCategory) {
    products =
      categoriesDB["Non-Ferrous Metals"]?.[subCategory] || [];
  } else {
    products = categoriesDB[category] || categoriesDB.default;
  }

  return (
    <div className="fade-in">
      <h2>
        {subCategory ? `${category} / ${subCategory}` : category}
      </h2>

      <div className="grid-container">
        {products.length === 0 && (
          <p>No products available.</p>
        )}

        {products.map(prod => (
          <div key={prod.id} className="grid-card product-card">
            <img src={prod.img} alt="product" />
            <h4>{prod.name }</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
