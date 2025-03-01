import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../../helpers/apiFetcher";
import { Button, Card } from "react-bootstrap";
import ItemPlaceholder from "./ItemPlaceholder";
import { cartContext } from "../context/CartContext";
import { ToastContainer } from "react-toastify";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const { addItem } = useContext(cartContext);

  useEffect(() => {
    getProduct(itemId).then((data) => {
      setProduct(data);
    });
  }, [itemId]);

  if (!product) {
    return (
      <ItemPlaceholder />
    )
  } else {
    return (
      <>
        <ToastContainer />
        <Card className="bg-dark text-white" style={{ margin: '2% auto', width: '20%' }}>
          <Card.Img style={{ height: '100%', objectFit: 'contain', maxHeight: '60vh' }} variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle>{product.rating}⭐</Card.Subtitle>
            <Card.Text>
              {product.description}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Button variant="success" onClick={() => addItem(product)}>Comprar</Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}