import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from "react-router-dom";

function Item({ match }) {
    useEffect(() => {
        fetchItem()
    }, [])

    const [item, setItem] = useState({})

    const fetchItem = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${match.params.id}`)

        const jsonData = await data.json()
        console.log(jsonData)
        setItem(jsonData)
    }

    return (
        <div>
            <h1>Item detail</h1>
            <h5>
                { JSON.stringify(item) }
            </h5>
        </div>
    );
}

export default Item;
