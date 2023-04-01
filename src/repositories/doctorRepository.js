import connectionDb from "../config/database.js";

async function findEmail(email) {
    return await connectionDb.query(`select id,name,email,password from doctors where email=$1 union select id,name,email,password from patients where email=$1;`, [email])
}

async function signup({ name, email, password, specialty, location }) {
    return await connectionDb.query(`INSERT INTO doctors (name, email, password, specialty, location) VALUES ($1,$2,$3, $4, $5);`, [name, email, password, specialty, location])
}

async function findSessionByToken(token) {
    return await connectionDb.query(`SELECT * FROM doctors_session WHERE token=$1;`, [token])
}

async function findById(id) {
    return await connectionDb.query(`SELECT * FROM doctors WHERE id=$1;`, [id])
}

async function createSession({ token, userId }) {
    return await connectionDb.query(`INSERT INTO doctors_session (doctor_id, token) VALUES ($1, $2);`, [userId, token])
}

export default {
    findEmail,
    signup,
    findSessionByToken,
    findById,
    createSession
}