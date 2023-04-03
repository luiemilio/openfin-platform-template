import * as OpenFin from "@openfin/core/src/OpenFin";
import express from "express";
import path from "path";
import basicAuth from 'express-basic-auth';

declare const fin: OpenFin.Fin<"external connection">;

const app = express();
const authApp = express();
const mainPath = path.join(__dirname, "..", "..", "public");
const authPath = path.join(__dirname, "..", "..", "public", "auth");
const port = 5050;
const authPort = 5051;

authApp.use(basicAuth({
    users: { 'admin': 'supersecret' },
	challenge: true,
	realm: 'Imb4T3st4pp',
	
}))

app.use(express.static(mainPath));

authApp.use(express.static(authPath));

app.listen(port, () => {
	console.log("server is listening on port", port);
});

authApp.listen(authPort, () => {
	console.log("server is listening on port", authPort);
});