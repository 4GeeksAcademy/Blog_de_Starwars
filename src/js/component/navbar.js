import React, {useContext} from "react";
import { Link, useParams } from "react-router-dom"; // importar useParams para poder usar el uid, y poder usarlo en el boton de favoritos y en el link
import { Context } from "../store/appContext";





export const Navbar = () => {

	const {store, actions} = useContext(Context) 
	const{uid} = useParams() // exportar el uid para poder usarlo en el boton de favoritos

	return (

		<div className="container">
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">StarWars</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favorites.length}
						</button>
						
						<ul className="dropdown-menu">
						{store.favorites.map((element, id) => 
						<li key={id} style={{ display: 'flex', alignItems: 'center' }}>
									{/* en la ruta agregar uid para por dirigirse a los detalles */}
							<Link to={`/characterDetail/${element.uid}`} className="dropdown-item" href="#">
							{element.name} 
							</Link>
											{/*traer el actions para poder usar la funcion 			 */}
							<i onClick={() => actions.deleteFavorite(element.id) } className="fa-solid fa-trash"></i>
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
