import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard";

function GetAllCoursesAdmin() {
  const [allPathsCourses, setallPathsCourses] = useState([]);
  const [allcourses,setAllcourses ]=useState([]);
  // const [path,setPath]=useState("")
  useEffect(() => {
    const getAllPathCourses = async () => {


      const res = await axios.get("/api/Course/pathsCourses");
      let arr=[]
      console.log(res.data);
      for (let e of res.data) {
            arr.push(e.courses);
          }
          const arrFlat = arr.flat()
          console.log(arr);
          console.log(arrFlat);
           setallPathsCourses((prevState) => [...prevState,...arrFlat])
          console.log(allPathsCourses);
      // try {
      //   let arr = [];
      //   const res = await axios.get("/api/Course/pathsCourses");

        
      //   await setallPathsCourses(res.data);
      //   //  await console.log(allPathsCourses);

      //   for (let e of allPathsCourses) {
      //     arr.push(e.courses);
      //   }
        
      //   setAllcourses(arr.flat())
      //   console.log(arr);
      //   console.log(allcourses);
      // } catch (error) {
      //   console.log(error);
      // }
    };

    getAllPathCourses();
  }, []);

  // function PathCards({pathTitle,courses}){

  //   return(
  //     <div className='h-40 w-24 bg-slate-400 flex flex-col rounded-md justify-center' >
  // <h1>{pathTitle}</h1>
  // <h3>{courses.length} courses</h3>

  //     </div>

  //   )
  // }
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {/* {courses?.map(c=> <PathCards courses={c.courses} pathTitle={c.pathTitle} /> )}  */}
          {allPathsCourses.length > 0 &&
            allPathsCourses?.map((c) =>
              
                <CourseCard
                  desc={c.desc}
                  key={c._id}
                  // path={c.pathTitle}
                  title={c.title}
                  img={c.img}
                  duration={c.duration}
                  id={c._id}
                />
              
            )}
        </div>
      </div>
    </section>
  );
}

export default GetAllCoursesAdmin;
