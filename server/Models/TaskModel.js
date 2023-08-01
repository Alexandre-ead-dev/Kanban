import mongoose from "mongoose";

// Schéma pour les checklists
const ChecklistSchema = new mongoose.Schema({
  title: String,
  isCompleted: Boolean,
});

// Schéma pour les tâches
const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  checklists: [ChecklistSchema],
});

// Schéma pour les colonnes
const ColumnSchema = new mongoose.Schema({
  name: String,
  tasks: [TaskSchema],
});

// Schéma pour les boards
const BoardSchema = new mongoose.Schema({
  name: String,
  isActive: Boolean,
  columns: [ColumnSchema],
});

// Création des modèles à partir des schémas
const Checklist = mongoose.model("Checklist", ChecklistSchema);
const Task = mongoose.model("Task", TaskSchema);
const Column = mongoose.model("Column", ColumnSchema);
const Board = mongoose.model("Board", BoardSchema);

module.exports = { Checklist, Task, Column, Board };
