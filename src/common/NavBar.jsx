import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../components/Cart/CartWidget";

export default function NavBar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand><h1>Rodrigo Harispe</h1></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/"><Button variant="secondary" size="lg">Home</Button></Nav.Link>
                    <Nav.Link as={Link} to="/category/electronics"><Button variant="secondary" size="lg">Electronica</Button></Nav.Link>
                    <Nav.Link as={Link} to="/category/clothes"><Button variant="secondary" size="lg">Ropa</Button></Nav.Link>
                    <Nav.Link as={Link} to="/category/home"><Button variant="secondary" size="lg">Hogar</Button></Nav.Link>
                </Nav>
                <Nav.Link as={Link} to="/cart"><Button size="lg"><CartWidget /></Button></Nav.Link>
            </Container>
        </Navbar>
    )
}