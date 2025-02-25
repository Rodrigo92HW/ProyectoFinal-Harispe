import { useContext } from "react";
import { cartContext } from "../context/CartContext";

export default function CartWidget() {
    const { cartAmount } = useContext(cartContext);

    return (
        <div>
            <p>🛒 {cartAmount}</p>
        </div>
    )
}