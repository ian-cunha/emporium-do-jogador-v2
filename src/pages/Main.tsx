import { Button, Container, Row, Col, Image, Accordion } from "react-bootstrap";
import bgSec from "../assets/bgSec.png";

const Main = () => {
  return (
    <>
      <Container className="mt-5 mb-5 pt-5 pb-5">
        <Row>
          <Col sm={8}>
            <Image src={bgSec} />
            <h1 className="fw-bold">Emporium do Jogador</h1>
            <p>
              No Emporium do Jogador, os jogadores podem encontrar uma ampla
              seleção de informações sobre raças, classes, subclasses, magias,
              itens mágicos, monstros e muito mais. Esses recursos são
              detalhados e apresentados de forma clara e organizada, permitindo
              que os jogadores explorem as opções disponíveis para criar
              personagens únicos e emocionantes.
            </p>
            <Button className="btn-base mt-2 mb-2 fw-bold">
              Referência rápida
            </Button>
            <Button className="btn-base mt-2 mb-2 fw-bold">
              Notas de Atualização
            </Button>
          </Col>
          <Col sm={3}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <b>Raças</b>
                </Accordion.Header>
                <Accordion.Body>
                  Cada raça traz consigo vantagens e desvantagens
                  características, permitindo aos jogadores explorar diferentes
                  abordagens e estratégias no jogo.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <b>Classes</b>
                </Accordion.Header>
                <Accordion.Body>
                  A escolha da classe é uma decisão crucial para criar um
                  personagem que se encaixe no estilo de jogo e nas preferências
                  de cada jogador.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <b>Mágia</b>
                </Accordion.Header>
                <Accordion.Body>
                  Elas são expressões da conexão entre o plano material e o
                  sobrenatural, permitindo que os personagens transcendam as
                  limitações mundanas e desvendem segredos antigos.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
