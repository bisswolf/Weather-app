import Spinner from "react-bootstrap/Spinner";

function LoadingSpinner() {
  return (
    <Spinner
      animation="border"
      variant="danger"
      style={{ marginTop: "12rem", width: "5rem", height: "5rem" }}
    />
  );
}

export default LoadingSpinner;
