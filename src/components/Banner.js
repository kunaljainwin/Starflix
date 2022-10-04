import axios from '../axios';
import React, { useEffect, useState } from 'react'
import requests from '../request';
import "./Banner.css"
function Banner() {
const[movie,setMovie]=useState([]);
    useEffect(() => {
      async function fetchData(){
          const req = await axios.get(requests.fetchComedyMovies);
          setMovie(req.data.results[Math.floor(Math.random()*20)])
          return req;
      }

    fetchData();
    
    }, []);
    
  return (
 <header className='banner' style={{
     backgroundSize:"cover",
     
     backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
     backgroundPosition:"top center"

 }}>
          {/* image */}

     {/* title */}
     <h1 className='banner-title'  >{movie?.name||movie?.title||movie?.original_name}</h1>
     {/* div 2 buttons */}
     <div className='banner-buttons'> 

     <button className='button'>PLAY</button>
     <button className='button'>FAVOURITES</button>

        </div>

     {/* description */}
     <p className='banner-description'>{  movie.overview}</p>
     <div className='fade-bottom'></div>

 </header>
  )
}

export default Banner