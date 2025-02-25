import { Card, Placeholder } from "react-bootstrap";

export default function ItemPlaceholder() {
    return (
        <Card className="bg-dark text-white" style={{margin: '2% auto', width: '50%'}}>
            <Card.Img style={{height: '100%', objectFit: 'contain' }} variant="top" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" />
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder /> <Placeholder /> <Placeholder />{' '}
                    <Placeholder /> <Placeholder />
                </Placeholder>
            </Card.Body>
        </Card>
    )
}