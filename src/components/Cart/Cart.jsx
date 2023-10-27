import React from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";


const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyers: {
            name: 'Jebus',
            email: 'Jebus@hotmail.com',
            phone: '112233445',
            address: 'avenida corrientes 2020'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
            .then(({ id }) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer compras</Link>
            </>
        );
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                Total: ${totalPrice()}
            </p>
            <button onClick={handleClick}>Realizar Compra</button>
        </>
    )
}

export default Cart