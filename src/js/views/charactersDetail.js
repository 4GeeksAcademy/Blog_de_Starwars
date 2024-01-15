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
            HOla
            {store.character.name}
            {store.character.mass} 

        </div>
    )
}

export default CharacterDetail