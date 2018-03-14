import { list, movieById, createMovie, updateRating } from '../movie/index'
import { actorsByMovie } from '../actor'

export default {
  Query: {
    name: () => 'Hello World',
    movies: (parent, args, context) => list(),
    movie: (parent, args) => movieById(args.id),
  },
  Mutation: {
    createMovie: (_, { name }) => createMovie(name),
    updateMovieRating: (_, { movieId, rating }) =>
      updateRating(movieId, rating).rating,
  },
  Movie: {
    actors: movie => actorsByMovie(movie.id),
  },
}
