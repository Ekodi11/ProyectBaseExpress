const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
const uri = "mongodb+srv://tmcaballeroerfurt:Friv1234@feriadeciencias.30inxeo.mongodb.net/?retryWrites=true&w=majority"
/*
Carga de variables de entorno
dotenv.config({ path: "./config.env" });
 const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);
*/

function connect() {
	mongoose
		.connect(uri)
		.then(() => {
			console.log('Connected to the database ');
		})
		.catch((err) => {
			console.error(`Error connecting to the database. n${err}`);
		});
}

const port = 3000;
//Corremos el servidor en el puerto seleccionado
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});
 