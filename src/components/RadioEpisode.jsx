import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Radio1 from "../assets/assets/images/2a.png"
import Radio2 from "../assets/assets/images/2b.png"
import Radio3 from "../assets/assets/images/2c.png"
import Radio4 from "../assets/assets/images/2d.png"
import Radio5 from "../assets/assets/images/2e.png"
import Radio6 from "../assets/assets/images/2f.png"

const RADIO_ITEMS = [
  {
    id: 1,
    img: Radio1,
    title: "Prologo con Abuelo",
  },
  {
    id: 2,
    img: Radio2,
    title: "The Wanderer",
  },
  {
    id: 3,
    img: Radio3,
    title: "Michael Buble, Carly Pearce & Zane Lowe",
  },
  {
    id: 4,
    img: Radio4,
    title: "Stephan Moccio: The Zane Lowe Interview",
  },
  {
    id: 5,
    img: Radio5,
    title: "Chart Spotlight",
  },
  {
    id: 6,
    img: Radio6,
    title: "Guest: Julia Michaels",
  },
]

function RadioEpisode() {
  const appleRed = "#fa233b"

  return (
    <section className="mt-5 px-3">
      <div className="d-flex align-items-center mb-3">
        <h2 className="section-title text-white mb-0 me-2">
          Nuovi episodi radio
        </h2>

        <span style={{ color: appleRed, fontSize: "1.5rem" }}>›</span>
      </div>

      <Row className="g-3">
        {RADIO_ITEMS.map((item) => (
          <Col key={item.id} xs={6} sm={4} md={2}>
            <Card className="radio-card bg-dark border-0">
              <Card.Img src={item.img} alt={item.title} className="rounded-3" />

              <Card.Body className="p-0 pt-2 bg-dark">
                <Card.Text
                  className="radio-title text-white small"
                  style={{ minHeight: "3em" }}
                >
                  {item.title}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default RadioEpisode
