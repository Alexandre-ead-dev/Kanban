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
app.put("/boards/:id", async (req, res) => {
  const boardId = req.params.id;
  const updatedData = req.body;

  try {
    const board = await Boards.findById(boardId);
    if (!board) {
      return res.status(404).json({ message: "Board not found" });
    }

    // Update the board's data
    board.name = updatedData.name;
    board.isActive = updatedData.isActive;
    board.columns = updatedData.columns; // Ensure to update the columns array
    await board.save();

    res.status(200).json(board);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update board data" });
  }
});
app.post("/boards/addTask/:boardId/:newColIndex", async (req, res) => {
  const { boardId, newColIndex } = req.params;
  const { title, status, description, checklists } = req.body;

  try {
    const board = await Boards.findById(boardId);
    if (!board) {
      return res.status(404).json({ message: "Board not found" });
    }

    const column = board.columns.find(
      (col, index) => index === Number(newColIndex)
    );
    if (!column) {
      return res.status(404).json({ message: "Target column not found." });
    }

    // Create the new task
    const task = {
      title,
      status,
      description,
      checklists,
    };

    column.tasks.push(task);

    await board.save();

    res.status(200).json(board);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add task to the board" });
  }
});

// Démarrage du serveur
const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`server run in port ${PORT}`));
