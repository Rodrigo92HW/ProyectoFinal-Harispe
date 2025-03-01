import { Card, Placeholder } from "react-bootstrap";

export default function ItemPlaceholder() {
    return (
        <Card className="bg-dark text-white" border="dark" style={{ width: '20vw', padding: '1%', margin: '2%', minWidth: '250px', minHeight: '400px' }}>
            <Card.Img style={{ height: '100%', objectFit: 'contain' }} variant="top" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" />
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
        </Card>
    )
}