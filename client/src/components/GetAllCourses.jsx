import React from 'react'
import CourseCard from './CourseCard'

function GetAllCourses() {
  return (

    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>

          </div>
          </div>
          </section>
  )
}

export default GetAllCourses