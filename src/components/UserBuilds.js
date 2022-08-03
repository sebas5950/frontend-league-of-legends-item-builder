import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
const UserBuilds = ({ itemPicker, builds }) => {

return (
    <div className="user builds">
        <div>
            {builds.map((build) => (
                <ItemCard key={build.id} itemPicker = {itemPicker} />
            ))}
        </div>

    </div>
)




    
}

export default UserBuilds