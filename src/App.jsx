import { useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import ProfileCard from "./components/ProfileCard/ProfileCard";

const App = () => {
  const [char, setChar] = useState();

  const getUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    setChar(data.results[0]);
  };

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <Button label="Get Random Character" onClick={getUser} />
      <ProfileCard />
    </div>
  );
};

export default App;
