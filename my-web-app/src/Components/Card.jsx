import helpImage from "./assets/help.png";

function Card() {
    return (
        <>
            <div className="Card">
                <img className="CardImage" src={helpImage} alt="Home Icon"></img>
                <h2>Card Title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur a similique cumque quo corrupti delectus. Dolores reiciendis ad dolorum. Doloribus dicta, sint repudiandae velit debitis dolorum blanditiis quasi totam repellendus.</p>
            </div>
        </>
    );
}

export default Card