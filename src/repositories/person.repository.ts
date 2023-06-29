import db from "../config/database.connection";

export default function findNameById(numId: Number) {

    return db.query(`SELECT * FROM "people" WHERE id=$1;`, [numId])
}
