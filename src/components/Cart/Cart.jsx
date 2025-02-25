import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Row, Col, Container } from "react-bootstrap";
import CartItemPlaceHolder from "./CartItemPlaceHolder";
import CartPurchase from "./CartPurchase";

export default function Cart() {
    const { cart, cartAmount } = useContext(cartContext);

    return (
        <Container className="mt-5">
            <Row>
            <Col xs={8}>
                {cartAmount == 0 ?
                    <CartItemPlaceHolder />
                    :
                    <>
                        {cart?.map((item) => (
                            <Row key={item.item.id}>
                                <CartItem item={item} />
                            </Row>
                        ))}
                    </>
                }
            </Col>
            <Col xs={4}>
                <CartPurchase />
            </Col>
            </Row>
        </Container>
    )
}