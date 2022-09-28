import { useEffect, useState } from "react";
import Card from "../UI/Card";

const Api2A = (props) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "63df04295bmsh575e8ddf725c6c5p16f692jsnc2dd1ebb0930",
        "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      },
    };

    fetch(
      `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lon=${props.longitude}&lat=${props.latitude}`,
      options
    )
      .then((response) => response.json())

      .then((data) => setCurrentWeather(data))
      .catch((err) => {
        console.error(err);
      });
  }, [props.longitude, props.latitude]);
  console.log(currentWeather);

  return (
    <div>
      {currentWeather === null || typeof currentWeather === "undefined" ? (
        <div />
      ) : (
        <div>
          <div
            style={{
              color: "yellow",
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            Next 15 day forcast
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {currentWeather.data.map((forcast) => (
              <div key={forcast.datetime}>
                <Card id={forcast.datetime}>
                  Min Temprature:
                  {forcast.min_temp}
                  <br />
                  Max Temprature:
                  {forcast.max_temp}
                  <br />
                  Wind: {(forcast.wind_spd * 3.6).toFixed(2)} km/h{" "}
                  {forcast.wind_cdir}
                  <br />
                  Humidity: {forcast.rh} %
                  <br />
                  Visibility: {Math.ceil(forcast.vis)} km
                  <br />
                  Pressure: {(forcast.pres / 1000).toFixed(2)} bar
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Api2A;
