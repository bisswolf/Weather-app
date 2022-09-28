import "./App.css";
import Api1 from "./components/Api1";
// import Card from "react-bootstrap/Card";
import Nav from "./UI/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Card from "./UI/Card";
function App() {
  const [isValid, setIsValid] = useState(true);
  const submitHandler = () => {
    setIsValid(false);
  };
  return (
    <div className="App">
      {isValid === true ? (
        <div onChange={submitHandler}>
          <Nav />
          <Api1 />
        </div>
      ) : (
        <Nav />
      )}
    </div>
  );
}

export default App;
