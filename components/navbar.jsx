import { Navbar, Container, Nav } from 'react-bootstrap';

export const Navigation = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Rea Technology</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="add">Ürün ekle</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};
