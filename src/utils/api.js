import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST
  },
});
