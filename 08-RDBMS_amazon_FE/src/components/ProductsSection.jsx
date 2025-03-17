import React, { useEffect, useState } from "react";
import api from "../api/index.api";

function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [favoriteProductIds, setFavoriteProductIds] = useState([]);

  const handleClickLikeButton = async (productId) => {
    await api.products.likeProduct(productId);
  };

  const handleClickRefreshFavoriteProducts = () => {
    api.users
      .getFavoriteProducts()
      .then((result) => setFavoriteProductIds(result));
  };

  const checkIsFavoriteProduct = (productId) => {
    return favoriteProductIds.includes(productId);
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
            <span
              style={{
                color: checkIsFavoriteProduct(product.id) ? "red" : "black",
              }}
            >
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
