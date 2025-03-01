import { useContext, useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Col, Container, Row } from "react-bootstrap";
import { getProducts } from "../../helpers/apiFetcher";
import ItemPlaceholder from "./ItemPlaceholder";
import { ToastContainer } from "react-toastify";
import { cartContext } from "../context/CartContext";

export default function ItemListContainer() {
    const [products, setProducts] = useState(null);
    const {loading, setLoading} = useContext(cartContext);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    return (
        <Container>
            <ToastContainer />
            <Row>
                {loading ?
                    (
                        <>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <Col lg={4} md={6} key={index}>
                                    <ItemPlaceholder />
                                </Col>
                            ))}
                        </>
                    )
                    :
                    (
                        products?.map((product) => (
                            <Col lg={4} md={6} key={product.id}>
                                <ItemList product={product} />
                            </Col>
                        ))
                    )
                }
            </Row>
        </Container>
    );
}