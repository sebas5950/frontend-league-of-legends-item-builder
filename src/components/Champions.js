import ChampionCard from "./ChampionCard"

const Champions = ({champion}) => {

    
  
    return(
        <div>
            {champion.map(champ =>{
        return <ChampionCard champ={champ} key={champ.id}/>
    })}
        </div>
    )
}

export default Champions