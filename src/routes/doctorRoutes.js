import { Router } from "express";
import doctorController from "../controllers/doctorController.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { doctorSchema } from "../schemas/doctor.js";

const doctorRoutes = Router()

doctorRoutes.post("/signup", validateSchema(doctorSchema), doctorController.create)
doctorRoutes.post("/login", doctorController.login)

export default doctorRoutes