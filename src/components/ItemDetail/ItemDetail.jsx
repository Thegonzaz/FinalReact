import ItemCount from "../ItemCount/ItemCount";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import './ItemDetail.css'

const ItemDetail = ({data}) =>{
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return(
        <div className="container">
            <div className="detail">
                <img className="detail_image" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <h2>${data.price}</h2>
                    {
                        goToCart ? <Link to='/cart'>Finalizar Compra</Link> : <ItemCount initial={1} stock={10} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;