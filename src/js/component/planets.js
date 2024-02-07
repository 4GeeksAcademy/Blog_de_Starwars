import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Planet = () => {

    const { store, actions } = useContext(Context);

    let {uidPlanet} = useParams()

    return(
        <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto' }}>
            {   //si hay un previous muestra el boton, esto esta almacenado en el store como data traido por el fetch y accedo a la propiedad previous
                (store.generalData.previous && <button onClick={() => actions.loadPlanets(store.generalData.previous)}>Previous</button>)
            }
            {store.planets.map((element, index) => {
                return (
                    <div className="container" key={element.uid}>
                        <div className="card" style={{ width: "18rem" }}>
                            {element.uid == 1 ? 
                            <img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="card-img-top" alt={element.name} /> :
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${element.uid}.jpg`} className="card-img-top" alt={element.name} />
                        }
                            <div className="card-body">
                                <h5 className="card-title"> {element.Name}</h5>
                                <p>Terrain : {element.terrain}</p>
                                <p>Population : {element.population}</p>
                                <p>Clima : {element.population}</p>
                            </div>
                        
                            <div className="d-flex justify-content-between p-2">
                                <Link to={`/planetDetail/${element.uid}` } className="btn btn-outline-primary">Learn More</Link> 
                                <button className="Favorites btn btn-outline-warning" onClick={() => actions.addFavorite(element.uid, element.name)}><i className="fa-regular fa-heart"></i></button>
                            </div>


                        </div>
                    </div>
                )
            }
            )}
            {
                (store.generalData.next && <button onClick={() => actions.loadPlanets(store.generalData.next)}>Next</button>)
            }
        </div>
    )
}

export default Planet