import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const PlanetDetail = () => {
    const{store, actions} = useContext(Context)
    const{uid} = useParams() // recuperar el id, lo puedo usar en el componente y pasarlo al useEffect

    useEffect( () =>{
        actions.loadPlanet(uid) // llmar la funcion del flux con el uid, esto va exclusivamnet al id
    }, [])

    return(
        <div>
            
            <div>
            <div className="container text-center">
                <div className="row justify-content-start">
                    <div className="col-4">
                    <img src="https://www.tennrand.com/wp-content/uploads/2015/04/800x600.gif" className="card-img-top" alt="..."/>
                    </div>
                <div className="col-4">
                    <h1>{store.planet.name}</h1>
                    </div>
                </div>
            </div>
        
            
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col">Name<p>{store.planet.name}</p></div>
                    <div className="col">Climate<p>{store.planet.climate}</p> </div>
                    <div className="col">Population<p>{store.planet.population}</p></div>
                    <div className="col">Orbital Period<p>{store.planet.orbital_period}</p></div>
                    <div className="col">Rotation Period<p>{store.planet.skin_color}</p></div>
                    <div className="col">Diameter<p>{store.character.diameter}</p></div>
            </div>
                </div>
        </div>

        </div>
    )
}

export default PlanetDetail