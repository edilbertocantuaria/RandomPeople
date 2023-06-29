import randomNumber from "../services/person.services"

async function getPerson(req, res) {
    try {
        const person = await randomNumber()

        res.send(person[0])
    } catch (err) {
        res.send(err)
    }
}


export default getPerson
