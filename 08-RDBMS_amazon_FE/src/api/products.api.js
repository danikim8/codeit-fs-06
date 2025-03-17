import { client } from "./index.api";

const getAllProducts = async () => {
  const response = await client.get("/products");
  const result = response.data;

  return result;
};

const likeProduct = async (productId) => {
  const response = await client.put(`/products/${productId}/like`);
  const result = response.data;

  return result;
};

const unlikeProduct = async (productId) => {
  const response = await client.delete(`/products/${productId}/like`);
  const result = response.data;

  return result;
};

const productsAPI = {
  getAllProducts,
  likeProduct,
  unlikeProduct,
};

export default productsAPI;
