// Import des dépendances
import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./MongoDb.js";

// Création de l'application Express
dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// API

// Démarrage du serveur
const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`server run in port ${PORT}`));
