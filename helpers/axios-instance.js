import Axios from 'axios';

export const axiosClient = Axios.create({
  baseURL: 'https://62125283f43692c9c6e7c136.mockapi.io/api/v1',
});
