import PropTypes from 'prop-types';

const Course = ({course,manageSelectedCourse}) => {
    const {course_img,course_name,price,credit_time,course_details}=course
    return (
        <div className='bg-gray-200 p-5 rounded-lg space-y-3'>
            <img className='min-h-64' src={course_img} alt={course_name} />
            <h1 className='font-semibold text-xl mt-2'>{course_name}</h1>
            <p>{course_details}</p>
            <div className='flex justify-between'>
                <p>$ {price}</p>
                <p>{credit_time} minute</p>
            </div>
            <div className='flex justify-center mt-2'>
                <button
                 onClick={()=>manageSelectedCourse(course_name,credit_time)}
                className='bg-blue-700 text-white px-10 py-2 rounded-lg text-lg' 
                >Select</button>
            </div>
        </div>
    );
};
Course.propTypes={
    course:PropTypes.object,
    manageSelectedCourse:PropTypes.func
}

export default Course;