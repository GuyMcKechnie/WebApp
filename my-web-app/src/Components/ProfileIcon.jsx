import helpImage from "./assets/help.png";
function ProfileIcon() {
    const handleClick = (e) => e.target.style.display = "none";
    return (
        <img onClick={(e) => handleClick(e)} src={helpImage} alt="Profile Icon" />
    );
}

export default ProfileIcon