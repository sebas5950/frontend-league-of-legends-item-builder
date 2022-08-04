import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

const UserBuilds = ({ items }) => {
 
    const {image, name, attack, health, magic, desc} = items

  return (
    <div className="user builds">
     <img src={image} />
     <h2>{name}</h2>
     <p>{desc}</p>
     <table>
        <thead>
          <tr>
            <th>Health:</th>
            <th>Magic:</th>
            <th>Attack:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{health}</td>
            <td>{magic}</td>
            <td>{attack}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserBuilds;
