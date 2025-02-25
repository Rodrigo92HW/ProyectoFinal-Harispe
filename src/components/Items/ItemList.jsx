import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";


export default function ItemList({ product }) {
    const formattedPrice = product.price.toLocaleString('de-DE');
    const {addItem} = useContext(cartContext);

    return (
        <Card className="bg-dark text-white" border="dark" style={{ width: '20vw', padding: '1%', margin: '2%', minWidth: '250px' }}>
            <Card.Img style={{ height: '30vh', objectFit: 'cover', border: '1px gray solid' }} variant="top" src={product.image} />
            <Card.Body style={{ height: '15vh', overflowY: 'scroll' }}>
                <Card.Title style={{ fontSize: '1.5rem' }}>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Text style={{ fontWeight: '600' }}><u>Precio:</u> ${formattedPrice}</Card.Text>
                <Card.Text style={{ fontSize: '0.8rem', fontWeight: '600' }}><u>Categoria:</u> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</Card.Text>
            </Card.Body>
            <Card.Body className="d-flex justify-content-between">
                <Card.Link as={Link} to={`/category/item/${product.id}`}><Button variant="primary">Conocer Más...</Button></Card.Link>
                <Button variant="success" onClick={() => addItem(product)}>Comprar</Button>
            </Card.Body>
        </Card>
    )
}