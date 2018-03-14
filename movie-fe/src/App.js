import React, { Component } from 'react'
import MovieList from './MovieList'
import CreateMovieForm from './CreateMovieForm'

class App extends Component {
  render() {
    return (
      <div>
        <MovieList />
        <CreateMovieForm />
      </div>
    )
  }
}

export default App
