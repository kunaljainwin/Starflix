import React, { useEffect, useState } from "react";
import { BASE_URL } from "../secrets";
import "./dropdown.css";
import Movie from "./movie";

// function Dropdown() {
//   const [data, setData] = useState([]);

//   const [movieslist, setmovieslist] = useState([]);
//   const [show, handleShow] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         handleShow(true);
//       } else {
//         handleShow(false);
//         setData([]);
//         document.getElementById("movie").value = "";
//       }
//     });
//     if (data.length == 0) {
//       fetch(BASE_URL + "/all").then((res) =>
//         res
//           .json()
//           .then((data) => {
//             console.table("data", data);

//   })
//      , fetch(BASE_URL+"/all").then(res=>res.json().then(
   
//         data=>{
//           console.table("data",data);
         
//           setmovieslist(data)
//         }
//       ).catch((err)=>console.log(err))
  
  
//       ))}
    
//     return () => {
//       window.removeEventListener("scroll",()=>{  handleShow(false)})
//           }
    
//   },[])
//   const submit= function sumbit(){
//     if(document.getElementById("movie").value!==""){
//       if(window.scrollY<100)
//         window.scrollBy(0, 101);
    
//       fetch(BASE_URL+"/processed_data/"+document.getElementById("movie").value).then(res=>res.json().then(
        
//       data=>{
//         console.table("data",data);
       
//         setData(data)
//       }
//     ).catch((err)=>console.log(err)))
//     }
//   }
//     return ( 
//         <div className="Wrapper">
//           {/* <label>Choose your browser from the list:</label> */}
//           <input list="movies" name="movie" id="movie" onSubmit={submit} onSelect={submit}/>
//           <datalist id="movies" className="dropdown-search">{
//             movieslist.map((movie,i)=>{
//               return (<option key={i} value={movie}/>);

//             })
              
 
//         }</datalist>
        
//           <div className={show ? "row-posters":'hide'}>{data.map((movie,i)=>{
//   return <div key={i} className="row_div">
//     <Movie movie_id={movie}></Movie>
//  </div>
// })}


//         </div>
      
//           </div>
//       )
// }

function Dropdown(){
  return (
    <div className="dropdown__container">
      
      <ul className="dropdown__wrapper dropdown__movies--list">
      
        <li><a>Home</a></li>

        <li className="dropdown__movies"><a href="#">Movies</a>  
            <ul className="dropdown__movies--list">
                <li><a href="#">Recently Added</a></li>
                <li><a href="#">Leaving Soon</a></li> 
            </ul>        
        </li>

        <li className="dropdown__movies"><a href="#">TV Shows</a> 
            <ul className="dropdown__movies--list">
               <li><a href="#">Recently Added</a></li>
               <li><a href="#">Leaving Soon</a></li> 
            </ul>        
         </li>

        <li><a href="#">Genres</a>
            <ul className="dropdown__movies--list">
                <li><a href="#">Comedy</a></li>
                <li><a href="#">Horror</a></li>
                <li><a href="#">Crime</a></li>
                <li><a href="#">Documentary</a></li>
                <li><a href="#">All</a></li>
            </ul>
          </li>
          
        <li><a>Contact</a></li>
        
        <div className="searchbar__container">
              <input className="searchbar__input" id="input" placeholder="Search..." />
              <button>Send</button>
        </div>
        
      </ul>
      
    </div>
  )
}

export default Dropdown;
