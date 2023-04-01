import { Router } from "express";
import patientController from "../controllers/patientController.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { patientSchema } from "../schemas/patient.js";
import authPatientMiddleware from "../middlewares/authPatientMiddleware.js"

const patientRoutes = Router()

patientRoutes.post("/signup", validateSchema(patientSchema), patientController.create)
patientRoutes.post("/login", patientController.login)

patientRoutes.get("/search", patientController.searchdoctors)

export default patientRoutes