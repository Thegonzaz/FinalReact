import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useEffect, useState } from "react";

const products = [
    { id: 1, image: "https://app.contabilium.com/files/explorer/16277/Productos-Servicios/concepto-5510243.jpg", category: 'perifericos', title: "mouse" },
    { id: 2, image: "https://www.qloud.com.ar/SITES/IMG/noxie-store-08-2022/274_10-03-2023-04-03-06-teclado-logitech-g213-rgb-prodigy-gaming-espanol-2.jpg", category: 'perifericos', title: "teclado" },
    { id: 3, image: "https://www.tradeinn.com/f/13842/138422421/xiaomi-monitor-gaming-curvo-bhr5133gl-34-wqhd-led-ips-144hz.jpg", category: 'monitores', title: "monitor" }
];


const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
         setTimeout(() =>{
             resolve(products);
         }, 3000);
        });
        getData.then(res => setData(res.find(product => product.id === parseInt(detalleId))));
     }, []);

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;