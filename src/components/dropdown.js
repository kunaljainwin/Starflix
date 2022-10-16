import React, { useEffect, useState } from "react";
import { BASE_URL } from "../secrets";
import "../components/dropdown.css";
import Movie from "./movie";

function Dropdown() {
  const [data, setData] = useState([]);

  const [movieslist, setmovieslist] = useState([]);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
        setData([]);
        document.getElementById("movie").value = "";
      }
    });
    if (data.length == 0) {
      fetch(BASE_URL + "/all").then((res) =>
        res
          .json()
          .then((data) => {
            console.table("data", data);

  })
     , fetch(BASE_URL+"/all").then(res=>res.json().then(
   
        data=>{
          console.table("data",data);
         
          setmovieslist(data)
        }
      ).catch((err)=>console.log(err))
  
  
      ))}
    
    return () => {
      window.removeEventListener("scroll",()=>{  handleShow(false)})
          }
    
  },[])
  const submit= function sumbit(){
    if(document.getElementById("movie").value!==""){
      if(window.scrollY<100)
        window.scrollBy(0, 101);
    
      fetch(BASE_URL+"/processed_data/"+document.getElementById("movie").value).then(res=>res.json().then(
        
      data=>{
        console.table("data",data);
       
        setData(data)
      }
    ).catch((err)=>console.log(err)))
    }
  }
    return ( 
        <div className="Wrapper">
          {/* <label>Choose your browser from the list:</label> */}
          <input className="input" list="movies" name="movie" id="movie" onSubmit={submit} onSelect={submit} placeholder="Search..."/>
          <datalist id="movies" className="dropdown-search">{
            movieslist.map((movie,i)=>{
              return (<option key={i} value={movie}/>);

            })
              
 
        }</datalist>
        
          <div className={show ? "row-posters":'hide'}>{data.map((movie,i)=>{
  return <div key={i} className="row_div">
    <Movie movie_id={movie}></Movie>
 </div>
})}


        </div>
        


 

          </div>
      )
}

export default Dropdown;
