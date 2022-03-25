import {
  Container,
  Row,
  Col,
  Navbar,
  Button,
  Form,
  FormControl,
  Card,
} from "react-bootstrap";

const SideBar = () => {
  return (
    <Container>
      <Row>
        <Col md={2}>
          <Navbar bg="light" expand="lg">
            <div className="nav-container">
              <Navbar.Brand href="#home">Spotify</Navbar.Brand>
              <Card.Img variant="top" src="../logo/Spotify-Logo.png" />

              <Button
                className="navbar-toggler"
                type="Button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <p className="navbar-toggler-icon"></p>
              </Button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <li>
                      <a className="nav-item nav-link" href="index.html">
                        <i className="fas fa-home fa-lg"></i>&nbsp; Home
                      </a>
                    </li>
                    <li>
                      <a className="nav-item nav-link" href="#">
                        <i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                        Library
                      </a>
                    </li>
                    <li>
                      <div className="input-group mt-3">
                        <Form inline>
                          <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            onkeyup="handleSearch(event)"
                          />
                        </Form>
                        <div className="input-group-append mb-2">
                          <Button
                            Button
                            variant="outline-success"
                            onclick="search()"
                          >
                            GO
                          </Button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="nav-btn">
              <Button variant="outline-success">Sign Up</Button>
              <Button variant="outline-success">Login</Button>
              <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
            </div>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};
export default SideBar;
