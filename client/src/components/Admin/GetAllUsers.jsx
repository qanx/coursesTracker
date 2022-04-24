import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

function GetAllUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const GetUsers = async () => {

      try {
      axios.get("/api/user/all").then(res=>{setUsers(res.data)} ).then(console.log(users));
        // console.log(response);
        // setUsers(prevState=>[...prevState,...response.data]);
         ;
      } catch (error) {
        console.error(error);
      }

      // try {
      //   await axios.get("/api/user/all").then(res => setUsers(res.data));
      //   await console.log(users);
      // } catch (error) {
      //   console.log(error);
      // }
    };

    GetUsers();
  }, []);
  return (
    <div className="flex flex-row  w-screen   justify-center items-center ">
      <div className="flex flex-row w-10/12 flex-wrap  justify-center items-center ">
      {users? (users?.map(u=> <UserCard path={u?.path?.pathTitle} country={u?.country} job={u?.job} username={u?.username} key={u?._id} email={u?.email}/>)) :<h1>wait </h1>}
        {/* <UserCard /> */}
        {/* //  <UserCard username={u?.username} key={u?._id} email={u?.email}/>}) */}
        {/**/}
      </div>
    </div>
  );
}

export default GetAllUsers;
