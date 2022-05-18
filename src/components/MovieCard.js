import React from 'react'


function MovieCard({ moviesList, imageURL }) {
  return(
    <div className='movie--list'>
      {moviesList.map((movie)=>(
            <div key={movie.id}>
              <img src={imageURL + movie.poster_path} alt='' />
              <p>{movie.title}</p>
            </div>
          ))}
    </div>
  )
}

export default MovieCard