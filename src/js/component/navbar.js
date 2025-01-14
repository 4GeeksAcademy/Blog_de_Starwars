import React, {useContext} from "react";
import { Link, useParams } from "react-router-dom"; // importar useParams para poder usar el uid, y poder usarlo en el boton de favoritos y en el link
import { Context } from "../store/appContext";


export const Navbar = () => {

	const {store, actions} = useContext(Context) 
	const{uid} = useParams() // exportar el uid para poder usarlo en el boton de favoritos

	return (

		<div className="container">
			<nav className="navbar navbar-light  mb-3" style={{background: "black"}}>
				<Link to="/">
					{/* <span className="navbar-brand mb-0 h1">StarWars</span> */}
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" style={{width: "70px"}} />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favorites.length}
						</button>
						
						<ul className="dropdown-menu" style={{background: "black"}}>
						{store.favorites.map((element) => // map para recorrer lo que esta almacenado en el store favorites
						<li key={element.id} style={{ display: 'flex', alignItems: 'center' }}>
									{/* en la ruta agregar uid para por dirigirse a los detalles */}
							<Link to={`/characterDetail/${element.id}`} className="dropdown-item" href="#" style={{color: "white"}}>
							{element.name} 
							</Link>


											{/*traer el actions para poder usar la funcion 			 */}
							<i onClick={() => actions.deleteFavorite(element.id) } className="fa-solid fa-trash" style={{color: "white"}}></i>
						</li>
						)
					}
						</ul>
					</div>
				</div>
			</nav>
		</div>

	);
};
