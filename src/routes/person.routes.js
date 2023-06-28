import { Router } from "express";

const personRoutes = Router()

personRoutes.get("/person", personController)