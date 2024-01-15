import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";


const Character = () => {
    const { store, actions } = useContext(Context);

    console.log(store.characters, "impresizo");
    
    let {uid} = useParams()
    

    return (

        <div>
            {/*  */}
            
            {store.characters.map((element, index) => {
                return (
                    <div className="container" key={element.uid}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"> {element.name}</h5>
                                {/* properties.haircolor */}
                                <p>Gender: {element.uid}</p> 
                                <p>Hair Color: {element.hair_color}</p>
                                <p>Eye-Color: {element.eye_color} </p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to={`/characterDetail/${element.uid}` } className="btn btn-primary">Learn More</Link>
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
