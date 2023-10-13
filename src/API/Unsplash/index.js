import axios from "axios";

const clientId = `RDbWz7AuVMuz5PeTxGyQj3z_zNqi34cIfgRonMlhraM`;
const UNSPLASH_ROOT = "https://api.unsplash.com";

export const getPhotosApi = (query="office", page=6) => {
  return axios.get(
    `${UNSPLASH_ROOT}/search/photos?query=${query}&orientation=portrait&client_id=${clientId}&per_page=${page}}`,
  );
};
