require("dotenv").config();
const serverTalks = require("debug")("server:");
const chalk = require("chalk");
const http = require("http");
const url = require("url");
const { addUtils } = require("./addUtils");
const { divisionUtils } = require("./divisionUtils");
const { generateHTML } = require("./generateHTML");
const { isValidInput } = require("./isValidInput");
const { productUtils } = require("./productUtils");
const { substractUtils } = require("./subtractUtils");

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
    const { a, b } = url.parse(req.url, true).query;
    if (a === "" || b === "") {
      res.write(generateHTML("<h1>Params can't be empty</h1>"));
      res.end();
    }
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
