import PropTypes from 'prop-types'
function Student(props) {
    return (
        <>
            <ul>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                <li>Student: {props.isStudent ? "Yes" : "No"}</li>
            </ul>
        </>
    )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,

}

Student.defaultProps = {
    name: 'Guest',
    age: 0,
    isStudent: false,

}

export default Student