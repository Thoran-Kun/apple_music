import "./App.css"
import MyNavbar from "./components/MyNavbar"
import { Container, Row, Col } from "react-bootstrap"
import LeftNav from "./components/LeftNav"
import MainContent from "./MainContent"

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={3} className="d-none d-md-block bg-dark text-white">
            <LeftNav />
          </Col>
          <Col md={9} className="px-0">
            <MainContent />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
