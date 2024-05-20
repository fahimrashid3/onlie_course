// import PropTypes from 'prop-types'
// import MyCourse from '../MyCourse/MyCourse';

import MyCourse from "../MyCourse/MyCourse";

const MyCourses = ({course,time}) => {
    return (

         <div className="w-1/3 bg-gray-300 px-5 rounded-lg">
            
            <h3 className='text-3xl text-blue-600 rounded-lg m-5 p-2'>My Course</h3>

            <p className="text-xl font-semibold border-t-2 border-b-2 py-2 mt-2">Credit time remain : {30-time}</p>

            
            <h2 className="font-bold text-2xl mt-2 border-b-2 border-t-2 py-3">Number of course : {course?.length}</h2>
            {
            course?.map((course ,idx)=><MyCourse key={idx} course={course}></MyCourse>)
            }
            <p className="text-xl font-semibold border-t-2 border-b-2 py-2 mt-2">Total Credit Hour : {time}</p>
          
            
        </div>
    
    );
};
// MyCourses.propTypes={
//     courses:PropTypes.array,
// }
export default MyCourses;