import React, { useState } from 'react';
import joi from 'joi';
import { useNavigate } from 'react-router-dom';




export default function Register() {

// create this state for user information
const [userInfo , setUserInfo] = useState({
first_name:'' , last_name:'' , age:'' , email:'' , password:''
});

//create this state for joi errors   
const [joiErr , setJoiErr] = useState([]);

// create state to check exist email
const [error , setErrorr] = useState('');

// use this hook to navigate to login
const loginNavigate = useNavigate();

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

    first_name: joi.string().min(4).max(15).required(),
    last_name: joi.string().min(4).max(15).required(),
    age: joi.number().min(16).max(90).required(),
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

      // cheked if email is already exist or not
      const checkedEmail = JSON.parse(localStorage.getItem('userData'));

      if(checkedEmail && checkedEmail.hasOwnProperty(userInfo.email)){
        // email is exist
        setErrorr('Email Is Alreay Exist');

        // stop loading
        setLoading(false);
      }
      else{
        // updata user data and save to localstorage
        const updatedInfo = {...checkedEmail , [userInfo.email]: userInfo};
        localStorage.setItem('userData' , JSON.stringify(updatedInfo));
        // stop loading
       setLoading(false);

        // Reset the form and clear the error messages
      setUserInfo({
        first_name: '',
        last_name: '',
        age: '',
        email: '',
        password: ''
      });
      setJoiErr([]);
      setErrorr('');


      // navigate to login 
       loginNavigate('/login');
      } 
    }
  }


  return (
   <>
   
    <div className='container w-60 mx-auto my-5'>
      <h2 className='text-capitalize pt-4 pb-1 text-center' >Register now</h2>

      {error ? <div className='alert alert-danger'> {error} </div> : ''}

      {joiErr.map((err , index)=> <div className='alert alert-danger' key={index}> {err.message} </div> )}

      <form onSubmit={submitForm}>
        <div className='py-2'>
          <label htmlFor='first_name' className='py-1 fst-italic text-capitalize' style={{letterSpacing:1, fontSize:'20px'}}> first name </label>
          <input type='text' onChange={getUserInfo} className='form-control' name='first_name' />
        </div>

        <div className='py-2'>
          <label htmlFor='last_name' className='py-1 fst-italic text-capitalize' style={{letterSpacing:1, fontSize:'20px'}}> last name </label>
          <input type='text' onChange={getUserInfo} className='form-control' name='last_name' />
        </div>

        <div className='py-2'>
          <label htmlFor='age' className='py-1 fst-italic text-capitalize' style={{letterSpacing:1, fontSize:'20px'}}> age </label>
          <input type='number' onChange={getUserInfo} className='form-control' name='age' />
        </div>

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
          {loading ? <i className='fas fa-spinner fa-spin'></i> : 'register'}</button>
        </div>


      </form>
    </div>
   </>
  )
}
