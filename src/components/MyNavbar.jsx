import React from "react"
import { Navbar, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const MyNavbar = () => {
  const appleGrey = "#1f1f1f"
  const appleRed = "#fa233b"

  return (
    <Navbar
      variant="dark"
      className="border-bottom border-dark"
      style={{ backgroundColor: appleGrey, height: "64px" }}
    >
      <Container
        fluid
        className="d-flex justify-content-between align-items-center h-100 position-relative"
      >
        <button
          className="btn p-0 border-0 d-flex flex-column justify-content-center gap-1"
          style={{ width: "24px", height: "24px", background: "transparent" }}
          aria-label="Menu"
        >
          <span
            className="d-block w-100 rounded-pill"
            style={{ height: "2px", backgroundColor: appleRed }}
          ></span>

          <span
            className="d-block w-100 rounded-pill"
            style={{ height: "2px", backgroundColor: appleRed }}
          ></span>
        </button>

        <div
          className="position-absolute start-50 translate-middle-x d-flex align-items-center text-white fw-bold"
          style={{ fontSize: "1.2rem" }}
        >
          <svg
            viewBox="0 0 170 170"
            className="me-1"
            style={{
              width: "18px",
              height: "18px",
              fill: "white",
              paddingBottom: "2px",
            }}
          >
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.71 6.78-9.73 13.27-17.73 13.27-7.78 0-10.45-5.71-19.73-5.71-9.28 0-11.98 5.71-19.73 5.71-7.79 0-12.77-6.22-17.73-13.27-8.49-12.08-15.11-30.85-15.11-48.81 0-25.92 16.62-39.73 32.48-39.73 8.34 0 15.58 5.48 20.61 5.48 5.03 0 12.87-6.02 22.45-5.48 3.58.17 14.37 1.5 21.01 11.38-1.02.6-12.55 7.27-12.55 27.67 0 22.08 18.73 29.89 19.52 30.24-.13.78-2.98 10.28-4.78 13.59zM116.83 23.33c4.13-5.22 6.99-12.33 6.13-19.54-6.41.34-13.68 4.47-17.91 9.49-3.79 4.45-7.23 11.53-6.23 18.25 7.15.54 13.92-3.05 18.01-8.2z" />
          </svg>
          Music
        </div>

        <a
          href="#login"
          className="text-decoration-none fw-normal"
          style={{ color: appleRed, fontSize: "1rem" }}
        >
          Accedi
        </a>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
