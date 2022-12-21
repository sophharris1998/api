import "./App.scss";
import Button from "./components/Button/Button";

const App = () => {
  const getUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <Button label="Get Random User" onClick={getUser} />
    </div>
  );
};

export default App;
