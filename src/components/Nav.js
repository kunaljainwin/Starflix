import React, { useEffect, useState } from 'react';
import Dropdown from './dropdown';
import "./Nav.css"
function Nav(){
    const[show,handleShow]=useState(false);
    useEffect(() => {
    window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            handleShow(true);
        }
        else{
            handleShow(false);

        }

    })
    
      return () => {
  window.removeEventListener("scroll",()=>{  handleShow(false)})
      }
    }, [])
    

    // useEffect(()=>{

    //     window.addEventListener("scroll",()=>{
      

    //         if(window.scrollY>100){
    //             handleShow(true);
    //         }
    //         else{
    //             handleShow(false);
    //         }
    //     });
    //     return()=>{
    //         window.removeEventListener("scroll");
    //     };

    // },[])


    return(<div className={show ? 'nav':'nav-hide'}>
         <img className='App-logo' src="https://firebasestorage.googleapis.com/v0/b/artstick-2021.appspot.com/o/logo.png?alt=media&token=d22db9f3-b859-44f4-84f7-4ac83161ea6d"
 alt='starflix'></img>
      <Dropdown></Dropdown>
         <img className='avatar' alt='starflix' src='https://www.logoai.com/oss/avatars/2022/06/06/2b01fcad6dd8c63df1cc56508379bb5c.jpeg'></img>

    </div>);}
// "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-500x281.png"
export default Nav;