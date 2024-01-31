import axios from "axios";
import backend_url from  "../config"

const url = `https://stocksup.onrender.com/portfolios`;

export const fetchPortfolios = () => axios.get(url);
export const createPortfolio = (newPortfolio) => axios.post(url, newPortfolio);