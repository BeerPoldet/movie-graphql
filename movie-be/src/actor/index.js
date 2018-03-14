const actors = [
  {
    id: '1',
    name: 'Mark Hamill',
    movieId: '1',
  },
  {
    id: '2',
    name: 'Alicia Vikander',
    movieId: '2',
  },
  {
    id: '3',
    name: 'Daisey Ridley',
    movieId: '1',
  },
]

export const actorsByMovie = movieId => actors.filter(a => a.movieId == movieId)
