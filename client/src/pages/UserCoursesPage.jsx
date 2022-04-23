import React from "react";
import GetAllCourses from "../components/GetAllCourses";
import Topbar from "../components/Topbar";
import UserCoursesInfo from "../components/UserCoursesInfo";
import UserInfo from "../components/UserInfo";

function UserCoursesPage() {
  return (
    <div>
      <Topbar />
      <UserInfo/>
      <UserCoursesInfo/>
    </div>
  );
}

export default UserCoursesPage;
