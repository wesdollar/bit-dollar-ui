const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "crypto-logos/.assets");

const addCoins = () => {
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    files.forEach(function (file) {
      const coin = path.basename(`${directoryPath}/${file}`, ".png");

      if (
        coin !== "amp" ||
        coin !== "eth" ||
        coin !== "uni" ||
        coin !== "xlm" ||
        coin !== "usdt" ||
        coin !== "1inch" ||
        coin !== "enj" ||
        coin !== "zrx"
      ) {
        console.log(`adding ${coin}`);
        const cmd = execSync(
          `bit add crypto-logos/${coin}`,
          function (error, stdout, stderr) {
            if (error) {
              console.log(error.stack);
              console.log("Error code: " + error.code);
              console.log("Signal received: " + error.signal);
            }
            console.log("Child Process STDOUT: " + stdout);
            console.log("Child Process STDERR: " + stderr);
          }
        );
      }
    });
  });
};

addCoins();
