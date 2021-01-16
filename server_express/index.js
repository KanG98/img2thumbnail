const express = require("express");
const server = require('http')
const app = express();

// config
require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/config")();
require("./startup/bodyParser")(app);

// middle
require("./middlewares").init(app);

// routes
require("./routes/image")(app);

const port = process.env.PORT || 3050;
server.createServer(app);
server.listen(port, () => {
    winston.info(`listening to port ${port}...`);
});