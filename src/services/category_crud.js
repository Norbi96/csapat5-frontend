import protectedApi from '../api/protectedApi';

export const createCategory = (data) => {
  return protectedApi.post('/api/categories', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const findAllCategory = (state = () => {}, queryString = '') => {
  return protectedApi.get(`/api/categories?${queryString}`).then((resp) => state(resp.data));
};

export const findCategory = (id, state = () => {}) => {
  return protectedApi.get(`/api/categories/${id}`).then((resp) => state(resp.data.product));
};

export const updateCategory = async (id, data) => {
  try {
    const response = await protectedApi.patch(`/api/categories/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
};

export const deleteCategory = (id) => {
  return protectedApi.delete(`/api/categories/${id}`);
};
