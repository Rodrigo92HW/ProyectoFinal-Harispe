import { useParams } from "react-router-dom";
import { getProductByCategory } from "../../helpers/apiFetcher";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function ItemCategoryContainer() {
    const { categoryId } = useParams();
    const [productsByCategory, setProductsByCategory] = useState([]);

    useEffect(() => {
        getProductByCategory(categoryId).then((products) => {
            setProductsByCategory(products);
        });
    }, [categoryId])

    return (
        <Container>
            <Row>
                {productsByCategory?.map((product) => (
                    <Col xs={4} key={product.id}>
                        <ItemList product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}