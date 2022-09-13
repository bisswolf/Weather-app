import { useCallback, useEffect, useState } from "react";

function clickListner() {}

const ApiSearch = (props) => {
	const fetchWeather = useCallback(() => {
		fetch(
			`https://community-open-weather-map.p.rapidapi.com/weather?q=london%2Cuk$&lat=0&lon=0&id=2172797&lang=null&units=imperial`,
			{
				method: "GET",
				headers: {
					"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
					"x-rapidapi-key":
						"63df04295bmsh575e8ddf725c6c5p16f692jsnc2dd1ebb0930",
				},
			}
		)
			.then((response) => response.json())

			.then((data) => setSearchWeather(data))
			.catch((err) => {
				console.error(err);
			});
	}, []);
	const [searchWeather, setSearchWeather] = useState([]);

	useEffect(() => {
		fetchWeather();
	}, [fetchWeather]);
	console.log(searchWeather);

	return (
		<div>
			{searchWeather && (
				<div>
					<div>Api2:-{searchWeather.name}</div>

					{!searchWeather && (
						<div>
							Current Temprature:-
							{Math.round(
								(((searchWeather.main.temp - 32) * 5) / 9 + Number.EPSILON) *
									100
							) / 100}
						</div>
					)}

					<button>Click</button>
				</div>
			)}
		</div>
	);
};

export default ApiSearch;
