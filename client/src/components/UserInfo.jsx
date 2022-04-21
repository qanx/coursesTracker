import React from "react";

function UserInfo() {
  return (
    <div className="   flex flex-col items-center ">
      <div className=" shadow-lg rounded-2xl md:w-8/12 sm:w-full my-3 p-4 bg-white dark:bg-gray-800 ">
        <div class="shadow-lg rounded-2xl w-full p-4 bg-white dark:bg-gray-800">
          <div class="flex flex-row items-start gap-4">
            <img
              src="https://api.lorem.space/image/face?hash=92048"
              class="w-28 h-28 rounded-lg"
            />
            <div class="h-28 w-full flex flex-col justify-between">
              <div>
                <p class="text-gray-800 dark:text-white text-xl font-medium">
                  name: John Jackson
                </p>
                <p class="text-gray-400 text-xs">role: FullStack dev</p>
              </div>
              <div class="rounded-lg bg-blue-100 dark:bg-white p-2 w-full">
                <div class="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                  <p class="flex flex-col">
                    taken courses
                    <span class="text-black dark:text-indigo-500 font-bold">
                      34
                    </span>
                  </p>
                  <p class="flex flex-col">
                    required courses
                    <span class="text-black dark:text-indigo-500 font-bold">
                      3
                    </span>
                  </p>
                  <p class="flex flex-col">
                    expierd coureses
                    <span class="text-black dark:text-indigo-500 font-bold">
                      9.3
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
