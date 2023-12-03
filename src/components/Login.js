import { useState } from 'react'
import Header from './Header'
const Login = () => {
    const[isSignInForm, setisSignInForm] = useState(true);
    const handleSignInForm = function() {
        setisSignInForm(!isSignInForm);
    }
   return ( 
    <div>
      <Header/>
      <div className='absolute'>
         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
         alt='img-logo'/>
      </div>
      <form className='w-3/12 p-12 absolute bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        { !isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-2 w-full bg-gray-700'/>}
        <input type='text' placeholder='Email address' className='p-4 my-2 w-full bg-gray-700'/>
        <input type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-700'/>
        <button className='p-4 my-6 bg-red-800 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={
            handleSignInForm
        }>New to Netflix ? {isSignInForm ? "Sign Up" : "Sign In"} Now!</p>
      </form>
    </div>
    )
}

export default Login;