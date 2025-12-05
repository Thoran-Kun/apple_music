import { useEffect, useState } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

function NewRelease() {
  const [tracks, setTracks] = useState([])
  const appleRed = "#fa233b"

  useEffect(() => {
    const fetchNewReleases = async () => {
      try {
        const res = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
        )
        if (!res.ok) throw new Error("Errore Deezer")
        const data = await res.json()
        setTracks(data.data.slice(0, 6))
      } catch (err) {
        console.error(err)
      }
    }

    fetchNewReleases()
  }, [])

  return (
    <section className="mt-5 px-3">
      <div className="d-flex align-items-center mb-3">
        <h2 className="section-title text-white mb-0 me-2">Nuove uscite</h2>

        <span style={{ color: appleRed, fontSize: "1.5rem" }}>›</span>
      </div>

      <Row className="g-3 mt-2">
        {tracks.map((track) => (
          <Col key={track.id} xs={6} sm={4} md={3} lg={2}>
            <Card className="song-card bg-dark border-0">
              <div className="song-cover-wrapper">
                <Card.Img
                  src={track.album.cover_medium}
                  alt={track.title}
                  className="song-cover-img rounded-3"
                />
              </div>

              <Card.Body className="p-0 pt-2 bg-dark">
                <Card.Text
                  className="song-title text-white small mb-0"
                  style={{ minHeight: "3em" }}
                >
                  {track.title}
                </Card.Text>
                <Card.Text className="song-artist text-secondary small">
                  {track.artist.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default NewRelease
