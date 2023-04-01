import { Router } from "express";

const patientRoutes = Router()

patientRoutes.post("/signup", patientController.create)
patientRoutes.post("/signin", patientController.login)

export default patientRoutes