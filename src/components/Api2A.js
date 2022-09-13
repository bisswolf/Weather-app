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
      {!currentWeather ? (
        <div></div>
      ) : (
        <div>
          <div>Api2A:-</div>
          <ol>
            {currentWeather.data.map((forcast) => (
              <div key={forcast.datetime}>
                <Card>
                  <li>
                    Temprature:
                    {forcast.high_temp}
                    <div />
                    {/* Humidity:-{forcast.humidity} */}
                  </li>
                </Card>
              </div>
            ))}
          </ol>
          {/* <ol>
						{currentWeather.list.map((forcast) => (
							<li key={forcast.dt}>
								Temprature:-
								{Math.round(
									(forcast.temp.average - 273.15 + Number.EPSILON) * 100
								) / 100}
							</li>
						))}
					</ol> */}
        </div>
      )}
    </div>
  );
};

export default Api2A;
