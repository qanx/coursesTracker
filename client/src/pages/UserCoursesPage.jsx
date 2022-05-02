import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import GetAllCourses from "../components/GetAllCourses";
import Topbar from "../components/Topbar";
import UserCoursesInfoRequierd from "../components/UserCoursesInfoRequierd";
import UserCoursesInfo from "../components/UserCoursesInfo";
import UserInfo from "../components/UserInfo";
import { AuthContext } from "../Context/Context";

function UserCoursesPage() {

  const {user}=useContext(AuthContext)
  const [userInfo, setUserInfo] = useState({})
  const [completedCourses,setCompletedCourses]=useState([])
  const [requiredCourses,setRequiredCourses] = useState([])
  const [filterd,setFilterd] = useState([])
  
  useEffect(()=>{

    const getAllUserInfo = async()=>{
      
      await axios.get("api/user/"+user._id,{headers:{"authorization":"Bearer "+user.newToken}}).then(res=>{
        console.log(res.data)
        setUserInfo(res.data) 
        setCompletedCourses(res.data.completedCourses)
        setRequiredCourses(prev=>[...prev,...res.data.path.courses])
        
        // setFilterd(requiredCourses.filter(item => item._id === completedCourses._id.includes(item)))
        console.log(filterd);
        
      // console.log(requiredCourses);
        // console.log(requiredCourses); 
    }
      
      ).then( setFilterd(requiredCourses.filter(rq=>completedCourses.every(fd=>fd._id!==rq._id)))).catch(err=>console.log(err))


      // await console.log(res.data);
    }  

    getAllUserInfo()
    return () => console.log('unmounting...') 
  },[userInfo._id])
  return ( 
    <div>
      
      <Topbar />
      {completedCourses[0]?.title}
     {userInfo? <UserInfo username={userInfo.username}  image={userInfo?.image} completedCourses={userInfo.completedCourses} path={userInfo.path?.pathTitle}  job={userInfo.job} requiredCourses={userInfo.path?.courses} />:<UserInfo />}

       <UserCoursesInfo completedCourses={completedCourses}/> 
       <UserCoursesInfoRequierd requiredCourses={filterd}/>
      {/* <UserCoursesInfo/> */}
    </div>
  );
}

export default UserCoursesPage;
