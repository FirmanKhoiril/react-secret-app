import axios from "axios";

const base_url = "https://quality-porn.p.rapidapi.com";
const options = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_PORN_API_KEY,
    "X-RapidAPI-Host": "quality-porn.p.rapidapi.com",
  },
};

export const fetchDataPorn = (url: any) => {
  const res = axios.get(`${base_url}/${url}`, options);
  return res;
};
