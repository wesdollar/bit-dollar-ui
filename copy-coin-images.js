const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "crypto-logos/.assets");

const copyImages = () => {
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    files.forEach(function (file) {
      const coin = path.basename(`${directoryPath}/${file}`, ".png");

      fs.copyFile(
        `./crypto-logos/.assets/${coin}.png`,
        `./dollar-ui/crypto/wallet-summary/logos/${coin}.png`,
        (err) => {
          if (err) {
            throw err;
          }

          console.log(`${coin} copied`);
        }
      );
    });
  });
};

copyImages();
