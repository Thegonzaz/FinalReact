import ItemList from "../ItemList/ItemList";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'

const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if (categoriaId){
        const queryFilter = query(queryCollection, where('category', '==', categoriaId))
        getDocs(queryFilter)
            .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        } else {
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))));
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