import { useState, useCallback, useEffect } from "react";
import Api2 from "./Api2";
import Api2A from "./Api2A";
const Api1 = () => {
  const [gotLocation, setGotLocation] = useState("");
  const fetchLocation = useCallback(() => {
    fetch(
      "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
          "x-rapidapi-key":
            "63df04295bmsh575e8ddf725c6c5p16f692jsnc2dd1ebb0930",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setGotLocation(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    fetchLocation();
  }, [fetchLocation]);
  console.log(gotLocation);
  return (
    <div>
      {!gotLocation ? (
        <div></div>
      ) : (
        <div>
          <div>Api1:-{gotLocation.city}</div>

          <Api2
            latitude={gotLocation.latitude}
            longitude={gotLocation.longitude}
          />
          <Api2A
            latitude={gotLocation.latitude}
            longitude={gotLocation.longitude}
          />
        </div>
      )}
    </div>
  );
};

export default Api1;
