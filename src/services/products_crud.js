import protectedApi from '../api/protectedApi';
import publicApi from '../api/publicApi';

export const createProduct = (data) => {
  return protectedApi.post('/api/products', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const findAllProducts = (state = () => {}, queryString = '') => {
  return publicApi.get(`/api/products?${queryString}`).then((resp) => state(resp.data));
};

export const findProduct = (id, state = () => {}) => {
  return publicApi.get(`/api/products/${id}`).then((resp) => state(resp.data.product));
};

export const updateProduct = async (id, data) => {
  try {
    const response = await protectedApi.patch(`/api/products/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

export const deleteProduct = (id) => {
  return protectedApi.delete(`/api/products/${id}`);
};
