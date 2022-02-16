require("dotenv").config();
const serverTalks = require("debug")("server:");
const chalk = require("chalk");
const http = require("http");
const url = require("url");

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

server.on("request", (req, res) => {
  serverTalks(
    `request at ${chalk.blueBright(req.url)} with method ${chalk.yellow(
      req.method
    )}`
  );

  if (req.url.startsWith("/calculator?")) {
    const queryParams = url.parse(req.url, true).query;
    serverTalks(queryParams);
  } else {
    res.statusCode = 404;
    res.write("<h1>NOT FOUND</>");
  }
  res.end();
});
