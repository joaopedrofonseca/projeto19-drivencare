import doctorServices from "../services/doctorServices.js"

async function create(req, res, next) {
    const { name, email, password, specialty, location } = req.body
    try {
        await doctorServices.create({ name, email, password, specialty, location})
        return res.sendStatus(201)
    } catch (err) {
        next(err)
    }
}

async function login(req, res, next) {
    const { email, password } = req.body
    try {
        const token = await doctorServices.login({ email, password })
        return res.send({ token })
    } catch (err) {
        next(err)
    }
}
export default { create, login }