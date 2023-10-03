/* eslint-disable no-useless-catch */
import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://rent-nqhh.onrender.com/api', 
});

export const getCars = async () => {
  try {
    const response = await apiService.get('/cars');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addCar = async (carData) => {
  try {
    const response = await apiService.post('/cars', carData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const searchCars = async (searchTerm, page = 1) => {
  try {
    const response = await apiService.get(`/cars?search=${searchTerm}&page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

