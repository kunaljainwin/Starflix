### You will have to add a file under /src directory "secret.js"
```
const API_KEY="13dxxxxxcddc83xxx06af363b173xxxx";
// const API_KEY={YOUR_API_KEY};
const BASE_URL="http://localhost:8000"

export {BASE_URL}

export default API_KEY

```


# Frontend 
For API Documentation :[Getting started](https://developers.themoviedb.org/3/getting-started/introduction)

##api url : https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>

##api_key = x3ddxxdxxddxx386xx6afxx3xx73bdxx

`👉 Get all the movies`

``const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}``

`npm i axios`

`👉Build the Rows`

// react hook
 
const [movies,setMovies]=useState([])

`👉Build the Banner`

`👉Build the Youtube Player`

# Backend 
### 👉Get these databases from Kaggle
```https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata?select=tmdb_5000_movies.csv```

### 👉Build the Model
```npm install```

### 👉Build the Apis for getting :
 - List of movies
 - Recommended movies
 



