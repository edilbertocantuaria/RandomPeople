import db from "../config/database.connection.js";

export default function findNameById(numId) {
    console.log("entrou na função find name by id")
    return db.query(`SELECT * FROM "people" WHERE id=$1;`, [numId])
}
