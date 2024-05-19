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
        <div>
            <h1 className="text-4xl">Course :{courses.length}</h1>
            {
                courses.map(course=> <Course
                    key={course.id}
                    course={course}
            
                ></Course>)
            }
            
        </div>
    );
};
// Courses.propTypes={
    
// }

export default Courses;