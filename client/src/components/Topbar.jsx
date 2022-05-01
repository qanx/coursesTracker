import { Link } from "react-router-dom";
import React, { useContext } from 'react'
import { AuthContext } from '../Context/Context'

function Topbar() {

  const { user ,dispatch} = useContext(AuthContext)
  return (
    <div class="navbar bg-base-100 ">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <Link to='/'> Homepage</Link>
            {/* <a>Homepage</a> */}
            </li>
          <li>
          <Link to='/userpage'> Portfolio</Link>
            
            {/* <a></a> */}
            </li>
         
            <li>
          <Link to='/courses'> courses</Link>
            </li>
          <li>
            {user ? <a onClick={()=>{dispatch({type:"LOGOUT_SUCCESS"})}}>Log Out</a>:null }
            
            
            </li>
         
          
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
      
    </div>
    <div class="navbar-end">
    {!user ? <a > <Link to='/login'> Login</Link></a>: null }
    {user?.isAdmin ? <a > <Link to='/admin'> admin panel</Link></a>: null }
      <button class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
      <button class="btn btn-ghost btn-circle">
        <Link to='/userpage'>
        <div class="indicator">
        <img className='rounded-full h-1/2' src={ user?.image} alt="" />
          <span class="badge badge-xs badge-primary indicator-item"></span>

        </div>
          </Link>
      </button>
    </div>
  </div>
  )
}

export default Topbar