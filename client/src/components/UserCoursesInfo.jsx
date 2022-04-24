import React from 'react'


function CompletedCourseDetailes({image ,desc, duration,title} ){

    return(

        <tbody>
        <tr>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <a href="#" class="block relative">
                            <img alt="profil" src={image} class="mx-auto object-cover rounded-full h-10 w-10 "/>
                        </a>
                    </div>
                    <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                           {title}
                        </p>
                    </div>
                </div>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {desc}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                 {duration}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                    </span>
                    <span class="relative">
                        Pass
                    </span>
                </span>
            </td>
        </tr>

    </tbody>
    )

}
function UserCoursesInfo({completedCourses}) {
  return (
      
<div class="container  mx-auto md:w-8/12 sm:w-full">
    
    <div class="py-8">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Course name
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            description
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            duration "Hours"
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                status
                            </th>
                        </tr>
                    </thead>
                 
                    {/* .map(c=> <UserCoursesInfo image={c.img} duration={c.duration} title={c.title} />) */}
                    {/* <CompletedCourseDetailes/>  */}
                    {completedCourses? completedCourses.map(c=> <CompletedCourseDetailes desc={c.desc} key={c._id} image={c.img} duration={c.duration} title={c.title} />)    :null}
                    {/* <CompletedCourseDetailes/> */}

                     
                </table>
            </div>
        </div>
    </div>
</div>

  )
}

export default UserCoursesInfo