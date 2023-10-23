import axios from "axios";

const clientId = `RDbWz7AuVMuz5PeTxGyQj3z_zNqi34cIfgRonMlhraM`;
const UNSPLASH_ROOT = "https://api.unsplash.com";

export const getPhotosApi = (query, page) => {
  return axios.get(
    `${UNSPLASH_ROOT}/search/photos?client_id=${clientId}&orientation=landscape&query=${query}&per_page=${page}}}`,
  );
};
