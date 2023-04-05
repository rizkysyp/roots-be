const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mainRouter = require("./src/routes/index");
const { response } = require("./src/middlewares/response");
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const port = process.env.PORT;
app.use(bodyParser.json());

app.use("/", mainRouter);
app.all("*", (req, res, next) => {
  response(res, 404, false, null, "404 Not Found");
});

app.get("/", (req, res, next) => {
  res.status(200).json({ status: "success", statusCode: 200 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
