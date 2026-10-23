import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: `${BASE_URL}`,
  /* headers: {
    'Content-Type': 'application/json',
  } */
});


// configuracion que si existe el token agrega a las peticiones
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `bearer ${token}`;
  }
  return config;
});

export { api };