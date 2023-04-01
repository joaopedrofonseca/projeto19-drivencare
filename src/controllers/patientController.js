import patientRoutes from "../routes/patientRoutes.js"
import patientServices from "../services/patientServices.js"

async function create(req, res, next) {
    const { name, email, password } = req.body
    try {
        await patientServices.create({ name, email, password })
        return res.sendStatus(201)
    } catch (err) {
        next(err)
    }
}

async function login(req, res, next) {
    const { email, password } = req.body
    try {
        const token = await patientServices.login({ email, password })
        return res.send({ token })
    } catch (err) {
        next(err)
    }
}

async function searchdoctors(req, res, next) {
    const { name, location, specialty } = req.query
    try {
        const doctors = await patientServices.searchdoctors({ name, location, specialty })
        return res.send({ doctors })
    } catch (err) {
        next(err)
    }
}
export default { create, login, searchdoctors }