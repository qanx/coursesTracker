import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import GetAllCourses from "../components/GetAllCourses";
import Topbar from "../components/Topbar";
import UserCoursesInfo from "../components/UserCoursesInfo";
import UserInfo from "../components/UserInfo";
import { AuthContext } from "../Context/Context";

function UserCoursesPage() {

  const {user}=useContext(AuthContext)
  const [userInfo, setUserInfo] = useState({})
  const [completedCourses,setCompletedCourses]=useState([])
  useEffect(()=>{

    const getAllUserInfo = async()=>{
      
      const res = await axios.get("api/user/"+user._id,{headers:{"authorization":"Bearer "+user.newToken}}).then(res=>{setUserInfo(res.data) 
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
     {userInfo? <UserInfo username={userInfo.username}  image={userInfo?.image} completedCourses={userInfo.completedCourses} path={userInfo.path?.pathTitle}  job={userInfo.job} requiredCourses={userInfo.path?.courses} />:<UserInfo />}

       <UserCoursesInfo completedCourses={completedCourses}/> 
      {/* <UserCoursesInfo/> */}
    </div>
  );
}

export default UserCoursesPage;
