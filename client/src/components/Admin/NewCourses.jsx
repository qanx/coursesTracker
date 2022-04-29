import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function NewCourses() {

  const [paths,setPaths]=useState()
  const titleRef     =useRef()
  const durationRef =useRef()
  const descRef      =useRef()
  let pathRef      =useRef()

 
  useEffect(() => {
    const getPaths= async()=>{

    const res = await axios.get("/api/Course/paths")
    setPaths(res.data)
    console.log(res.data);
    }

    getPaths()
  }, [])
  
  const handleSubmit=async(e)=>{
    e.preventDefault()

    try {
      const res = await axios.post("/api/Course/",{title: titleRef.current.value,   
        duration: durationRef.current.value,
        desc: descRef.current.value,    
        path: pathRef   })

        console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    


  }

  const handleChange = (event) => {
    pathRef =event.target.value;
  };


  return (
    <div className="h-screen w-screen bg-slate-400 flex justify-center items-center">
      <div className="flex relative h-3/4 w-10/12 bg-zinc-700 justify-center items-center">
        <h1 className="absolute top-10 text-4xl">add new course:</h1>
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div class="form-control w-full max-w-xs ">
            <label class="label">
              <span class="label-text">Course name</span>
            </label>
            <input
            ref={titleRef}
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text-alt"></span>
              <span class="label-text-alt">enter course name </span>
            </label>
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">duration of the course?</span>
              <span class="label-text-alt">Alt label</span>
            </label>
            <input
            ref={ durationRef}
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

        <div className="h-full w-full flex flex-col justify-center items-cente ">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">description ?</span>
              <span class="label-text-alt">Alt label</span>
            </label>
            <input
            ref={descRef}
              type="text"
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
              <span class="label-text">whiche path this course belong to ?</span>
              <span class="label-text-alt">Alt label</span>
            </label>
            <select onChange={handleChange} class="select select-bordered" required>
              <option selected disabled value="">
                Pick one
              </option>
             
             { paths?.map(p=>( <option ref={pathRef} value={p._id}>{p.pathTitle}</option>))}
            </select>
            <label class="label">
              <span class="label-text-alt">Alt label</span>
              <span class="label-text-alt">Alt label</span>
            </label>
          </div>
        </div>
        <button class="btn absolute bottom-1/4 max-w-xs" onClick={(e)=>handleSubmit(e)}>create Course</button>
      </div>
    </div>
  );
}

export default NewCourses;
