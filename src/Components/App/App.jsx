import React, {  useEffect, useState } from 'react'
import {  Navigate, Route, Routes,  useNavigate } from 'react-router-dom';


import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home'
import Movies from '../Movies/Movies';
import Tv from '../Tv/Tv';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Notfound from '../Notfound/Notfound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import  { MediaContextProvider } from '../../MediaContext';
import MovieDetails from '../MovieDetails/MovieDetails';
import TvDetails from '../TvDetails/TvDetails';
import Actors from '../Actors/Actors';
import ActorDetail from '../ActorDetail/ActorDetail';
import DisplayResults from '../DisplayResults/DisplayResults';







export default function App() {

//  create state to cheked if user logged in or not
  const [checkedLogin , setCheckedLogin] = useState(null);

  // create state to get user name after login
  const [loginName , setLoginName] = useState('');



  const navigate  = useNavigate();

  

  
// create function to get data from localstorage and pass it to checklogin
 function getUserInfo(){

  let logged = JSON.parse(localStorage.getItem('userData'));

  // setCheckedLogin(logged);
  if (logged) {
    setCheckedLogin(logged);
    setLoginName(logged.name); // Store the user's name in the state
  }

 }


//create function to get userName after login 
 function loginUserFirstName(fname){

setLoginName(fname)

 }


//create logout logic function and navigate user to login and start register again  
 function logOut(){

  localStorage.removeItem('userData');
  setCheckedLogin(null);
  setLoginName(''); // Clear the user's name from the state
  navigate('/login')
 }



//use this hook becouse in componentdidmount face checked the localstorage data 
//if true start login logic null start logout logic 
 useEffect(()=>{

  if(localStorage.getItem('userData')){
    getUserInfo();
  }
  else{
    logOut();
  }
  
 },[]);

 

 

  return (
    <>
    
    

    
    <MediaContextProvider>
    <Navbar checkedLogin={checkedLogin} logOut={logOut} loginName={loginName} />
    <Routes>

      <Route element={<ProtectedRoute/>}>

        <Route path='/home' element={<Home/>}/>
        
        <Route path='/movies' element={<Movies />}/>          
        <Route path='/movies/:id' element={<MovieDetails/>}/>

          <Route path='/tv' element={<Tv/>}/>
          <Route path='/tv/:id' element={<TvDetails/>}/>

          <Route path='/actors' element={<Actors/>}/>
          <Route path='/actors/:id' element={<ActorDetail/>}/>

          <Route path='/displayresult' element={<DisplayResults />} />

        <Route path='/' exact  element={<Navigate to='/home'/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Route>
       
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login  getUserInfo={getUserInfo} loginName={loginUserFirstName}/>}/>
        
        
    </Routes>
    </MediaContextProvider>
    </>
  )
}
