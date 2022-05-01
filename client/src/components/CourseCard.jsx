import axios from "axios";
import React, { useEffect } from "react";

function CourseCard({path,title,desc,duration,img,id ,isAdmin,newToken}) {


console.log(isAdmin);
const  DeleteCourse = async(e)=>{

  console.log(newToken);
  e.preventDefault()
  const res =await axios.delete(`/api/Course/${id}`,
  {
    headers: {
      'Authorization': `Basic ${newToken}` 
    }}
  
  )
  console.log(res.data);

}


  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
          src={img}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {path}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
            {title}
          </h1>
{   desc ? <p className="leading-relaxed mb-3">{desc} </p> :
          <p className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat. not 
           

          </p>
          }
            
          
          <div className="flex items-center flex-wrap text-white">
            
            <label htmlFor="my-modal-6" className="btn modal-button">
              Book now
            </label>

          { isAdmin ?  <label onClick={(e)=>DeleteCourse(e)} htmlFor="my-modal-6" className="ml-2 btn modal-button">      Delete
            </label>: null}
         
            {/* <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Sorry!</h3>
                <p className="py-4">this feature is not currently available </p>
                <p className="py-4">course id : {id} </p>
                <div className="modal-action">
                  <label htmlFor="my-modal-6" className="btn">
                    okay
                  </label>
                </div>
              </div>
            </div> */}
          
          </div>
          <div  className="flex justify-end" >
           <span>{id}</span>

          <h6> duration :  {duration}</h6>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CourseCard;
