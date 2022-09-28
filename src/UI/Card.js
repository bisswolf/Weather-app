import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
const Cards = (props) => {
  return (
    <Card className="background">
      <Card.Header>{props.id}</Card.Header>
      <Card.Body>
        <Card.Title>{props.children}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
