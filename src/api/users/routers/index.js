import express from "express"; 
const usersRouter = express.Router();

import profile from "../controllers/patch.js";
import allUsers from "../controllers/get.js";
import user from "../controllers/get_id.js";

//Actulización del usuario
usersRouter.patch("/profiles/:id", profile);

//Listar todos los usuarios
usersRouter.get("/users", allUsers); 
usersRouter.get("/users/:id", user); 

export default usersRouter;