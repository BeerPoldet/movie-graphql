import React from 'react'
import gql from 'graphql-tag'

const MovieItem = ({ movie }) => (
  <li>
    {movie.name} | {movie.rating}
  </li>
)

export const MovieItemFragments = {
  movie: gql`
    fragment MovieItem on Movie {
      id
      name
      rating
    }
  `
}

export default MovieItem