import axios from "axios";

export const client = axios.create({
  baseURL: "gateway.marvel.com",
});
