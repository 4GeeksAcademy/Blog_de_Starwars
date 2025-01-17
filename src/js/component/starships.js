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
             {   //si hay un previous muestra el boton, esto esta almacenado en el store como data traido por el fetch y accedo a la propiedad previous
                (store.generalData.previous && <button onClick={() => actions.loadStarships(store.generalData.previous)}>Previous</button>)
            }
            {store.starships.map((element, index) => {
                let imageUrl;
                if (element.uid == 2) {
                    imageUrl = "https://lh3.googleusercontent.com/proxy/QQjUfwUcxht2hWhcPy54phImYaJT6eRcNpbjI69rL2ohyT8_ISRr5h-Xot7XhORoqRBCTa5ALY00hdvJbQgw4UTf5BQP90Kj8Mmn6vJ_avIE7cu6hTZpZ2_w0RA";
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
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            </div>
                            <div className="d-flex justify-content-between p-2">
                                <Link to={`/starshipDetail/${element.uid}`} className="btn btn-outline-primary">Learn More</Link>
                                <button className=" Favorites btn btn-outline-warning" onClick={() => actions.addFavorite(element.uid, element.name)}><i className="fa-regular fa-heart"></i></button> {/* importar actions */} </div>
                            </div>
                    </div>
                );
            })}
            {
                (store.generalData.next && <button onClick={() => actions.loadStarships(store.generalData.next)}>Next</button>)
            }
        </div>
    )
}

export default Starship
