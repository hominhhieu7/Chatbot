const express = require("express");
const app = express();
require('dotenv').config();

const bodyParser = require('body-parser');

DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10,
DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonconfig = () => ({
    parameterLimit: DEFAULT_BODY_SIZE_LIMIT,
    limit: DEFAULT_BODY_SIZE_LIMIT
})



const ask = require("./controller").ask;


app.use(bodyParser.json(bodyParserJsonconfig()));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Method', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });
app.post("/ask", ask);

const port = 3001;

app.listen(port, () => {
    console.log(`Open http://localhost:${port} to see results`);

})