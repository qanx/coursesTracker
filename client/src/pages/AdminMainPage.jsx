import React, { useState } from 'react'
import AdminInfo from '../components/Admin/AdminInfo'
import GetAllUsers from '../components/Admin/GetAllUsers'
import NewCourses from '../components/Admin/NewCourses'
import NewUser from '../components/Admin/NewUser'
import GetAllCourses from '../components/GetAllCourses'

function AdminMainPage() {

const [first, setfirst] = useState()
 
  return (
    <div>
        <AdminInfo/>

        
      <button class="btn btn-active" onClick={()=>setfirst(<NewCourses/>)}>create new courses </button>
      <button class="ml-3 btn btn-active" onClick={()=>setfirst(<NewUser/>)}>create new user </button>
      <button class="ml-3 btn btn-active" onClick={()=>setfirst(<GetAllCourses/>)}>courses</button>
      <button class="ml-3 btn btn-active" onClick={()=>setfirst(<GetAllUsers/>)}>users</button>
      {first}

        

      
    </div>
  )
}

export default AdminMainPage