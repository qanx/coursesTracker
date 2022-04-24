import axios from "axios";
import React, { useEffect, useState } from "react";
import GetAllCourses from "../components/GetAllCourses";
import Topbar from "../components/Topbar";
import UserCoursesInfo from "../components/UserCoursesInfo";
import UserInfo from "../components/UserInfo";

function UserCoursesPage() {

  const [user, setUser] = useState({})
  const [completedCourses,setCompletedCourses]=useState([])
  useEffect(()=>{

    const getAllUserInfo = async()=>{
      
      const res = await axios.get("api/user/626486489cefdaa0f24f993b ").then(res=>{setUser(res.data) 
      setCompletedCourses(res.data.completedCourses)}
      ).catch(err=>console.log(err))


      await console.log(user);
      await console.log(completedCourses);
    }

    getAllUserInfo()
  },[ ])
  return (
    <div>
      <Topbar />
      {completedCourses[0]?.title}
     {user? <UserInfo username={user.username}  image={user?.image} completedCourses={user.completedCourses} path={user.path?.pathTitle}  job={user.job} requiredCourses={user.path?.courses} />:<UserInfo />}

       <UserCoursesInfo completedCourses={completedCourses}/> 
      {/* <UserCoursesInfo/> */}
    </div>
  );
}

export default UserCoursesPage;
