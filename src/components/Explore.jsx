import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
const EXPLORE_ITEMS = [
  "Esplora per genere",
  "Decenni",
  "Attività e stati d'animo",
  "Worldwide",
  "Classifiche",
  "Audio spaziale",
  "Video musicali",
  "Nuovi artisti",
  "Hit del passato",
]

function Explore() {
  const appleRed = "#fa233b"
  const appleGrey = "#1f1f1f"

  const buttonStyle = {
    backgroundColor: appleGrey,
    color: appleRed,
    borderColor: appleGrey,
    width: "100%",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 15px",
    fontWeight: "normal",
    boxShadow: "none",
  }

  const arrowStyle = {
    color: appleRed,
    fontSize: "1.2rem",
    fontWeight: "bold",
  }

  return (
    <section className="mt-5 mb-4 px-3">
      {" "}
      <h2 className="section-title mb-3 text-white">Altro da esplorare</h2>
      <Row className="g-3">
        {EXPLORE_ITEMS.map((label) => (
          <Col key={label} xs={12} md={4}>
            <Button
              style={buttonStyle}
              className="d-flex justify-content-between border-0 shadow-none"
            >
              <span className="fw-normal">{label}</span>
              <span style={arrowStyle}>›</span>
            </Button>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Explore
