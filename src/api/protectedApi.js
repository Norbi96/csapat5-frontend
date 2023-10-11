import axios from 'axios';
import { API_URL } from '../constants';

const protectedApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});

export default protectedApi;
