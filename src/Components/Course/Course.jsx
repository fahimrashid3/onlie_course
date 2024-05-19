import PropTypes from 'prop-types';

const Course = ({course}) => {
    const {course_name}=course
    return (
        <div>
            <h1>{course_name}</h1>
        </div>
    );
};
Course.propTypes={
    course:PropTypes.object
}

export default Course;