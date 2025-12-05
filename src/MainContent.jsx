import { Container, Row, Col, Card } from "react-bootstrap"
import image1a from "./assets/assets/images/1a.png"
import image1b from "./assets/assets/images/1b.png"
import RadioEpisode from "./components/RadioEpisode"
import NewRelease from "./components/NewRelease"
import Explore from "./components/Explore"
import Footer from "./components/Footer"
import MyNavbar2 from "./components/MyNavbar2"

function MainContent() {
  return (
    <>
      <div className="bg-dark min-vh-100">
        <MyNavbar2 />

        <h1 className="text-white my-5 pb-2 ps-2">Novità</h1>
        <Container className="text-white">
          <Row className="d-flex">
            <Col md={6}>
              <p>NUOVA STAZIONE RADIO</p>
              <p>Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</p>
              <Card.Img src={image1a} />
            </Col>
            <Col md={6}>
              <p>NUOVA STAZIONE RADIO</p>
              <p>Ecco la nuova casa della musica latina</p>
              <Card.Img src={image1b} />
            </Col>
          </Row>
          <Row>
            <Col>
              <RadioEpisode />
            </Col>
          </Row>
          <Row>
            <Col>
              <Col>
                <NewRelease />
              </Col>
            </Col>
          </Row>
          <Row>
            <Col>
              <Explore />
            </Col>
          </Row>
          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default MainContent
