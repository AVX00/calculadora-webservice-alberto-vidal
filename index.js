require("dotenv").config();
const serverTalks = require("debug")("server:");
const chalk = require("chalk");
const http = require("http");

const port = process.env.SERVER_PORT;
const server = http.createServer();

server.listen(port, () =>
  serverTalks(
    `server listening in port ${chalk.black.bgWhiteBright(
      `http://localhost:${port}`
    )}`
  )
);

server.on("error", () => serverTalks(chalk.red("ERROR ON SERVER")));
