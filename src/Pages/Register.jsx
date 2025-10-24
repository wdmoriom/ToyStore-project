import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    
 const {createUser, setUser} = use (AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        console.log(e.target);
        const form = e.target;
        const name =  form.name.value;
        const photo =  form.photo.value;
        const email =  form.email.value;
        const password =  form.password.value;
        console.log({name, photo,email,password});
        createUser(email, password)
        .then((result) => {
            const user = result.user
           setUser(user)
        }) 
        .catch(error =>{
            const errorCode = error.code;
           const errorMessage = error.message;
           alert(errorMessage)
        })
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>
        <fieldset className="fieldset">
            {/* Name */}
          <label className="label">Your Name</label>
          <input type="name" name='name' className="input" placeholder="Your Name" required />
          {/* photoUrl */}
          <label className="label">PhotoUrl</label>
          <input type="photo" name='photo' className="input" placeholder="PhotoUrl" required/>
          {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required/>
          {/* password */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required/>
          
          
          <button className="btn btn-neutral mt-4">Register</button>
          <p className='text-[15px] text-center font-semibold py-5'>Already Have An Account?  <Link className='text-[#23BE0A]' to='/auth/login'>Login</Link> </p>
        </fieldset>
      </form>
    </div>
   </div>
    );
};

export default Register;