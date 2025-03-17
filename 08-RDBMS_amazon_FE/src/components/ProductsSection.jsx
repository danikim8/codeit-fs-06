import React, { useEffect, useState } from "react";
import api from "../api/index.api";

function ProductsSection() {
  const [products, setProducts] = useState([]);

  const handleClickLikeButton = async (productId) => {
    await api.products.likeProduct(productId);
  };

  const handleClickRefreshFavoriteProducts = () => {
    api.users
      .getFavoriteProducts()
      .then((result) => console.log("찜한 상품들: ", result));
  };

  useEffect(() => {
    api.products.getAllProducts().then((result) => setProducts(result));
  }, []);

  return (
    <section>
      <h2>상품 목록</h2>
      <button onClick={handleClickRefreshFavoriteProducts}>찜 새로고침</button>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>
              "{product.name}" ({product.price.toLocaleString()}원)
            </span>

            <button onClick={() => handleClickLikeButton(product.id)}>
              찜하기
            </button>
          </li>
        ))}
      </ul>

      <hr />
    </section>
  );
}

export default ProductsSection;
