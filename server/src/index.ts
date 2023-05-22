import express from "express";
import path from "path";

const app = express();
const mainPath = path.join(__dirname, "..", "..", "public");
const port = 5555;

app.use(express.static(mainPath));

app.listen(port, () => {
	console.log("server is listening on port", port);
});
