import { Navbar } from "react-bootstrap";
import { useState } from "react";
import Api2A from "../components/Api2A";
import Api2 from "../components/Api2";
import Button from "react-bootstrap/Button";
import "./Nav.css";
const Nav = (props) => {
  const [myVal, setMyVal] = useState("");
  let [isValid, setIsValid] = useState(false);

  const req = function (abc) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "63df04295bmsh575e8ddf725c6c5p16f692jsnc2dd1ebb0930",
        "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
      },
    };

    fetch(
      `https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q=${abc}&accept-language=en&polygon_threshold=0.0`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMyVal(response))
      .catch((err) => console.error(err));
  };

  const formSubmission = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    req(event.target[0].value);
    setIsValid(true);
  };

  const validChanger = () => {
    setIsValid(false);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>What's the Weather?</Navbar.Brand>
        <div>
          <form onSubmit={formSubmission}>
            <input
              className="input"
              type="text"
              placeholder="Search"
              defaultValue=""
            />
            <Button variant="success" type="submit" size="sm">
              Search
            </Button>{" "}
          </form>
        </div>
      </Navbar>
      {isValid === true && myVal[0] !== undefined ? (
        <div>
          <Api2
            longitude={myVal[0].lon}
            latitude={myVal[0].lat}
            on={validChanger}
          />
          <Api2A
            longitude={myVal[0].lon}
            latitude={myVal[0].lat}
            on={validChanger}
          />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Nav;
