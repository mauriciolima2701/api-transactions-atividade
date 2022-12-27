import express from "express";
import cors from "cors";
import checkRequest from "./middlewares/checkRequest";
import router from "./routes/routes";

const api = express();

const port = process.env.PORT || 8080;

api.use(express.json(), cors(), checkRequest, router);

api.listen(port, () => console.log("Server bombandooooo!!!!"));
