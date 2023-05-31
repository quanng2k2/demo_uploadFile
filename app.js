const express = require("express");
const server = express();
const port = 3001;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const uploadRouter = require("./routes/upload.routes");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(cors());
server.use(morgan("dev"));
server.use(express.static("public"));

// api
server.use("/api/v1/upload", uploadRouter);

// router
server.get("/upload", (req, res) => {
  res.sendFile(`${__dirname}/public/upload.html`);
});

server.listen(port, (req, res) => {
  console.log(`http://localhost:${port}`);
});
