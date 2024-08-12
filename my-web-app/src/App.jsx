import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Food from "./Components/Food.jsx";
import Card from "./Components/Card.jsx";
import Button from "./Components/Button.jsx";
import Student from "./Components/Student.jsx";
import UserGreeting from "./Components/UserGreeting.jsx";
import List from "./Components/List.jsx";
import ProfileIcon from "./Components/ProfileIcon.jsx";
import Hooks from "./Components/Hooks.jsx";
import CountingComponent from "./Components/CountingComponent.jsx";
import TextUpdater from "./Components/TextUpdater.jsx";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 45 },
    { id: 3, name: "Orange", calories: 70 }
  ];

  const meats = [
    { id: 4, name: "Steak", calories: 100 },
    { id: 5, name: "Pork Chop", calories: 115 },
    { id: 6, name: "Sausage", calories: 95 }
  ];
  return (
    <>
      <h1>Header</h1>
      <Header />
      <hr />

      <h1>Food Component</h1>
      <Food />
      <hr />

      <h1>Cards</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <hr />

      <h1>Different Buttons</h1>
      <Button />
      <Button />
      <Button />
      <Button />
      <hr />

      <h1>Student Component</h1>
      <p>An introduction into setting data using props.</p>
      <Student name="John Doe" age={12} isStudent={true} />
      <h3>This has default values set</h3>
      <Student />
      <hr />

      <h1>User Greeting Component</h1>
      <p>Manipulating CSS/HTML using prop data.</p>
      <UserGreeting isLoggedIn={false} name="Jane Smith" />
      <UserGreeting isLoggedIn={true} name="Jane Smith" />
      <hr />

      <h1>List Component</h1>
      {fruits.length > 0 && <List items={fruits} category="Fruit" />}
      {meats.length > 0 && <List items={meats} category="Meats" />}
      <hr />

      <h1>Profile Icon Component</h1>
      <p>This image disappears when its clicked. It uses the click event handler.</p>
      <ProfileIcon></ProfileIcon>
      <hr />

      <h1>Hooks</h1>
      <p>A simple example of using React Hooks.</p>
      <Hooks />
      <hr />

      <h1>Counting Component</h1>
      <p>This component shows how to use a state variable in a functional component.</p>
      <CountingComponent />
      <hr />

      <h1>Text Updater</h1>
      <p>This component shows how to dynamically update a text field.</p>
      <TextUpdater />

      <h1>Footer</h1>
      <Footer />
    </>
  );
}

export default App;
