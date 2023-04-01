import { Router } from "express";
import patientRoutes from "./patientRoutes.js";
import doctorRoutes from "./doctorRoutes.js";

const routes = Router()

routes.use("/doctors", doctorRoutes)
routes.use("/patients", patientRoutes)

export default routes