import { makeExecutableSchema } from 'graphql-tools'
import queryType from './types/queryType'
import queryResolver from './resolvers/queryResolver'

export const schema = makeExecutableSchema({
  typeDefs: queryType,
  resolvers: queryResolver,
})
