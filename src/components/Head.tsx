/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const Head = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          expand={expand}
          fixed="top"
          data-bs-theme="dark"
          className="bg mb-3"
        >
          <Container fluid>
            <Navbar.Brand className="fw-semibold color" href="#">
              Emporium do Jogador
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header className="bg color" closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Biblioteca
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="bgImg">
                <Nav className="justify-content-end flex-grow-1 pe-3 fw-bold">
                  <NavDropdown
                    title="Raças"
                    menuVariant="dark"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#">
                      Livro do jogador
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Guia de Volo</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Guia de Eberron
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Guia de Wildemount
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Guia de Ravnica
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Guia de Ravenloft
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Odisseia Mítica de Theros
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Classes"
                    menuVariant="dark"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#">Artificer</NavDropdown.Item>
                    <NavDropdown.Item href="#">Bárbaro</NavDropdown.Item>
                    <NavDropdown.Item href="#">Bardo</NavDropdown.Item>
                    <NavDropdown.Item href="#">Bruxo</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Caçador-Sangrento
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Clérigo</NavDropdown.Item>
                    <NavDropdown.Item href="#">Druida</NavDropdown.Item>
                    <NavDropdown.Item href="#">Feiticeiro</NavDropdown.Item>
                    <NavDropdown.Item href="#">Guerreiro</NavDropdown.Item>
                    <NavDropdown.Item href="#">Ladino</NavDropdown.Item>
                    <NavDropdown.Item href="#">Mago</NavDropdown.Item>
                    <NavDropdown.Item href="#">Monge</NavDropdown.Item>
                    <NavDropdown.Item href="#">Paladino</NavDropdown.Item>
                    <NavDropdown.Item href="#">Patrulheiro</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Mágias"
                    menuVariant="dark"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#">Truques</NavDropdown.Item>
                    <NavDropdown.Item href="#">Nível 1</NavDropdown.Item>
                    <NavDropdown.Item href="#">Nível 2</NavDropdown.Item>
                    <NavDropdown.Item href="#">Nível 3</NavDropdown.Item>
                    <NavDropdown.Item href="#">Nível 4</NavDropdown.Item>
                    <NavDropdown.Item href="#">Nível 5</NavDropdown.Item>
                    <NavDropdown.Item href="#">Nível 6</NavDropdown.Item>
                    <NavDropdown.Item href="#">Nível 7</NavDropdown.Item>
                    <NavDropdown.Item href="#">Nível 8</NavDropdown.Item>
                    <NavDropdown.Item href="#">Nível 9</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Escolas de mágias"
                    menuVariant="dark"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#">Abjuração</NavDropdown.Item>
                    <NavDropdown.Item href="#">Conjuração</NavDropdown.Item>
                    <NavDropdown.Item href="#">Adivinhação</NavDropdown.Item>
                    <NavDropdown.Item href="#">Encantamento</NavDropdown.Item>
                    <NavDropdown.Item href="#">Evocação</NavDropdown.Item>
                    <NavDropdown.Item href="#">Ilusão</NavDropdown.Item>
                    <NavDropdown.Item href="#">Necromancia</NavDropdown.Item>
                    <NavDropdown.Item href="#">Transmutação</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Head;
