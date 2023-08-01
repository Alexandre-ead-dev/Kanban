import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Replace this with your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const saveBoardData = async (data) => {
  try {
    const response = await api.post("/boards", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchBoardsFromBackend = async () => {
  try {
    const response = await api.get("/boards");
    return response.data;
  } catch (error) {
    throw error;
  }
};
