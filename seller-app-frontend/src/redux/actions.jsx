import { getCars, searchCars as searchCarsApi } from '../services/apiService'; 
import * as actionTypes from './actionTypes';

export const fetchCarsRequest = () => {
  return {
    type: actionTypes.FETCH_CARS_REQUEST,
  };
};

export const fetchCarsSuccess = (cars) => {
  return {
    type: actionTypes.FETCH_CARS_SUCCESS,
    payload: cars,
  };
};

export const fetchCarsFailure = (error) => {
  return {
    type: actionTypes.FETCH_CARS_FAILURE,
    payload: error,
  };
};

export const fetchCars = () => {
  return async (dispatch) => {
    dispatch(fetchCarsRequest());
    try {
      const cars = await getCars();
      dispatch(fetchCarsSuccess(cars));
    } catch (error) {
      dispatch(fetchCarsFailure(error.message));
    }
  };
};
export const searchCarsRequest = () => {
  return {
    type: actionTypes.SEARCH_CARS_REQUEST,
  };
};

export const searchCarsSuccess = (cars) => {
  return {
    type: actionTypes.SEARCH_CARS_SUCCESS,
    payload: cars,
  };
};

export const searchCarsFailure = (error) => {
  return {
    type: actionTypes.SEARCH_CARS_FAILURE,
    payload: error,
  };
};

export const searchCars = (searchTerm, page) => {
  return async (dispatch) => {
    dispatch(searchCarsRequest());
    try {
      const cars = await searchCarsApi(searchTerm, page);
     
      dispatch(searchCarsSuccess(cars));
    } catch (error) {
      dispatch(searchCarsFailure(error.message));
    }
  };
};
