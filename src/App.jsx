import { useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import ProfileCard from "./components/ProfileCard/ProfileCard";

const App = () => {
  const [users, setUsers] = useState();

  const getUsers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=3");
    const data = await response.json();
    console.log(data.results);
    setUsers(data.results);
  };

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <Button label="Get Random User" handleClick={getUsers} />
      {users && (
        <ProfileCard
          name={users[0].name.first}
          email={users[0].email}
          phoneNumber={users[0].phone}
          image={users[0].picture.large}
        />
      )}
    </div>
  );
};

export default App;
