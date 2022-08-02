import { Link } from "react-router-dom";

    const ChampionCard = ({champ}) => {
        const {name, image, id} = champ
        return(
            <div className="card-wrapper">
               <Link to={`/${id}/details`} ><img className="champ-image" src={image}/></Link>
                <div className="container">
                <h4>{name}</h4>
                </div>
            </div>
        )
    }

    export default ChampionCard