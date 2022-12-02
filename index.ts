import * as dotenv from "dotenv";
dotenv.config();

import { bootstrap } from "./bootstrap";
bootstrap(startUp);

function startUp() { 
    console.log("application is already started");
    const { app } = require('./app');
    app.listen(3000, () => {
        console.log("app is listing on port 3000");
    });
};