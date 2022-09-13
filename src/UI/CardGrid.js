import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CardGrid(props) {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>{props.children}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardGrid;
