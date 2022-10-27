import { useState, useEffect } from "react";
import ChampionCard from "./ChampionCard";

const Champions = () => {
  const [championsData, setChampionsData] = useState([]);

  useEffect(() => {
    fetch("/champions")
      .then((res) => res.json())
      .then((data) => setChampionsData(data));
  }, []);
  return (
    <div>
      <div className="card-wrapper">
        {championsData.map((champ) => {
          return <ChampionCard champ={champ} key={champ.id} />;
        })}
      </div>
    </div>
  );
};

export default Champions;
