export default`
  type Query {
    name: String
    movies: [Movie]
    movie(id: ID): Movie
  }

  type Mutation {
    createMovie(name: String!): Movie
    updateMovieRating(movieId: ID!, rating: Int!): Int
    deleteMovie(movieId: ID!): [Movie]
  }

  type Movie {
    id: ID! 
    name: String!
    rating: Int
    actors: [Actor]
  }

  type Actor {
    id: ID!
    name: String!
  }
`