import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from "react-router-dom";

function ItemList() {
    useEffect(() => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/')

        const jsonData = await data.json()
        setItems(jsonData)
        console.log(jsonData)
    }

    return (
        <div>
            <h1>Item List</h1>
            {items.map(item => (
                    <h5 key={item.id}>
                        <Link to={`items/${item.id}`}>
                            {item.title}
                        </Link>
                    </h5>
                )
            )}
        </div>
    );
}

export default ItemList;
