import React from "react"
import { Navbar, Container, Button } from "react-bootstrap"
import { HiMenu } from "react-icons/hi"
import { FaApple } from "react-icons/fa"
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlayOutline,
  IoRepeat,
  IoShuffle,
} from "react-icons/io5"
import { HiOutlineUser } from "react-icons/hi2"

const MyNavbar = () => {
  const darkGrey = "#282828"
  const appleRed = "#fa233b"
  const iconColor = "#909090"
  const whiteIcon = "#d0d0d0"

  const VolumeSlider = () => (
    <div className="d-flex align-items-center gap-2">
      <div
        style={{
          width: "60px",
          height: "4px",
          backgroundColor: "#606060",
          borderRadius: "2px",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            backgroundColor: iconColor,
            borderRadius: "2px",
          }}
        ></div>
      </div>
    </div>
  )

  const AccessoButton = () => (
    <Button
      style={{
        backgroundColor: appleRed,
        borderColor: appleRed,
        height: "36px",
      }}
      className="fw-bold d-flex align-items-center justify-content-center"
    >
      Accedi
    </Button>
  )

  return (
    <Navbar
      className="p-0 border-bottom border-dark"
      style={{ backgroundColor: darkGrey, height: "64px" }}
    >
      <Container fluid className="h-100 px-3">
        <div className="d-flex d-md-none w-100 justify-content-between align-items-center">
          <HiMenu size={28} style={{ color: iconColor }} />

          <div
            className="d-flex align-items-center text-white fw-bold"
            style={{ fontSize: "1.2rem" }}
          >
            <FaApple size={28} className="me-1" style={{ color: whiteIcon }} />
            Music
          </div>

          <div className="d-flex align-items-center gap-3">
            <VolumeSlider />
            <AccessoButton />
          </div>
        </div>

        <div className="d-none d-md-flex w-100 justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <IoShuffle size={20} style={{ color: iconColor }} />
            <IoPlayBackSharp size={20} style={{ color: iconColor }} />
            <IoPlayOutline size={28} style={{ color: iconColor }} />
            <IoPlayForwardSharp size={20} style={{ color: iconColor }} />
            <IoRepeat size={20} style={{ color: iconColor }} />
          </div>

          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "300px",
              height: "40px",
              backgroundColor: "#404040",
              borderRadius: "4px",
            }}
          >
            <FaApple size={24} style={{ color: whiteIcon }} />{" "}
          </div>

          <div className="d-flex align-items-center gap-3">
            <VolumeSlider />
            <AccessoButton />
          </div>
        </div>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
