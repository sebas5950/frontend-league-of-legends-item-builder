import React, {useState, useEffect} from "react"

const ItemCard = ({item}) => {

    const {name, attack, health, magic, desc, image} = item

    return(
        <div>
            <img className="item-image" src={image} alt={name} />
            <p>{attack}</p>
            <p>{health}</p>
            <p>{magic}</p>
            <p>{desc}</p>
        </div>
    )
}

export default ItemCard