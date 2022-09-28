import axios from "axios";

const instanceCoin = axios.create({
  baseURL: process.env.REACT_APP_COIN_INFO_URL,
});

export default instanceCoin;
