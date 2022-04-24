import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard'

function GetAllCourses() {

  const [courses,setCourses]=useState([])
  const [path,setPath]=useState("")
  useEffect(()=>{
    const getAllPathCourses=async()=>{
      try {
        await axios.get("/api/Course/pathcourses/626372bff72f6bbd698a5e0b").then(res=>{
          setPath(res.data.path)
          setCourses(res.data.courses)}).then(console.log(path))
      } catch (error) {
        console.log(error);
      }

    
     }
  

  
    getAllPathCourses()
  },[])
  return (

    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">

            

            {courses.map(c=> <CourseCard path={path} desc={c.desc} key={c._id} title={c.title} img={c.img} duration={c.duration} id={c._id} />)}
          
        

          </div>
          </div>
          </section>
  )
}

export default GetAllCourses