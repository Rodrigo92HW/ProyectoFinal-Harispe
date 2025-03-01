import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import CartWidget from "../components/Cart/CartWidget";

export default function NavBar() {
    const location = useLocation();

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Navbar.Brand style={{marginLeft: "2%"}}><h1>Digi-Store</h1></Navbar.Brand>
            <Container>
                
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/"><Button variant={location.pathname === "/" ? "success" : "primary"} size="lg">Home</Button></Nav.Link>
                    <Nav.Link as={Link} to="/category/electronics"><Button variant={location.pathname === "/category/electronics" ? "success" : "primary"} size="lg">Electronica</Button></Nav.Link>
                    <Nav.Link as={Link} to="/category/clothes"><Button variant={location.pathname === "/category/clothes" ? "success" : "primary"} size="lg">Ropa</Button></Nav.Link>
                    <Nav.Link as={Link} to="/category/home"><Button variant={location.pathname === "/category/home" ? "success" : "primary"} size="lg">Hogar</Button></Nav.Link>
                </Nav>
                <Nav.Link as={Link} to="/cart"><Button variant={location.pathname === "/cart" ? "success" : "primary"} size="lg"><CartWidget /></Button></Nav.Link>
            </Container>
        </Navbar>
    )
}