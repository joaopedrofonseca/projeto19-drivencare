import { Router } from "express";

const doctorRoutes = Router()

doctorRoutes.post("/signup", doctorController.create)
doctorRoutes.post("/signin", doctorController.login)

export default doctorRoutes