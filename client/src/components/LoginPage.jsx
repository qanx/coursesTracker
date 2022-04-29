import React, { useContext, useRef, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../Context/Context'
import { useNavigate } from "react-router-dom";

function LoginPage() {
  
  const {dispatch,isFetching ,user,error}= useContext(AuthContext)
  // const [error,setError]=useState(false)
  const emailRef=useRef()
  const passRef=useRef()
  const navigate = useNavigate();

  
  const handleLogin=async(e)=>{
    
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

 

 await axios.post("/api/user/login",{email:emailRef.current.value,password:passRef.current.value}).then(response=>{
        console.log(response)// this is response from server, including all ok and error responses 
        
        dispatch({type:"LOGIN_SUCCESS" ,payload:response.data})
        localStorage.setItem("user",JSON.stringify(user))

         navigate("/")

    }).catch((error)=>{
      console.log(error.response.data);
      dispatch({type:"LOGIN_FAILURE" ,payload:error.response.data})
      console.log("notok");
      // setError(true)
    })

   console.log(isFetching);
    

  
 
}
  return (
<> <div className="bg-slate-400 flex items-center h-screen justify-center">
<section class="shadow-xl h-3/4 w-3/4 bg-white border-0 border-cyan-200">
  <div class="px-6 h-full text-gray-800">
    <div
      class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="w-full"
          alt="Sample image"
        />
      </div>
      <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form>
    

          <div
            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0">welocme</p>
          </div>

          
          <div class="mb-6">
            <input
            ref={emailRef}
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
             
              placeholder="Email address"
            />
          </div>

          
          <div class="mb-6">
            <input
               ref={passRef}
              type="password"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
             
              placeholder="Password"
            />
          </div>

          <div class="flex justify-between items-center mb-6">
            <div class="form-group form-check">
              <input
           
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                >Remember me</label
              >
            </div>
            <a href="#!" class="text-gray-800">Forgot password?</a>
          </div>

          <div class="text-center lg:text-left">
            <span> </span>
            <button
            onClick={(e)=>handleLogin(e)}
              type="button"
              class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button>
            
            {/* <p class="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
              <a
                href="#!"
                class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >Register</a
              >
            </p> */}
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
</>
  )
}

export default LoginPage