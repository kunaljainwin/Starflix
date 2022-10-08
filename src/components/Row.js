import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axios from '../axios'
import "./Row.css"

const base_url="https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl}) {
    // react hook
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    "height": window.screen.availHeight, "width": window.screen.availWidth, playerVars: {
      autoplay: 1,
      "modestbranding": true,
      "cc_load_policy": 1,
      "enablejsapi":0,
      "playeralignment":"center"
  }};
    useEffect(()=>{
        async function fetchData(){
            const req=await axios.get(fetchUrl);
            // const data=req.json();
            console.table(req.data.results);
            setMovies(req.data.results);
            return req;
        }
        fetchData();



    }, [fetchUrl]);
    const handleClick=(movie)=>{
      if (trailerUrl) {
        setTrailerUrl('');
      }
      else {
        movieTrailer(movie?.name || movie?.title || movie?.original_title || "",{ tmdbId: movie.id }).then((url) => { 
          const uri = new URLSearchParams(new URL(url).search);
          setTrailerUrl( uri.get('v'));
  
        }).catch((error) => console.log(error));
      }
    }
  
  return (
    <div className='row'>
        {/* title */}
        <h2 className='title' >{title}</h2>

        <div className='row-posters' >
{/* several row posters */}
{movies.map((movie,i)=>{
  return <div className='row_div'>
  <img key={i} className="row_poster" src={base_url+movie.poster_path} onClick={()=>handleClick(movie)} alt={movie.name} ></img>
  <p className='row_div_rating'>{(movie.vote_average.toFixed(1))}</p>
 </div>
})}

        </div>
      {trailerUrl && <YouTube videoId={trailerUrl} className="youtube" opts={opts}></YouTube>}
        {/*Container-> images */}

    </div>
  )
}

export default Row