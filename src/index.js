const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')

const config = require("./config");
const router = require("./router");
const app = express();

require('./dbConnection');

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(bodyParser.json({ limit: "50mb" }))

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true}))

app.use(router);

// // To serve UI and server from same server
// app.use(express.static(path.join(__dirname, 'client/build')));
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

app.listen(config.PORT, () => {
    console.log(`server is running at port no ${config.PORT}`);
});
