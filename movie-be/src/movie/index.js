const movies = [
  {
    id: 1,
    name: 'Star wars',
    rating: 5,
  },
  {
    id: 2,
    name: 'Tomb Raider',
  },
]

export const list = () => movies

export const movieById = (id) => 
  movies.find(m => m.id == id)

let currentId = 2

export const createMovie = (name) => {
  const newMovie = { 
    id: ++currentId, 
    name 
  }
  movies.push(newMovie)
  return newMovie
}

export const updateRating = (id, rating) => {
  const movie = movies.find(m => m.id == id)
  movie.rating = rating
  return movie
}