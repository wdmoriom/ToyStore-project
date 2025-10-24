import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const{ signIn} = use(AuthContext)
  const handleLogin = (e) =>{
       e.preventDefault();
       const form = e.target  
       const email = form.email.value;
      const password= form.password.value;
      console.log({email, password});
       signIn(email , password)
      .then((result)=>{
       const user= result.user
       console.log(user)
      })
      .catch(error =>{
        const errorCode = error.code
        const errorMessage = error.message
        alert(errorCode,errorMessage)
      })
  }
    return (
   <div className='flex justify-center min-h-screen items-center'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <h2 className='font-semibold text-2xl text-center'>Login Your Account</h2>
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='text-[15px] text-center font-semibold py-5'>Don't Have An Account? <Link className='text-[#23BE0A]' to='/auth/register'>Register</Link> </p>
        </fieldset>
      </form>
    </div>
   </div>
    );
};

export default Login;