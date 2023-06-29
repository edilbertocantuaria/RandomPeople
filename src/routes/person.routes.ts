import { Router } from "express";
import getPerson from "../controllers/person.controllers";

const personRoutes = Router()

personRoutes.get("/person", getPerson)

export default personRoutes