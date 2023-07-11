import React, { useEffect, useState, useRef  } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

import logo from '../../images/logo-dark.webp';
import MediaContext from '../../MediaContext';
import { useContext } from 'react';


export default function Navbar(props) {

  const {searchMedia} = useContext(MediaContext);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const inputRef = useRef(null); // Create a ref for the input element
  
  

  function handlleSearch(e){

    const query = e.target.value;
    setSearchQuery(query);
    searchMedia(query);
    
    
  }

  useEffect(()=>{

    setSearchQuery('');

     // Clear the input field when navigating
     if (inputRef.current) {
      inputRef.current.value = '';
    }

  },[location])
  

  return (
    <>
    <nav className ="navbar navbar-expand-sm p-4 " >
        <div className ="container-fluid ">
         <NavLink className ="navbar-brand " to="/home"><img src={logo} alt='logo' /></NavLink>
         {/* <span className='me-3 pt-1 text-white text-capitalize'>{`Hi  ${props.loginName}`}</span> */}
          <button className ="navbar-toggler bg-light d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className ="navbar-toggler-icon"></span>
          </button>

          { props.checkedLogin  ?  <>
            <div className ="collapse navbar-collapse " id="collapsibleNavId">
            <ul className ="navbar-nav pt-1  me-auto text-capitalize mt-1 mt-lg-0">
              <li className ="nav-item py-1">
                <NavLink className =" me-3  text-white" to="/home" aria-current="page">Home <span className ="visually-hidden">(current)</span></NavLink>
              </li>
              <li className ="nav-item py-1">
                <NavLink className =" me-3 text-white" to="/movies">movies</NavLink>
              </li>
              <li className ="nav-item py-1">
                <NavLink className =" me-3 text-white" to="/tv">tv</NavLink>
              </li>
            </ul>
            <form  className="d-flex my-3 my-lg-0">
              {/* <Link to={searchQuery.trim() !== '' ? '/displayresult' : '/movies'}> */}
              <input   onChange={handlleSearch}  ref={inputRef} defaultValue={searchQuery} className ="form-control me-sm-2" type="text" placeholder="Search"/>
              {/* </Link> */}
              {/* <button className ="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            </form>
            </div>

          </>:''}

          
            {props.checkedLogin  ? <>
              <div className ="collapse navbar-collapse " id="collapsibleNavId">
              <ul className ="navbar-nav pt-1 ms-auto text-capitalize mt-1 mt-lg-0">
              <span className='me-3 pt-1 text-white text-capitalize'>{`Hi  ${props.loginName}`}</span>
              <li className ="nav-item py-1">
                {/* <a href='https://www.facebook.com/'><i className='fab fa-facebook me-3'></i></a> */}
                <div className='mx-1 px-1'>
                <a href='https://www.facebook.com/'><i className='fab fa-facebook '></i></a>
                  </div>
                
              </li>

              <li className ="nav-item py-1">
                {/* <a href='https://www.instagram.com/'><i className='fab fa-instagram me-3'></i></a> */}
                <div className='mx-1 px-1'>
                  <a href='https://www.instagram.com/'><i className='fab fa-instagram '></i></a></div>
              </li>

              <li className ="nav-item py-1">
                {/* <a href='https://twitter.com/'><i className='fab fa-twitter me-3'></i></a> */}
                <div className='mx-1 px-1'>
                <a href='https://twitter.com/'><i className='fab fa-twitter  '></i></a>
                </div>
                
              </li>
              <li className ="nav-item py-1">
                <div className='mx-1 px-1'>
                <span className=' me-3 text-white' onClick={props.logOut}>logout</span>
                </div>
              </li>
              {/* <li  className='px-2 py-1 me-3 text-white text-capitalize' onClick={props.logOut}> logout </li> */}
              </ul>
              </div>
            </> : 
            <>
                <div className ="collapse navbar-collapse " id="collapsibleNavId">
                  <ul className ="navbar-nav pt-1 ms-auto text-capitalize mt-1 mt-lg-0">
                  <li className ="nav-item py-1 ">
                    <NavLink className =" me-3 text-white" to="/register">register</NavLink>
                  </li>
                  <li className ="nav-item py-1">
                    <NavLink className =" me-3 text-white" to="/login">login</NavLink>
                  </li>
                </ul>
              </div>
            </>}
            
      </div>
    </nav>
    
    </>
  )
}
