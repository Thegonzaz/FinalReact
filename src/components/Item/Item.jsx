import { Link } from "react-router-dom";
import React from "react";
import '../Item/Item.css'

const Item = ({ info }) => {

    return (
        <Link to={`/detalle/${info.id}`} className="product">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
            <span>
                <p>${info.price}</p>
            </span>
        </Link>
    );
}

export default Item;