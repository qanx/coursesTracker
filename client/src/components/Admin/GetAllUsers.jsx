import React from 'react'
import UserCard from './UserCard'


function GetAllUsers() {
  return (
  <div className='flex flex-row  w-screen   justify-center items-center '>
        <div className='flex flex-row w-10/12 flex-wrap  justify-center items-center '>
      <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    </div>
    </div>
    
    )
}

export default GetAllUsers