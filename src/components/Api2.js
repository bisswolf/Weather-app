import { useEffect, useCallback, useState } from "react";

const Api2 = (props) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [valid, setValid] = useState(false);
  const getWeather = useCallback(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "63df04295bmsh575e8ddf725c6c5p16f692jsnc2dd1ebb0930",
        "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      },
    };

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
      {!currentWeather ? (
        <div></div>
      ) : (
        <div>
          <div>Api2:-</div>

          {valid && (
            <div>
              Current Temprature:-
              {currentWeather.data[0].temp}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Api2;
