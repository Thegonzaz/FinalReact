import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


const products = [
    { id: 1, image: "https://app.contabilium.com/files/explorer/16277/Productos-Servicios/concepto-5510243.jpg", category: 'perifericos', title: "mouse" },
    { id: 2, image: "https://www.qloud.com.ar/SITES/IMG/noxie-store-08-2022/274_10-03-2023-04-03-06-teclado-logitech-g213-rgb-prodigy-gaming-espanol-2.jpg", category: 'perifericos', title: "teclado" },
    { id: 3, image: "https://www.tradeinn.com/f/13842/138422421/xiaomi-monitor-gaming-curvo-bhr5133gl-34-wqhd-led-ips-144hz.jpg", category: 'monitores', title: "monitor" }
];

const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(products => products.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
    }, [categoriaId])

    return (
        <>
            <div className="container m-4" greeting={texto} />
            <ItemList data={data} />
        </>
    )
}
export default ItemListContainer;