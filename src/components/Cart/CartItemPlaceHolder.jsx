import { Placeholder } from "react-bootstrap";

export default function CartItemPlaceHolder() {
    return (
            <>
                <Placeholder xs={8} />
                <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
                <Placeholder xs={8} />
                <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
            </>
    )
}