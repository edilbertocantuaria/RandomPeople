import { Router } from "express";
import getPerson from "../controllers/person.controllers.js";

const personRoutes = Router()

personRoutes.get("/person", getPerson)

export default personRoutes