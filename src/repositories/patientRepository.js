import connectionDb from "../config/database.js";

async function findEmail(email) {
    return await connectionDb.query(`SELECT * FROM patients WHERE email=select id,name,email from doctors where email=$1 union select id,name,email from patients where email=$1;`, [email])
}

async function signup({ name, email, password }) {
    return await connectionDb.query(`INSERT INTO patients (name, email, password) VALUES ($1,$2,$3);`, [name, email, password])
}

async function findSessionByToken(token) {
    return await connectionDb.query(`SELECT * FROM patients_session WHERE token=$1;`, [token])
}

async function findById(id) {
    return await connectionDb.query(`SELECT * FROM patients WHERE id=$1;`, [id])
}

async function createSession({ token, userId }) {
    return await connectionDb.query(`INSERT INTO patients_session (patient_id, token) VALUES ($1, $2);`, [userId, token])
}

async function searchDoctorByName({name}){
    return await connectionDb.query(`SELECT * FROM 'doctors' WHERE name=$1;`, [name])
}

async function searchDoctorBySpecialty({specialty}){
    return await connectionDb.query(`SELECT * FROM 'doctors' WHERE specialty=$1;`, [specialty])
}

async function searchDoctorByLocation({location}){
    return await connectionDb.query(`SELECT * FROM 'doctors' WHERE location=$1;`, [location])
}

export default {
    findEmail,
    signup,
    findSessionByToken,
    findById,
    createSession,
    searchDoctorByLocation,
    searchDoctorByName,
    searchDoctorBySpecialty
}