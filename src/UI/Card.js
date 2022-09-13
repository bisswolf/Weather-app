import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
const Cards = (props) => {
  return (
    <Card className="background">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment{props.children}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
