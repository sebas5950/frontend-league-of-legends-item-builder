import { Link } from "react-router-dom";

    const ChampionCard = ({champ}) => {
        const {name, image, id} = champ
        return(
            <section className="championpage">
                 
            <div>
               <Link to={`/${id}/details`} ><img className="champ-image" src={image}/></Link>
                <div className="championtext">
                <h4 class="title">{name}</h4>
                </div>
            </div>
                </section>
        )
    }

    export default ChampionCard