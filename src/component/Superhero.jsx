import { Card, Col, Container, Row, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>\
        <br />
        <h1 className="text-white">SUPERHERO MOVIE</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="bg-dark text-white movieImage">
              <Image src={antmanImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-2">
              <Card.Title className="text-center">Ant Man</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={avengerImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-2">
              <Card.Title className="text-center">Avenger</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={batmanImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-2">
              <Card.Title className="text-center">Batman</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={robinhoodImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-2">
              <Card.Title className="text-center">Robin Hood</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={spidermanImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-2">
              <Card.Title className="text-center">Spiderman</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={supermanImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-2">
              <Card.Title className="text-center">Superman</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
