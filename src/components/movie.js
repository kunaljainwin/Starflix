import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Row.css"
import axios from '../axios'
import movieTrailer from 'movie-trailer';
import YouTube from "react-youtube";
import requests from "../request";
import API_KEY from "../secrets";
// import requests from "../request";
function Movie({movie_id}){
    const[movie,setMovie]=useState([{}])
    const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    "height":400, "width": 400, playerVars: {
       
      autoplay: 1,
      // location :window.location,
      language:"hi",
          // "language":"Hindi",
      "modestbranding": true,
      "cc_load_policy": 1,
      "enablejsapi":0,
      "playeralignment":"top"
  }};

    useEffect(()=>{
        async function fetchData(){
            const req=await axios.get("/movie/"+movie_id+"?api_key="+API_KEY+"&language=en-US");
            // const data=req.json();
            console.table(req.data);
            setMovie(req.data);
            return req;
        }
        fetchData();
    },[])
    const handleClick=(movie)=>{
        if (trailerUrl) {
          setTrailerUrl('');
        }
        else {
          movieTrailer("Hindi"+(movie?.name  || movie?.title || movie?.original_title || ""),{ tmdbId: movie.id }).then((url) => { 
            const uri = new URLSearchParams(new URL(url).search);
            setTrailerUrl( uri.get('v'));

    
          }).catch((error) => console.log(error));
        }
      }


    return (<div className="row">
      <div className="row_div"><img className="row_poster" src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} onClick={()=>handleClick(movie)} alt={movie.name} ></img>
    <p className='row_div_rating'>{ Math.round(movie.vote_average*10,2)/10}</p>



    </div>  
    {trailerUrl && <YouTube videoId={trailerUrl} className="youtube-movie" opts={opts}></YouTube>}
        {/*Container-> images */}

    </div>
    )

}


export default Movie