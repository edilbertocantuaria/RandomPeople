import randomNumber from "../services/person.services.js"

async function getPerson(req, res) {
    try {
        console.log("entrou no controller")

        const person = await randomNumber()

        res.send(person[0])
    } catch (err) {
        res.send(err)
    }
}


export default getPerson
