import { Nav, Row, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Nav className="justify-content-center bg pt-3" activeKey="/home">
            <Nav.Item>
              <Nav.Link className="color" eventKey="link-0">
                Twitter
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="color" eventKey="link-1">
                Instagram
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="color" eventKey="link-2">
                Github
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <p className="bg color p-5 text-center fw-light">
            As informações contidas neste website são fornecidas apenas para
            fins informativos e não constituem aconselhamento ou recomendação de
            qualquer tipo.
            <br />
            <b className="fw-bold"> Copyright © 2023 Emporium do Jogador.</b>
          </p>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
