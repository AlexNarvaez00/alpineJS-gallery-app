import axios from "axios";
window.axios = axios;

const BASE_URL = `https://rickandmortyapi.com/api/character`;

const getAllItems = (page = 1) => {
  return axios.get(`${BASE_URL}/?page=${page}`);
};

export default {getAllItems};
