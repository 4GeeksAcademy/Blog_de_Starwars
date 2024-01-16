import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const CharacterDetail = () => {

    const{store, actions} = useContext(Context)

    const{uid} = useParams() // recuperar el id, lo puedo usar en el componente y pasarlo al useEffect

    useEffect( () =>{
        actions.loadCharacter(uid) // llmar la funcion del flux con el uid, esto va exclusivamnet al id
    }, [])

    console.log(store.character);

    return(
        <div>
            
            <div>
            <div className="container text-center">
                <div className="row justify-content-start">
                    <div className="col-4">
                    <img src="https://www.tennrand.com/wp-content/uploads/2015/04/800x600.gif" className="card-img-top" alt="..."/>
                    </div>
                <div className="col-4">
                    <h1>{store.character.name}</h1>
                    </div>
                </div>
            </div>
        
            
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col">Name<p>{store.character.name}</p></div>
                    <div className="col">Birth Year<p>{store.character.birth_year}</p> </div>
                    <div className="col">Gender<p>{store.character.gender}</p></div>
                    <div className="col">Height<p>{store.character.height}</p></div>
                    <div className="col">Skin Color<p>{store.character.skin_color}</p></div>
                    <div className="col">Eye Color<p>{store.character.eye_color}</p></div>
            </div>
                </div>
        </div>

        </div>
    )
}

export default CharacterDetail