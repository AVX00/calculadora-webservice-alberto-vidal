require("dotenv").config();
const serverSays = require("debug")("server:");
const chalk = require("chalk");
const http = require("http");
const url = require("url");
const { program } = require("commander");
const { addUtils } = require("./addUtils");
const { divisionUtils } = require("./divisionUtils");
const { generateHTML } = require("./generateHTML");
const { isValidInput } = require("./isValidInput");
const { productUtils } = require("./productUtils");
const { substractUtils } = require("./subtractUtils");

program.option("-p, --port <number>");
program.parse();
const { port: userPort } = program.opts();
const port = userPort;
const defaultPort = process.env.SERVER_PORT;
const server = http.createServer();

const listen = (portToListen) => {
  server.listen(portToListen, () =>
    serverSays(
      `server listening in port ${chalk.black.bgWhiteBright(
        `http://localhost:${portToListen}`
      )}`
    )
  );
};

listen(port || defaultPort);

server.on("error", () => {
  serverSays(chalk.red("ERROR ON SERVER"));
});

server.on("request", (req, res) => {
  serverSays(
    `request at ${chalk.blueBright(req.url)} with method ${chalk.yellow(
      req.method
    )}`
  );

  if (req.url.startsWith("/calculator?")) {
    const { a, b } = url.parse(req.url, true).query;
    const numbers = [+a, +b];

    if (isValidInput(numbers)) {
      const body = `<h1>Results</>
        <p>${addUtils.logAddition(numbers)}</p>
        <p>${substractUtils.logSubstract(numbers)}</p>
        <p>${productUtils.logProduct(numbers)}</p>
        <p>${divisionUtils.logDivision(numbers)}</p>`;
      res.statusCode = 200;
      res.write(generateHTML(body));
    } else {
      res.statusCode = 500;
      res.write(generateHTML("<h1>Format Error</h1>"));
    }
  } else {
    res.statusCode = 404;
    res.write("<h1>NOT FOUND</>");
  }
  res.end();
});
