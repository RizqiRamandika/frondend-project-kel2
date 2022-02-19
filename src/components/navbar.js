import React from "react";
import axios from "axios";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const BaNav = () => {
  const history = useHistory();

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{backgroundColor:"rgb(0, 174, 255)", color:"white"}}
      className="fixed-top"
    >
      <Container>
        <Navbar.Brand href="/Home">
          <strong>HOME</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/SchoolList"><strong>Daftar Siswa</strong></Nav.Link>
          </Nav>
          <Button onClick={Logout} className="button" style={{borderRadius:"20px"}} variant="outline-dark">
            <strong>Log Out</strong>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BaNav;
