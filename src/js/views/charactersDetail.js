import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const CharacterDetail = () => {

    const { store, actions } = useContext(Context)

    const { uid } = useParams() // recuperar el id, lo puedo usar en el componente y pasarlo al useEffect

    useEffect(() => {
        actions.loadCharacter(uid) // llamar la funcion del flux con el uid, esto va exclusivamnet al id
    }, [])

    return (
        <div>
            <div className="container text-center" style={{color: "white"}}>
                <div className="row justify-content-start">
                    <div className="col-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="card-img-top" alt="..." />
                    </div>
                    <div className="col-4">
                        <h1>{store.character.name}</h1>
                        
                    </div>
                </div>
            </div>


            <div className="container text-center" >
                <div className="row align-items-center" style={{color: "white"}}>
                    <div className="col">Name<p>{store.character.name}</p></div>
                    <div className="col">Birth Year<p>{store.character.birth_year}</p> </div>
                    <div className="col">Gender<p>{store.character.gender}</p></div>
                    <div className="col">Height<p>{store.character.height}</p></div>
                    <div className="col">Skin Color<p>{store.character.skin_color}</p></div>
                    <div className="col">Eye Color<p>{store.character.eye_color}</p></div>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetail