import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { makeExecutableSchema } from 'graphql-tools'

// https://github.com/BeerPoldet/movie-graphql.git
const typeDefs = `
  type Query {
    name: String
  }
`

const resolvers = {
  Query: {
    name: () => 'Hello World'
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const app = express()

app.use(cors())
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

const port = 8000
app.listen(port, () => {
  console.log(`Appliation is running at http://localhost:${port}`)
})