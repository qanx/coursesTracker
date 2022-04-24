import React from "react";

function UserInfo({username,image,completedCourses,job,requiredCourses,path}) {
  return (
    <div className="   flex flex-col items-center ">
      <div className=" shadow-lg rounded-2xl md:w-8/12 sm:w-full my-3 p-4 bg-white dark:bg-gray-800 ">
        <div class="shadow-lg rounded-2xl w-full p-4 bg-white dark:bg-gray-800">
          <div class="flex flex-row items-start gap-4">
            <img
              src={image}
              class="w-28 h-28 rounded-lg"
            />
            <div class="h-28 w-full flex flex-col justify-between">
              <div>
                <p class="text-gray-800 dark:text-white text-xl font-medium">
                  name: {username}
                </p>
                <p class="text-gray-400 text-xs">role:  {job}</p>
                <p class="text-gray-400 text-xs">path:  {path}</p>
              </div>
              <div class="rounded-lg bg-blue-100 dark:bg-white p-2 w-full">
                <div class="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                  <p class="flex flex-col">
                    taken courses
                    <span class="text-black dark:text-indigo-500 font-bold">
                      {completedCourses?.length}
                    </span>
                  </p>
                  <p class="flex flex-col">
                    required courses
                    <span class="text-black dark:text-indigo-500 font-bold">
                      {requiredCourses?.length}
                    </span> 
                  </p>
                  <p class="flex flex-col">
                  
                    progress
                    <span class="text-black dark:text-indigo-500 font-bold">
                      {(completedCourses?.length / requiredCourses?.length) *100}%
                    <progress class="progress progress-secondary w-56" value={(completedCourses?.length / requiredCourses?.length) *100} max="100"></progress>
                    </span>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
