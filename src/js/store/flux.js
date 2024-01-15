const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
					// name: "Luke",
					// gender: "Male",
					// eyeColor: "Blue"
				},
				{
					// name: "Obi",
					// gender: "Male",
					// eyeColor: "Brown"
				}
			],
			character: {

			}
		},
		actions: {
			loadCharacters: async () => {
				try {
					//la variable pasaria a ser una promesa por el fetch
					let response = await fetch("https://www.swapi.tech/api/people/") // completar la url deacuerdo a la API
					let data = await response.json() // convertir picode a Json--> tipo de dato JS
					console.log();
					// for para recorrer 
					setStore({ characters: data.results }) // Guardar los personajes en el store, ,result porque la API muestra algo antes de consultar los personajes
		
				} catch (error) {
					console.log(error);
				}
			},
			loadCharacter: async (uid) => {
				console.log(uid);
				try {
					//la variable pasaria a ser una promesa por el fetch
					let response = await fetch(`https://www.swapi.tech/api/people/${uid}`) // completar la url deacuerdo a la API
					let data = await response.json() // convertir picode a Json--> tipo de dato JS
					console.log(data);
					
					setStore({ character: data.result.properties }) // Guardar los personajes en el store, ,result porque la API muestra algo antes de consultar los personajes
					
				} catch (error) {
					console.log(error);
				}
			},


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
