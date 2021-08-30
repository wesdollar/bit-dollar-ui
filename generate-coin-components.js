const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "crypto-logos/.assets");

const generateComponents = () => {
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
        coin !== "xlm"
      ) {
        console.log(`creating ${coin}`);
        const cmd = exec(
          `bit create crypto-logo ${coin} -s wesdollar.crypto-logos -p crypto-logos`,
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

        cmd.on("exit", function (code) {
          console.log("Child process exited with exit code " + code, coin);
        });
      }
    });
  });
};

generateComponents();
