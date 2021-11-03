import express from "express";

const app = express();
//const port = process.env.PORT || 8080;
const port = process.env.npm_package_config_port || 8080 // using package.json config
let runningMessage = `server is running on port ${port} watch on`;

app.get('/',(req,res) => {
    console.log('API was successfully requested');
    res.send(runningMessage);
});

const server = app.listen(port,() => {
    console.log(runningMessage);
});

module.exports = server;