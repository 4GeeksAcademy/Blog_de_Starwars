import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Character = () => {
    const { store, actions } = useContext(Context);

    console.log(store.characters, "impresizo");
    
    let {uid} = useParams()

    return (

        <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto' }}>
            {store.characters.map((element, index) => {
                return (
                    <div className="container" key={element.uid}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${element.uid}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"> {element.name}</h5>
                                <p>Gender: {element.uid}</p> 
                                <p>Hair Color: {element.hair_color}</p>
                                <p>Eye-Color: {element.eye_color} </p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                               {/* aca le paso el id del personaje y ahi sabe cual es */}
                            </div>

                            <div className="d-flex justify-content-between p-2">
                                <Link to={`/characterDetail/${element.uid}` } className="btn btn-outline-primary">Learn More</Link>
                                <button className=" Favorites btn btn-outline-warning" onClick={() => actions.addFavorite(`character/${element.uid}`, element.name)}>Favorites</button>
                                                                            {/* importar actions */}
                            </div>   
                        </div>
                    </div>

                )
            }
            )}
        </div>
    )
}

export default Character
