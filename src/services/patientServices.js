import bcrypt from "bcrypt"
import patientRepository from "../repositories/patientRepository.js"
import errors from "../errors/index.js"
import {v4 as uuidV4} from "uuid"

async function create({ name, email, password }) {
    const { rowCount } = await patientRepository.findEmail(email)
    if (rowCount) throw errors.duplicatedEmailError({ email })

    const hashPassword = await bcrypt.hash(password, 10)
    await patientRepository.signup({ name, email, password: hashPassword })
}
async function login({ email, password }) {
    const { rowCount, rows: [user] } = await patientRepository.findEmail(email)
    if (!rowCount) throw errors.invalidCredentialsError()

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) throw errors.invalidCredentialsError()
    const token = uuidV4()
    await patientRepository.createSession({token, userId: user.id})

    return token
}

export default {
    create, login
}