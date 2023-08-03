import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Replace this with your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const saveBoardData = async (data) => {
  try {
    const response = await api.post("/boards", data);
    return response.data; // Return the created board data
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
export const deleteBoardById = async (boardId) => {
  try {
    const response = await api.delete(`/boards/${boardId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateBoardData = async (boardId, updatedData) => {
  try {
    const response = await api.put(`/boards/${boardId}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addTaskToBoard = async (boardId, newColIndex, taskData) => {
  try {
    const response = await api.post(
      `/boards/addTask/${boardId}/${newColIndex}`,
      taskData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
