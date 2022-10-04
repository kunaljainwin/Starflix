api url : https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
api_key = 13dd37dacddc8386206af363b173bdc9
Application url :starflix-movies-5a210.web.app  ,https://starflix-movies-5a210.firebaseapp.com/ 

Working on 👉 Get all the movies
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

npm i axios

👉Build the Rows
rfce es7

   // react hook
    const [movies,setMovies]=useState([])


    
👉Build the Banner
👉Build the 

