import axios from 'axios';
import { API_URL } from '../constants';

const protectedApi = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json, application/xml, text/plain, text/html',
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});

export default protectedApi;
