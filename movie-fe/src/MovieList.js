import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const MoviesQuery = gql`
  query {
    allMovies {
      id
      name
      rating
    }
  }
`

const MovieList = props => {
  const { data: { loading, error, allMovies: movies } } = props
  if (loading) {
    return <div>Loading</div>
  }
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          {movie.name} | {movie.rating}
        </li>
      ))}
    </ul>
  )
}

export default graphql(MoviesQuery)(MovieList)