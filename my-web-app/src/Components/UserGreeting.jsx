import PropTypes from 'prop-types'
function UserGreeting(props) {
    const welcomeMessage = <h3 className="UserGreetingLoggedIn">Welcome {props.name}!</h3>
    const logoutMessage = <h3 className="UserGreetingLoggedOut">Please log in to see the welcome message.</h3>
    return (props.isLoggedIn ? welcomeMessage : logoutMessage);
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    name: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    name: 'Guest'
}


export default UserGreeting