import axios from 'axios';

export const DEFAULT_TIMEOUT = 10 * 1000; // Updating the default (0) from exios

const defaultConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  timeout: DEFAULT_TIMEOUT,
};

export const request = axios.create(defaultConfig);

export const createRequest = config => axios.create({...defaultConfig, config});
