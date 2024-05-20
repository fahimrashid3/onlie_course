// import PropTypes from 'prop-types'
const MyCourse = ({course}) => {
    return (
        <div>
            {
                <h1 className="text-2xl">{course}</h1>
            }
            
        </div>
    );
};

// MyCourse.propTypes={
//     course:PropTypes.object
// }
export default MyCourse;