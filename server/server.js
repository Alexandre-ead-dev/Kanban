// Import des dépendances
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./MongoDb.js";
import Boards from "./Models/BoardsModel.js";

// Création de l'application Express
dotenv.config();
connectDatabase();
const app = express();
app.use(cors());
app.use(express.json());

// API
app.get("/boards", async (req, res) => {
  try {
    const boards = await Boards.find();
    res.status(200).json(boards);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to fetch boards data from the database." });
  }
});

app.post("/boards", async (req, res) => {
  const data = req.body;
  try {
    // Save the data to MongoDB
    const boards = new Boards(data);
    await boards.save();

    res.status(201).json(boards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save data to the database." });
  }
});

// API to delete a board by its ID
app.delete("/boards/:id", async (req, res) => {
  const boardId = req.params.id;
  try {
    // Find the board by ID and delete it
    const deletedBoard = await Boards.findByIdAndDelete(boardId);
    if (!deletedBoard) {
      return res.status(404).json({ message: "Board not found." });
    }
    res.status(200).json({ message: "Board deleted successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to delete board from the database." });
  }
});

// Démarrage du serveur
const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`server run in port ${PORT}`));
