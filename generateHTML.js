const generateHTML = (string) => `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculator</title>
      </head>
      <body>
        ${string}
      </body>`;

exports.generateHTML = generateHTML;
