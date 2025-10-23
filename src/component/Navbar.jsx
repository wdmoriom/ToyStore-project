import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/train.jpg'
import { BiLogIn } from 'react-icons/bi';
import { MdAppRegistration } from 'react-icons/md';

const Navbar = () => {

    const links = <>
     <li className='text-xl'><NavLink  to='/'>Home</NavLink></li>
     <li className='text-xl'><NavLink to='/about'>About</NavLink></li>
     <li className='text-xl'><NavLink to='/category'>Category</NavLink></li>
    
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
   
     <img src={logo} className='w-20 h-20  ' alt="" />
    <a className=" w-11/12  mx-auto text-5xl font-bold ml-5 ">Toy <span className='text-[#FF0000]'>store</span></a>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end gap-5">
    
    <button className="btn btn-soft btn-info w-30 flex"><BiLogIn /><NavLink to='login'>Login</NavLink></button>
    <button className="btn btn-soft btn-primary w-30"><MdAppRegistration /><NavLink to='/register'>Register</NavLink></button>
   
  </div>
</div>
    );
};

export default Navbar;