import { useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ProfileContainers from "./Containers/ProfileContainers/ProfileContainers";

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();
    console.log(data.results);
    setUsers(data.results);
  };

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <Button label="Get Random User" handleClick={getUsers} />
      <ProfileContainers profiles={users} />
    </div>
  );
};

export default App;
