import ChampionCard from "./ChampionCard"

const Champions = ({championsData}) => {

    
  
    return(
        <div>
            {championsData.map(champ =>{
        return <ChampionCard champ={champ} key={champ.id}/>
    })}
        </div>
    )
}

export default Champions