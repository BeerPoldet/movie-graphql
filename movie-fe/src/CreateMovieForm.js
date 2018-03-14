import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { MoviesQuery } from './MovieList'

const CreateMovieMutation = gql`
  mutation CreateMovieMutation($name: String!, $rating: Int) {
    createMovie(name: $name, rating: $rating) {
      id
      name
      rating
    }
  }
`

class CreateMovieForm extends React.Component {
  state = {
    name: '',
    rating: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    // call apollo mutation
    this.props
      .mutate({
        variables: {
          ...this.state,
          rating: Number(this.state.rating),
        },
        optimisticResponse: {
          createMovie: {
            __typename: 'Movie',
            id: 999,
            ...this.state,
          }
        }
      })
      .then(result => {
        this.setState({
          name: '',
          rating: '',
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="rating"
          value={this.state.rating}
          onChange={this.handleChange}
          type="number"
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default graphql(CreateMovieMutation, {
  options: props => ({
    update: (proxy, { data: { createMovie } }) => {
      const data = proxy.readQuery({ query: MoviesQuery, id })
      data.allMovies.push(createMovie)
      proxy.writeQuery({ query: MoviesQuery, data })
    },
  }),
})(CreateMovieForm)
