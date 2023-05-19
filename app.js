const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const port = 3003;

// Import routes
const usersRoutes = require("./routes/api.routes");
// Use routes
app.use("/api/v1/users", usersRoutes);

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/html/homepage.html`);
});

app.get("/round", (req, res) => {
  res.sendFile(`${__dirname}/public/html/round.html`);
});

app.listen(port, () => {
  console.log(`port http://localhost:${port} `);
});
