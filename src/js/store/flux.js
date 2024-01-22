const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api/",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [
				{
					
				}
			],
			character: {

			},
			planets: [{

			}],
			planet: {

			},
			favorites:[

			],
			starships:[{

			}],
			starship: {

			}
		},
		actions: {
			loadCharacters: async () => {
				try {
					//la variable pasaria a ser una promesa por el fetch
					let response = await fetch("https://www.swapi.tech/api/people/") // completar la url deacuerdo a la API
					let data = await response.json() // convertir picode a Json--> tipo de dato JS
					console.log();
					setStore({characters:[]}) // limpio el store porque hay un elemento agregado
					for(let element of data.results){
						console.log(element, "forAdentro");
						response = await fetch(element.url)
						let data = await response.json()
						setStore({ //puedo cargar al objeto mas propiedades, poner al mismo nivel ... creando un nuevo objeto
							characters: [...getStore().characters, {...data.result.properties, uid: data.result.uid}]
						})
					}

					// // for para recorrwe
				// setStore({ characters: data.results }) // Guardar los personajes en el store, ,result porque la API muestra algo antes de consultar los personajes
		
				} catch (error) {
					console.log(error);
				}
			},
			loadCharacter: async (uid) => {
				try {
					//la variable pasaria a ser una promesa por el fetch
					let response = await fetch(`https://www.swapi.tech/api/people/${uid}`) // completar la url deacuerdo a la API
					let data = await response.json() // convertir picode a Json--> tipo de dato JS
					setStore({ character: data.result.properties }) // Guardar los personajes en el store, ,result porque la API muestra algo antes de consultar los personajes
					
				} catch (error) {
					console.log(error);
				}
			},
			loadPlanets: async () => {
				try {
					//la variable pasaria a ser una promesa por el fetch
					let response = await fetch("https://www.swapi.tech/api/planets") // completar la url deacuerdo a la API
					let data = await response.json() // convertir picode a Json--> tipo de dato JS
						setStore({planets:[]}) // limpio el store porque hay un elemento agregado
						for(let element of data.results){
							console.log(element, "planetas adentro");
							response = await fetch(element.url)
							let data = await response.json()
							setStore({ //puedo cargar al objeto mas propiedades, poner al mismo nivel ... creando un nuevo objeto
								planets: [...getStore().planets, {...data.result.properties, uid: data.result.uid}]
							})
						}
				} catch (error) {
					console.log(error);
				}
			},
			loadPlanet: async (uid) => {
				console.log(uid);
				try {
					//la variable pasaria a ser una promesa por el fetch
					let response = await fetch(`https://www.swapi.tech/api/planets/${uid}`) // completar la url deacuerdo a la API
					let data = await response.json() // convertir picode a Json--> tipo de dato JS
					console.log(data);
					
					setStore({ planet: data.result.properties }) // Guardar los personajes en el store, ,result porque la API muestra algo antes de consultar los personajes
					
				} catch (error) {
					console.log(error);
				}
			},
			loadStarships: async () => {
				try {
					//la variable pasaria a ser una promesa por el fetch
					let response = await fetch("https://www.swapi.tech/api/starships") // completar la url deacuerdo a la API
					let data = await response.json() // convertir picode a Json--> tipo de dato JS
						setStore({starships:[]}) // limpio el store porque hay un elemento agregado
						for(let element of data.results){
							console.log(element, "forAdentro");
							response = await fetch(element.url)
							let data = await response.json()
							setStore({ //puedo cargar al objeto mas propiedades, poner al mismo nivel ... creando un nuevo objeto
								starships: [...getStore().starships, {...data.result.properties, uid: data.result.uid}]
							})
						}
					// console.log();
					// // for para recorrer e
					// setStore({ starships: data.results }) // Guardar los personajes en el store ,result porque la API muestra algo antes de consultar los personajes
		
				} catch (error) {
					console.log(error);
				}
			},
			loadStartship: async (uid) => {
				console.log(uid);
				try {
					//la variable pasaria a ser una promesa por el fetch
					let response = await fetch(`https://www.swapi.tech/api/starships/${uid}`) // completar la url deacuerdo a la API
					let data = await response.json() // convertir picode a Json--> tipo de dato JS
					console.log(data);
					
					setStore({ starship: data.result.properties }) // Guardar los personajes en el store, ,result porque la API muestra algo antes de consultar los personajes
					
				} catch (error) {
					console.log(error);
				}
			},

// En este código, la función addFavorite devuelve la lista actualizada de favoritos, 
// ya sea después de agregar un nuevo favorito o después de eliminar un favorito existente.
// Las funciones de en Flux generalmente no devuelven valores, en su lugar modifican el store

			addFavorite: (id, name) => {
				const store = getStore() // acceder los datos del store dentro del mismo flux (actions) llamo al store
				const findId = store.favorites.findIndex((element) => id == element.id ) // findIndex devuelve el indice del elemento que cumple la condicion
				console.log(findId);
				if (findId  > -1){  // si es -1 significa que no existe
					const updatedFavorites = store.favorites.filter((element) => element.id != id);
        			setStore({ favorites: updatedFavorites });
				}
				else {
				// definir una variable para almacenar los favoritos
				//spread operator traer todos los elementos del store,favorites
				// el objeto tiene dos propiedades id y name
				// se agrega el nuevo elemento(una lista) a la lista de favoritos
				const listaFavoritos = [...store.favorites, {id: id, name:name} ] // uso un diccionario para poder colocar los dos params
															// traigo el store
				setStore({favorites: listaFavoritos}) // actualizar el store con la lista de favoritos
				}
			},
			deleteFavorite: (id) => {
				const store = getStore()
				const updatedFavorites = store.favorites.filter((element) => element.id != id)
				setStore({favorites: updatedFavorites})
			},



			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green"); // llama accion dentro del mismo flux
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
