
    const ChampionCard = ({champ}) => {
        const {name, title, blurb, image} = champ
        return(
            <div className="card-wrapper">
                <img className="champ-image" src={image}/>
                <div className="container">
                <h4>{name}</h4>
                </div>
            </div>
        )
    }

    export default ChampionCard