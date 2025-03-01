import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { cartContext } from "../context/CartContext";

export default function CartPurchase() {
    const { order, clearCart, totalPrice } = useContext(cartContext);
    const formattedPrice = totalPrice.toLocaleString('de-DE');

    return (
        <div>
            <Card className="bg-dark text-white" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://gamipress.com/wp-content/uploads/2018/12/purchases.svg" />
                <Card.Body>
                    <Card.Title><h3 className="fw-bold">Finalizar Compra</h3></Card.Title>
                    <Card.Subtitle><h4>Total = ${formattedPrice}</h4></Card.Subtitle>
                    <Card.Body className="d-grid gap-2 w-75 mx-auto" >
                        <Button size="lg" variant="success" onClick={() => order()}>Comprar!</Button>
                        <Button size="lg" variant="danger" onClick={() => clearCart()}>Vaciar carrito</Button>
                    </Card.Body>
                </Card.Body>
            </Card>

        </div>
    )
}