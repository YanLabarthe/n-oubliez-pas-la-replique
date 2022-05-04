import axios from "axios";

const URL_API = "http://localhost:5000";

export const getScores = async () => {
  return (await axios.get(`${URL_API}/scores`)).data;
};

export const addScore = async (username, score) => {
  return (await axios.post(`${URL_API}/scores`, { username, score })).data;
};

export const getQuotes = async () => {
  return (await axios.get(`${URL_API}/quotes`)).data;
};
