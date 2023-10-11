import protectedApi from '../api/protectedApi';

export const findAllUsers = (state = () => {}, queryString = '') => {
  return protectedApi.get(`/api/users?${queryString}`).then((resp) => state(resp.data));
};

export const findUser = async (id) => {
  return protectedApi.get(`/api/users/${id}`);
};

export const updateUser = async (id, data) => {
  return protectedApi.patch(`/api/users/${id}`, data).then((resp) => resp.data);
};
export const editUserAdmin = async (id, data) => {
  return protectedApi.patch(`/api/users/useradmin/${id}`, data).then((resp) => resp.data);
};

export const deleteUser = async (id) => {
  return await protectedApi.delete(`/api/users/${id}`);
};
export const getNewToken = async (id) => {
  return await protectedApi.post(`/auth/verify/`);
};
