import protectedApi from '../api/protectedApi';

export const addToCart = (data) => {
  return protectedApi.post('/api/cart', data);
};
export const findAllCart = (state = () => {}) => {
  return protectedApi.get('/api/cart').then((resp) => state(resp.data.cart));
};
export const findUserCart = (userId, state = () => {}) => {
  return protectedApi.get(`/api/cart/${userId}`).then((resp) => state(resp.data.cart));
};
export const editQuantityProductInCart = async (userId, productId, data) => {
  return protectedApi.patch(`/api/cart/${userId}/${productId}`, data);
};
export const deleteOneProductFromCart = async (userId, productId) => {
  return protectedApi.delete(`/api/cart/${userId}/${productId}`);
};
export const deleteUserCart = async (userId) => {
  return protectedApi.delete(`/api/cart/${userId}`);
};
export const sendOrder = (data) => {
  return protectedApi.post('/api/orders', data);
};
