import React from "react";

function NewUser() {
  return (
    <div className="h-screen w-screen bg-slate-400 flex justify-center items-center">
      <div className="flex relative h-3/4 w-10/12 bg-zinc-700 justify-center items-center">

          <h1 className="absolute top-10 text-4xl">add new course:</h1>
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div class="form-control w-full max-w-xs ">
            <label class="label">
              <span class="label-text">User name</span>
        
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text-alt"></span>
              <span class="label-text-alt">  </span>
            </label>
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">User password</span>
              <span class="label-text-alt">Alt label</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text-alt">Alt label</span>
              <span class="label-text-alt">Alt label</span>
            </label>
          </div>
          
        </div>
        

        <div className="h-full w-full flex flex-col justify-center items-cente ">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">type</span>
              <span class="label-text-alt">Alt label</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text-alt">Alt label</span>
              <span class="label-text-alt">Alt label</span>
            </label>
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">availbe something</span>
              <span class="label-text-alt">Alt label</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text-alt">Alt label</span>
              <span class="label-text-alt">Alt label</span>
            </label>
          </div>
        
        </div>
        <button class="btn absolute bottom-1/4 max-w-xs">create Course</button>
        

      </div>
      
    </div>
  );
}

export default NewUser;
