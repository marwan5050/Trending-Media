import React, {  useState } from 'react';
import joi from 'joi';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

  // create this state for user information
const [userInfo , setUserInfo] = useState({
   email:'' , password:''
  });
  
  //create this state for joi errors   
  const [joiErr , setJoiErr] = useState([]);
  
  // create state to check exist email
  const [error , setErrorr] = useState('');
  
  // use this hook to navigate to login
  const homeNavigate = useNavigate();
  
  // create state for loading data
  const [loading , setLoading] = useState(false);
  
  
  // create fuction to get user information from input values
   function getUserInfo(e){
  
  // use spred oprator to take deep colne from my object userInfo
    let myUser = {...userInfo};
  
  // using object[] to make it dynamic and not repeate same function to each input value
  // using target.name to store each vlaue in it's own property in object userInfo so that the values of attr name in input
  // are the same names in object properties userInfo
    myUser[e.target.name] = e.target.value;
  
    // store values in myUser object
    setUserInfo(myUser);
   }
  
  
  // create fuction validate form using joi
  function validationForm(){
  
    let schema = joi.object({
  
      email: joi.string().email({tlds:['com' , 'net' , 'org']}).required(),
      password: joi.string().min(4).max(15).required()
    })
  
    return schema.validate(userInfo , {abortEarly:false})
  };
  
  
  //create submit form
  
    function submitForm(e){
      
      e.preventDefault();
  
      setLoading(true);
  
      let validationError = validationForm();
  
      if(validationError.error){
        // if validation true that mean i have errorrs 
        setJoiErr(validationError.error.details);
        // stop loading
        setLoading(false);
      }
      else{
  
            // get data from localstorage to check pass and email
            const checkedEmail = JSON.parse(localStorage.getItem('userData'));

            // cheked if email is already exist or not
            if(checkedEmail && checkedEmail.hasOwnProperty(userInfo.email)){

              // get password of same email from localstorage
            const checkedPassword = checkedEmail[userInfo.email].password;

            // get the name of user email to say hello
            const loginName = checkedEmail[userInfo.email].first_name;

            // compaire the password form localstorage and value from user
            if(checkedPassword === userInfo.password){
              // true that mean successful login 

              //update login status and triggers a re-render and displays the full navbar and components.
              props.getUserInfo();

              // pass login user first name
              props.loginName(loginName);
              
              // Store the user's name in local storage
              localStorage.setItem('userData', JSON.stringify({ ...checkedEmail,
                name: loginName, 
                })
              );

              // navigate to login 
              homeNavigate('/home');

              // stop loading
              setLoading(false);
            }
            else{
              setErrorr('Wrong Password');
              // stop loading
              setLoading(false);
            }
           
        }
        else{
          // email is exist
          setErrorr('Email Dose Not Exist');
            
          // stop loading
          setLoading(false);
            }
      }
    }



  
    
    

  return (
    <>
    
    <div className='container w-60 mx-auto my-5'>
      <h2 className='text-capitalize pt-4 pb-1 text-center' >login now</h2>

      {error ? <div className='alert alert-danger'> {error} </div> : ''}

      {joiErr.map((err , index)=> <div className='alert alert-danger' key={index}> {err.message} </div> )}

      <form onSubmit={submitForm}>

        <div className='py-2'>
          <label htmlFor='email' className='py-1 fst-italic text-capitalize' style={{letterSpacing:1, fontSize:'20px'}}> email </label>
          <input type='email' onChange={getUserInfo} className='form-control' name='email' />
        </div>

        <div className='py-2'>
          <label htmlFor='password' className='py-1 fst-italic text-capitalize' style={{letterSpacing:1, fontSize:'20px'}}> password </label>
          <input type='password' onChange={getUserInfo} className='form-control' name='password' />
        </div>

        <div className='pt-3'>
         <button type='submit'  className='btn btn-primary text-capitalize'>
          {loading ? <i className='fas fa-spinner fa-spin'></i> : 'login'}</button>
        </div>


      </form>
    </div>
   </>
  )
}
