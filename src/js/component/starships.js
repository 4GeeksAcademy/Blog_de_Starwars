import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Starship = () => {
    const { store, actions } = useContext(Context);

    console.log(store.starships, "nave solita");
    
    let { uid } = useParams()

    //  USAR EL APP CONTEXT PARA TRAER LOS DATOS DE LA API
    //debo especificar en que mommento se cargue la informacion con el useEffect

    return (

        <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto' }}>
            {store.starships.map((element, index) => {
                let imageUrl;
                if (element.uid == 2) {
                    imageUrl = "https://lh3.googleusercontent.com/proxy/E9Sg4PvCPMvpa6TPUhDFAu9206faxXE4qEfx4oumDVPE_DJJz4spunmqT3rVvg16jDtid50Vsjh4Kr1SpWJSs98YAGBcDUViMAIDQhfX";
                } else if (element.uid == 3) {
                    imageUrl = "https://static.wikia.nocookie.net/starwars/images/3/30/Executor_BF2.png/revision/latest?cb=20230405071103";
                } else if (element.uid == 17) {
                    imageUrl = "https://static.wikia.nocookie.net/starwars/images/b/be/GR-75_transport_SWGTCG.jpg/revision/latest?cb=20130911163358";
                } else {
                    imageUrl = `https://starwars-visualguide.com/assets/img/starships/${element.uid}.jpg`;
                }

                return (
                    <div className="container" key={element.uid}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={imageUrl} className="card-img-top" alt={element.model}  style={{ width: 'auto', height: '200px' }}/>
                            <div className="card-body">
                                <h5 className="card-title"> {element.name}</h5>
                                <p>ID: {element.passengers}</p>
                                <p>Model: {element.uid}</p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div className="d-flex justify-content-between p-2">
                                <Link to={`/starshipDetail/${element.uid}`} className="btn btn-primary">Learn More</Link>
                                <button className=" Favorites" onClick={() => actions.addFavorite(`startship/${element.uid}`, element.name)}><i class="fa-regular fa-heart"></i></button> {/* importar actions */} </div>
                            </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Starship
