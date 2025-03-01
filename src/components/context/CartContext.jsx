import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { addOrder } from "../../helpers/apiFetcher";
import Swal from "sweetalert2";

export const cartContext = createContext(false);

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);
    const [loading, setLoading] = useState(true);

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

        toast(`${item.name} agregada al carrito`, {
            type: "success",
            position: "bottom-right",
            autoClose: 3000,
        }
        );
    }

    function clearCart() {
        Swal.fire({
            title: "Estas seguro de eliminar los productos tu carrito?",
            text: "No es posible volver atras!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "🛒 Borrado!",
                    text: "El carro fue limpiado con exito.",
                    icon: "success"
                });

                setCart([]);
                setCartAmount(0);
            }
        });
    }

    function order() {
        addOrder(cart).then((id) => {
            Swal.fire({
                title: "Order creada con exito!",
                text: "Tu orden posee el id: " + id,
                icon: "success"
            });
        });

        setTimeout(() => {
            setCart([]);
            setCartAmount(0);
        }, 2000);
    }

    const totalPrice = cart.reduce((acc, item) => {
        return acc + item.item.price * item.amount;
    }, 0);

    const cartCtx = {
        cart,
        cartAmount,
        clearCart,
        order,
        totalPrice,
        setLoading,
        loading,
        addItem
    }

    return (
        <cartContext.Provider value={cartCtx}>
            {children}
        </cartContext.Provider>
    )
}
