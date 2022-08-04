import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserBuilds from "./UserBuilds";


const ChampionPage = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [championData, setChampionData] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`/champions/${id}`)
      .then((res) => res.json())
      .then((data) => setChampionData(data));
  }, []);

  useEffect(() => {
    fetch(`/champions/${id}/items`)
    .then(res => res.json())
    .then(newDat => setItems(newDat))
  }, [])

  function handleClick() {
    navigate(-1);
  }
  const buildItems = items.map(item => {
    return <UserBuilds items={item} key={item.id}/>
  })

  // function itemPicker(newItem){
  //   if (builds.includes(newItem) === false) {
  //     setBuilds([...builds, newItem])
  //   } else {
  //     const removedItem = builds.filter((item) => {
  //       return item !== newItem
  //     })
  //     setBuilds(removedItem)
  //   }
  // }
  

  const { name, title, blurb, attack, defense, magic, difficulty, image } = championData;

  return (
    <div>
      <h4>
        {name}, {title}
      </h4>
      <img className="detail-image" src={image} />

      <p>{`Description: ${blurb}`}</p>
      <table>
        <thead>
          <tr>
            <th>Difficulty</th>
            <th>Defense:</th>
            <th>Magic:</th>
            <th>Attack:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{difficulty}</td>
            <td>{defense}</td>
            <td>{magic}</td>
            <td>{attack}</td>
          </tr>
        </tbody>
      </table>

      
      {buildItems}
      <button onClick={handleClick}>back</button>
    </div>
  );
};

export default ChampionPage;
