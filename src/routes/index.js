import { Router } from "express";

const routes = Router()

routes.use("/doctors", doctorRoutes)
routes.use("/patients", patientRoutes)
routes.use("/appointments", appointmentRoutes)

export default routes