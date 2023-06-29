import findNameById from "../repositories/person.repository";

async function randomNumber() {


    let numId = Math.floor(Math.random() * 4) + 1;

    const person = await findNameById(numId)

    return person.rows
}

export default randomNumber