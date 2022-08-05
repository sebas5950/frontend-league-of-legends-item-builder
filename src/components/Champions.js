import ChampionCard from "./ChampionCard"

const Champions = ({championsData}) => {

    
  
    return(
         
       
        <div className="card-wrapper">
        {/* <img class= "image" src='https://cdn1.dotesports.com/wp-content/uploads/2021/09/09145842/SummonersRift.jpg'  
    style={{   position: "absolute",
    width: "100%",
    left: "50%",
    top: "50%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: "-1",
    filter: "blur(3px)"}}/>  */}
            {championsData.map(champ =>{
        return <ChampionCard champ={champ} key={champ.id}/>
    })}
        </div>
       
    )
}

export default Champions