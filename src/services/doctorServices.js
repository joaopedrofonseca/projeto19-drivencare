import bcrypt from "bcrypt"
import doctorRepository from "../repositories/doctorRepository.js"
import errors from "../errors/index.js"
import {v4 as uuidV4} from "uuid"

async function create({ name, email, password, specialty, location }) {
    const { rowCount } = await doctorRepository.findEmail(email)
    if (rowCount) throw errors.duplicatedEmailError({ email })

    const hashPassword = await bcrypt.hash(password, 10)
    await doctorRepository.signup({ name, email, password: hashPassword, specialty, location})
}
async function login({ email, password }) {
    const { rowCount, rows: [user] } = await doctorRepository.findEmail(email)
    if (!rowCount) throw errors.invalidCredentialsError()

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) throw errors.invalidCredentialsError()
    const token = uuidV4()
    await doctorRepository.createSession({token, userId: user.id})

    return token
}

export default {
    create, login
}