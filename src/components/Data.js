import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

const API_KEY = "5fdc5fa2d0ee49806a3aa96d23971c45"
const imageURL = "https://image.tmdb.org/t/p/w500"

function Data() {

  const [searchVal, setSearchVal] = useState("")
  const [moviesList, setMoviesList] = useState([])
  
  async function getData() {
    let response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchVal}&page=1`)
    let data = response.data.results
    console.log(data)
    setMoviesList(data)
  }
  
  useEffect(()=> {
    getData()
  },[searchVal])


  useEffect(()=>{
    async function fetchData() {
      let response = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_watch_monetization_types=flatrate`)
      let data = response.data.results
      setMoviesList(data)
    }
    fetchData()
  },[])

  function handleChange(value) {
    setSearchVal(value)
  }

  return (
    <div>
      <header className='heading'>
      <i class="fa-solid fa-film"></i>
      <h1>Movie App</h1>
      </header>
      <input
      type='text'
      placeholder="&#xf002;"
      value={searchVal}
      onChange={(e)=> handleChange(e.target.value)}
      />

      <div className='movie--container'>
          <MovieCard moviesList={moviesList} imageURL={imageURL} />
      </div>

    </div>
  )
}

export default Data