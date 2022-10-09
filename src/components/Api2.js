import { useEffect, useCallback, useState } from "react";
import Card from "../UI/Card";

const Api2 = (props) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [valid, setValid] = useState(false);
  const getWeather = useCallback(() => {
    

    fetch(
      `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${props.longitude}&lat=${props.latitude}`,
      options
    )
      .then((response) => response.json())

      .then((data) => setCurrentWeather(data))

      .catch((err) => {
        console.error(err);
      });
    setValid(true);
  }, [props.longitude, props.latitude]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);
  console.log(currentWeather);

  return (
    <div>
      {currentWeather !== null && typeof currentWeather !== "undefined" ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Card>
            {valid && (
              <div>
                <div>{currentWeather.data[0].city_name}</div>
                <br />
                Current Temprature: {currentWeather.data[0].temp} °C
                <br />
                Feel's like: {currentWeather.data[0].app_temp} °C
                <br />
                Wind: {(currentWeather.data[0].wind_spd * 3.6).toFixed(
                  2
                )} km/h {currentWeather.data[0].wind_cdir}
                <br />
                Visibility: {currentWeather.data[0].vis} km
                <br />
                Pressure: {(currentWeather.data[0].pres / 1000).toFixed(2)} bar
                <br />
                Humidity: {currentWeather.data[0].rh}
              </div>
            )}
          </Card>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              color: "purple",
              fontSize: "4rem",
              fontWeight: "bold",
            }}
          >
            Error
          </div>
        </div>
      )}
    </div>
  );
};

export default Api2;
