import ChampionCard from "./ChampionCard"

const Champions = ({championsData}) => {

    
  
    return(
        <div>
 {/* <h1 class="champion_title">ALL CHAMPIONS</h1> */}
        <div className="card-wrapper">
            {championsData.map(champ =>{
        return <ChampionCard champ={champ} key={champ.id}/>
    })}
        </div>
        </div>
    )
    
}

export default Champions