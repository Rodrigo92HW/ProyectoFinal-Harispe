import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Col, Container, Row } from "react-bootstrap";
import { getProducts } from "../../helpers/apiFetcher";

export default function ItemListContainer() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data)
        });
    }, []);

    return (
        <Container>
            <Row>
                {products?.map((product) => (
                    <Col lg={4} md={6} key={product.id}>
                        <ItemList product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}