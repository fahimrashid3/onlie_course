// import PropTypes from 'prop-types';


import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

    const [courses ,setCourses]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="w-2/3 mx-10 ">
            <h1 className="text-4xl">Course :{courses.length}</h1>
           <div className="grid grid-cols-3 gap-5 justify-center">
           {
                courses.map(course=> <Course
                    key={course.id}
                    course={course}
            
                ></Course>)
            }
           </div>
            
        </div>
    );
};
// Courses.propTypes={
    
// }

export default Courses;