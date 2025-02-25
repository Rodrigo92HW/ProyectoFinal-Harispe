import { createContext, useState } from "react";

export const cartContext = createContext(false);

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);

    function addItem(item) {
        const newCart = [...cart];
        const index = newCart.findIndex((i) => i.item.id === item.id);

        if (index === -1) {
            newCart.push({ item, amount: 1 });
        } else {
            newCart[index].amount++;
        }

        setCart(newCart);
        setCartAmount(cartAmount + 1);

        console.log(cart);
    }

    function clearCart() {
        setCart([]);
        setCartAmount(0);
    }

    const totalPrice = cart.reduce((acc, item) => {
        return acc + item.item.price * item.amount;
    }, 0);

    const cartCtx = {
        cart,
        cartAmount,
        clearCart,
        totalPrice,
        addItem
    }

    return (
        <cartContext.Provider value={cartCtx}>
            {children}
        </cartContext.Provider>
    )
}
