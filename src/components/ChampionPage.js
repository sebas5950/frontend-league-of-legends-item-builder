import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ItemCard from "./ItemCard";

const ChampionPage = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [championData, setChampionData] = useState({});
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    fetch(`/champions/${id}`)
      .then((res) => res.json())
      .then((data) => setChampionData(data));
  }, []);

  useEffect(() => {
    fetch(`/items`)
      .then((res) => res.json())
      .then((data) => setItemsData(data));
  }, []);

  function handleClick() {
    navigate(-1);
  }

  const { name, title, blurb, attack, defense, magic, difficulty, image } =
    championData;

  return (
    <div>
      <h4>
        {name}, {title}
      </h4>
      <img className="detail-image" src={image} />

      <p>{`Description: ${blurb}`}</p>
      <table>
        <tr>Difficulty:</tr>
        <td>{difficulty}</td>
        <tr>Defense:</tr>
        <td>{defense}</td>
        <tr>Magic:</tr>
        <td>{magic}</td>
        <tr>Attack:</tr>
        <td>{attack}</td>
      </table>
      {itemsData.map((item) => {
        return <ItemCard item={item} key={item.id} />;
      })}
      <button onClick={handleClick}>back</button>
    </div>
  );
};

export default ChampionPage;