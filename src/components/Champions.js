import ChampionCard from "./ChampionCard"

const Champions = ({championsData}) => {

    
  
    return(
        <div className="bgimage23">
 <h1 class="champion_title">CHAMPIONS LIST</h1>
        <div className="card-wrapper">
            {championsData.map(champ =>{
        return <ChampionCard champ={champ} key={champ.id}/>
    })}
        </div>
        </div>
    )
    
}

export default Champions