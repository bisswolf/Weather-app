import { useState, useCallback, useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import Api2 from "./Api2";
import Api2A from "./Api2A";
const Api1 = () => {
  const [gotLocation, setGotLocation] = useState("");
  const fetchLocation = useCallback(() => {
    fetch(
      "API",
      
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
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <div>
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
