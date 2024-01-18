import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Planet = () => {

    const { store, actions } = useContext(Context);

    let {uidPlanet} = useParams()

    return(
        <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto' }}>
            {store.planets.map((element, index) => {
                return (
                    <div className="container" key={element.uid}>
                        <div className="card" style={{ width: "18rem" }}>
                            {element.uid == 1 ? 
                            <img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="card-img-top" alt={element.name} /> :
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${element.uid}.jpg`} className="card-img-top" alt={element.name} />
                        }
                            <div className="card-body">
                                <h5 className="card-title"> {element.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        
                            <div>
                                <Link to={`/planetDetail/${element.uid}` } className="btn btn-primary">Learn More</Link> 
                                <button className="Favorites" onClick={() => actions.addFavorite(`planet/${element.uid}`, element.name)}>Favorites</button>
                            </div>


                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Planet