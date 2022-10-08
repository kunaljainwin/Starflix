import './App.css';
import Row from './components/Row';
import React  from 'react';
import requests from './request';
import Banner from'./components/Banner.js';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">  
     <div>
       <Nav/>
       <Banner/>
       {/* <Row title="Latest Release" fetchUrl={requests.fetchLatest}/> */}
       <Row title="Trending this week" fetchUrl={requests.fetchTrending} />
       <Row title="Trending today"fetchUrl={requests.fetchTrendingToday}/>   
        
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} /> 
        {/* <Row title="Trending TV shows"fetchUrl={requests.fetchTvShows}/>  */}
        <Row title="Action movies"fetchUrl={requests.fetchActionMovies}/>
        <Row title="Romantic movies"fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Comedy movies"fetchUrl={requests.fetchComedyMovies}/>
      {/* <Row title="Documentaries"fetchUrl={requests.fetchDocumentaries}/>  */}
        
        {/* <Row title="Comedy movies"fetchUrl={requests.fetchComedyMovies}/>
    
        {/* <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
        <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
        <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
        <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
        <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
        <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
        <Row title="Trending Now"fetchUrl={requests.fetchTrending}/> */}
     </div>

    </div>
  );
}

export default App;
