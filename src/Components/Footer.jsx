import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-dark text-white p-4 mt-4">
          <Col className="text-center">Copyright ⓒ Your Website 2024</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
