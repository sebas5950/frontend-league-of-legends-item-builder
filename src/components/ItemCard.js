import React, {useState, useEffect} from "react"

const ItemCard = ({ item, selectedData }) => {

    const {image, name} = item

    const newData = {
        item_id: item.id,
        champion_id: selectedData,
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

    


    return(
        <div 
        className="item card"
        >
            
            <img onClick={handleClick} className="item-image" src={image} alt={name} />
           
        </div>
    )
}

export default ItemCard