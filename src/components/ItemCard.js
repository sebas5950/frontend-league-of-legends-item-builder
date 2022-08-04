import React, {useState, useEffect} from "react"

const ItemCard = ({ item, champId }) => {

    const {name, attack, health, magic, desc, image} = item

    const newData = {
        item_id: item.id,
        champion_id: champId,
        name: 'w.e'
    }

    function handleClick() {
        fetch(`/builds`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(console.log)
    }

    console.log(champId)

    return(
        <div 
        className="item card"
        key={item.id}
        >
            
            <img  className="item-image" src={image} alt={name} />
            <p>{attack}</p>
            <p>{health}</p>
            <p>{magic}</p>
            <p>{desc}</p>
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default ItemCard