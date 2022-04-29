import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function NewUser() {

  const [paths,setPaths]=useState()
  const usernameRef     =useRef()
  const emailRef =useRef()
  const passwordRef      =useRef()
  let jobRef      =useRef()

 
  // useEffect(() => {
  //   const getPaths= async()=>{

  //   const res = await axios.get("/api/Course/paths")
  //   setPaths(res.data)
  //   console.log(res.data);
  //   }

  //   getPaths()
  // }, [])
  
  const handleSubmit=async(e)=>{
    e.preventDefault()

    try {
      const res = await axios.post("/api/user",{
        username: usernameRef.current.value,   
        email: emailRef.current.value,
        password: passwordRef.current.value,    
        job: jobRef.current.value   })

        console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    


  }
  return (
    <div className="h-screen w-screen bg-slate-400 flex justify-center items-center">
      <div className="flex relative h-3/4 w-10/12 bg-zinc-700 justify-center items-center">

          <h1 className="absolute top-10 text-4xl">add new course:</h1>
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div class="form-control w-full max-w-xs ">
            <label  class="label">
              <span class="label-text">User name</span>
        
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              ref={usernameRef}
            />
            <label class="label">
              <span class="label-text-alt"></span>
              <span class="label-text-alt">  </span>
            </label>
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">User password</span>
              <span class="label-text-alt">Alt label</span>
            </label>
            <input
            ref={passwordRef}

              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text-alt">Alt label</span>
              <span class="label-text-alt">Alt label</span>
            </label>
          </div>
          
        </div>
        

        <div  className="h-full w-full flex flex-col justify-center items-cente ">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">job </span>
              <span class="label-text-alt">Alt label</span>
            </label>
            <input
              type="text"
            ref={jobRef}

              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text-alt">Alt label</span>
              <span class="label-text-alt">Alt label</span>
            </label>
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">email</span>
              <span class="label-text-alt">Alt label</span>
            </label>
            <input
              ref={emailRef}

              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text-alt">Alt label</span>
              <span class="label-text-alt">Alt label</span>
            </label>
          </div>
        
        </div>
        <button onClick={handleSubmit} class="btn absolute bottom-1/4 max-w-xs">create User</button>
 
      </div>
      
    </div>
  );
}

export default NewUser;
