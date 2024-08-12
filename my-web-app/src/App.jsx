import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Food from "./Components/Food.jsx";
import Card from "./Components/Card.jsx";
import Button from "./Components/Button.jsx";
import Student from "./Components/Student.jsx";
import UserGreeting from "./Components/UserGreeting.jsx";
import List from "./Components/List.jsx";

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
      <Header />
      <Food />
      <hr />
      <Card />
      <hr />
      <Button />
      <hr />
      <Student name="John Doe" age={12} isStudent={true} />
      <Student />
      <hr />
      <UserGreeting isLoggedIn={false} name="Jane Smith" />
      <UserGreeting isLoggedIn={true} name="Jane Smith" />
      <hr />
      {fruits.length > 0 && <List items={fruits} category="Fruit" />}
      {meats.length > 0 && <List items={meats} category="Meats" />}
      <hr />
      <Footer />
    </>
  );
}

export default App;
