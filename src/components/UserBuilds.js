import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

const UserBuilds = ({ items }) => {
 
    const {image, name, attack, health, magic, desc} = items

  return (
    <div className="user builds">
      <div className="itemdesc">
     <img class = "itemimage" src={image} />
     <h2>{name} </h2>
     <br></br>
     <p>{desc}</p>
     </div>
     <table className="itemtable">
        <thead>
          <tr>
            <th>Health: {health}</th>
            <th>Magic: {magic}</th>
            <th>Attack: {attack}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default UserBuilds;
