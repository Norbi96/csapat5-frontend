import protectedApi from '../api/protectedApi';
import publicApi from '../api/publicApi';

export const createOrder = (data) => {
  return publicApi.post('/api/orders', data);
};

export const findAllOrders = (state = () => {}, queryString = '') => {
  return protectedApi.get(`/api/orders?${queryString}`).then((resp) => state(resp.data));
};

export const findOrder = (userId) => {
  return protectedApi.get(`/api/orders/${userId}/profileorders`);
};

// export const updateProduct = async (id, data) => { };

export const deleteOrder = (id) => {
  return protectedApi.delete(`/api/orders/${id}`);
};
