import { useState } from 'react'

import './App.css'
import Courses from './Components/Courses/Courses'
import MyCourses from './Components/MyCourses/MyCourses';
function App() {

  const[courses,setCourses]=useState([]);
  const[time, setTime]=useState(0);

  const manageSelectedCourse =(course_name,creditTime) =>{
    const added=courses.find(courses=>courses===course_name);
   
      if(added){
        alert('Try with new course.This one already added');
        }
      else{
        
        if(time+creditTime<=30){
          const newCourse =[...courses,course_name];
          setCourses(newCourse);
          setTime(time+creditTime)
        }
        else{
          alert('You can add course up to 30 hr credit time');

        }
          
        }
    
   
      
    }

   

  return (
    <>
        <h1 className='font-bold text-center text-4xl my-5'>Online School</h1>
        <div className='flex'>
        <Courses manageSelectedCourse={manageSelectedCourse}
        ></Courses>
        <MyCourses course={courses} time={time}></MyCourses>

        </div>

    </>
  )
}


export default App
