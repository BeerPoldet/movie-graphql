import React from 'react'
import gql from 'graphql-tag'

const MovieItem = ({ movie }) => (
  <li>
    {movie.name} | {movie.rating}
    <ActorList actors={movie.actors} />
  </li>
)

export const MovieItemFragments = {
  movie: gql`
    fragment MovieItem on Movie {
      id
      name
      rating
      ...ActorList
    }
  `
}

export default MovieItem