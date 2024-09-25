import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/auth/register`, { name, email, password });
  return response.data;
};

export const createPost = async (postData, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axios.post(`${API_URL}/posts`, postData, config);
  return response.data;
};

export const getPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};
