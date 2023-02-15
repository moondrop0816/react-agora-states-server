const express = require("express");
const app = express();

const cors = require("cors"); // cors middleware
const morgan = require("morgan"); // logger middleware

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json({ strict: false }));

const port = 4000;
const discussionsRouter = require("./router/discussions");

app.use("/discussions", discussionsRouter);

app.get("/", (req, res) => {
  // 서버상태확인을 위한 코드
  res.status(200).send("server is running!");
});

const server = app.listen(port, () => {
  console.log(`[RUN] localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
