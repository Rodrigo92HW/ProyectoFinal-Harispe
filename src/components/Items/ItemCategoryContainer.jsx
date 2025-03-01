import { useParams } from "react-router-dom";
import { getProductByCategory } from "../../helpers/apiFetcher";
import { Col, Container, Row } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import ItemList from "./ItemList";
import { ToastContainer } from "react-toastify";
import { cartContext } from "../context/CartContext";
import ItemPlaceholder from "./ItemPlaceholder";

export default function ItemCategoryContainer() {
    const { categoryId } = useParams();
    const [productsByCategory, setProductsByCategory] = useState([]);
    const { loading, setLoading } = useContext(cartContext);

    useEffect(() => {
        getProductByCategory(categoryId).then((products) => {
            setProductsByCategory(products);
            setLoading(false)
        });
    }, [categoryId])

    return (
        <Container>
            <ToastContainer />
            <Row>
                {loading ?
                    (
                        <>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <Col lg={4} md={6} key={index}>
                                    <ItemPlaceholder />
                                </Col>
                            ))}
                        </>
                    )
                    :
                    (
                        <>
                            {productsByCategory?.map((product) => (
                                <Col xs={4} key={product.id}>
                                    <ItemList product={product} />
                                </Col>
                            ))}
                        </>
                    )
                }
            </Row>
        </Container>
    )
}