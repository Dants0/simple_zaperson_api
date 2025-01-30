import fastify from 'fastify'
import { Zaperson } from "zaperson"

const app = fastify()

const zaperson = new Zaperson({validateDDD: true})
app.post('/zaperson', async (req, reply) => {

  const data = req.body
  const {number} = data

  const isValid = zaperson.validate(number)

  if(isValid) {
    reply.status(200).send({
      message: "Request successfuly",
      data: zaperson.info(number)
    })
  } else {
    reply.status(400).send({
      error: zaperson.info(number)
    })
  }
})

app.listen({
  port: 3000,
}).then(() => {
  console.log(`Server listening on http://localhost:3000`)
})