import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import MovieItem, { MovieItemFragments } from './MovieItem'

export const MoviesQuery = gql`
  query {
    allMovies {
      ...MovieItem
    }
  }
  ${MovieItemFragments.movie}
`

const MovieList = props => {
  const { data: { loading, error, allMovies: movies } } = props
  if (loading) {
    return <div>Loading</div>
  }
  return (
    <ul>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}

export default graphql(MoviesQuery)(MovieList)