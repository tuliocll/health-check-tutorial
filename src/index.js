const express = require("express");

const defaultRouter = require("./routes/default");
const heathChecktRouter = require("./routes/healthCheck");

const app = express();
const port = process.env.PORT || 3000;

app.use(defaultRouter);

app.use(heathChecktRouter);

app.listen(port, () => {
  console.log("Rodando na porta", port);
});
