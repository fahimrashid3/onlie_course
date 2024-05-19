import PropTypes from 'prop-types';

const Course = ({course}) => {
    const {course_img,course_name,price,credit_time,course_details}=course
    return (
        <div className='bg-gray-200 p-5 rounded-lg space-y-3'>
            <img className='h-36 w-72' src={course_img} alt={course_name} />
            <h1 className='font-semibold text-xl mt-2'>{course_name}</h1>
            <p>{course_details}</p>
            <div className='flex justify-between'>
                <p>${price}</p>
                <p>{credit_time} minute</p>
            </div>
        </div>
    );
};
Course.propTypes={
    course:PropTypes.object
}

export default Course;