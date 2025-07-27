// src/api/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  const response = await API.post('/predict', formData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await API.post('/login', credentials);
  return response.data;
};

export const registerUser = async (userInfo) => {
  const response = await API.post('/register', userInfo);
  return response.data;
};
