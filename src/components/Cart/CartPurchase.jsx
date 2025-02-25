import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { cartContext } from "../context/CartContext";
import { addOrder } from "../../helpers/apiFetcher";
import Swal from "sweetalert2";

export default function CartPurchase() {
    const { cart, clearCart, totalPrice } = useContext(cartContext);
    const formattedPrice = totalPrice.toLocaleString('de-DE');

    function order() {
        addOrder(cart).then((id) => {
            Swal.fire({
                title: "Order creada con exito!",
                text: "Tu orden posee el id: " + id,
                icon: "success"
            });
        });

        clearCart();
    }


    return (
        <div>
            <Card className="bg-dark text-white" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://gamipress.com/wp-content/uploads/2018/12/purchases.svg" />
                <Card.Body>
                    <Card.Title><h3 class="fw-bold">Finalizar Compra</h3></Card.Title>
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