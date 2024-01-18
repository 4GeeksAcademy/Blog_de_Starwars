import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const StarshipDetail = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => { //al cargar la pagina se ejecuta la funcion load
        actions.loadStartship(uid) // llamar la funcion del flux con el uid, esto va exclusivamnet al id
    }, [])
    console.log(store.starship);

    let imageUrl;
    if (uid == 2) {
        imageUrl = "https://lh3.googleusercontent.com/proxy/E9Sg4PvCPMvpa6TPUhDFAu9206faxXE4qEfx4oumDVPE_DJJz4spunmqT3rVvg16jDtid50Vsjh4Kr1SpWJSs98YAGBcDUViMAIDQhfX";
    } else if (uid == 3) {
        imageUrl = "https://static.wikia.nocookie.net/starwars/images/3/30/Executor_BF2.png/revision/latest?cb=20230405071103";
    } else if (uid == 17) {
        imageUrl = "https://static.wikia.nocookie.net/starwars/images/b/be/GR-75_transport_SWGTCG.jpg/revision/latest?cb=20130911163358";
    } else {
        imageUrl = `https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`;
    }


    return (
        <div>
            <div className="container text-center">
                <div className="row justify-content-start">
                    <div className="col-4">
                    <img src={imageUrl} className="card-img-top" alt={store.starship.name} />
                        {/* {uid == 2 ?
                                <img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="card-img-top" alt={store.starship.name} /> :
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} className="card-img-top" alt={store.starship.name} />
                            } */}
                    </div>
                    <div className="col-4">
                        <h1>{store.starship.name}</h1>
                    </div>
                </div>
            </div>

            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col">Model<p>{store.starship.model}</p></div>
                    <div className="col">Starship Class<p>{store.starship.starship_class}</p> </div>
                    <div className="col">Cost in credits<p>{store.starship.cost_in_credits}</p></div>
                    <div className="col">Manufacturer<p>{store.starship.manufacturer}</p></div>
                    <div className="col">Crew<p>{store.starship.crew}</p></div>
                    <div className="col">Passengers<p>{store.starship.passengers}</p></div>
                </div>
            </div>
        </div>


    )
}

export default StarshipDetail