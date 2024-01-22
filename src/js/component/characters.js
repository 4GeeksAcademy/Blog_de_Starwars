import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Character = () => {
    const { store, actions } = useContext(Context);

    let { uid } = useParams()

    return (

        <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto' }}>
            {store.characters.map((element) => (
                <div className="container" >
                    <div className="card" key={element.uid} style={{ width: "18rem" }}>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${element.uid}.jpg`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> {element.name}</h5>
                            {/* <p>Gender: {element.uid}</p>  */}
                            <p>Gender: {element.gender}</p>
                            <p>Height: {element.height}</p>
                            <p>Eye-Color: {element.eye_color}</p>
                           
                                
                            {/* aca le paso el id del personaje y ahi sabe cual es */}
                        </div>

                        <div className="d-flex justify-content-between p-2">
                            <Link to={`/characterDetail/${element.uid}`} className="btn btn-outline-primary">Learn More</Link>
                            <button className=" Favorites btn btn-outline-warning" onClick={() => actions.addFavorite(element.uid, element.name)}><i className="fa-regular fa-heart"></i></button>
                            {/* importar actions */}
                        </div>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default Character
