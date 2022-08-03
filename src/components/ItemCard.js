import React, {useState, useEffect} from "react"

const ItemCard = ({ item, itemPicker }) => {

    const {name, attack, health, magic, desc, image} = item

    return(
        <div 
        className="item card"
        key={item.id}
        onClick={() => itemPicker(item)}
        >
            <img className="item-image" src={image} alt={name} />
            <p>{attack}</p>
            <p>{health}</p>
            <p>{magic}</p>
            <p>{desc}</p>
        </div>
    )
}

export default ItemCard