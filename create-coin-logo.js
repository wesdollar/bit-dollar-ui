const path = require("path");
const fs = require("fs");
const lodash = require("lodash");

const directoryPath = path.join(__dirname, "crypto-logos/.assets");

const generateComponents = () => {
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    files.forEach((file) => {
      const coin = path.basename(`${directoryPath}/${file}`, ".png");

      fs.writeFileSync(
        `./dollar-ui/crypto/wallet-summary/logos/${lodash.capitalize(
          coin
        )}.jsx`,
        `import React from "react";
import logo from "./${coin}.png";

const ${lodash.capitalize(coin)} = () => {
  return (
    <div data-testid="${coin}-container">
      <img src={logo} alt="${lodash.upperCase(coin)} logo" />
    </div>
  );
};

export default ${lodash.capitalize(coin)};
`,
        (err) => console.error("could not create file: ", err)
      );
    });
  });
};

generateComponents();
