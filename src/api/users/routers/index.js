import express from "express"; 
const usersRouter = express.Router();

import profile from "../controllers/patch.js";
import allUsers from "../controllers/get.js";

//Actulización del usuario
usersRouter.patch("/profile/:id", profile);

//Listar todos los usuarios
usersRouter.get("/users", allUsers); 

export default usersRouter;