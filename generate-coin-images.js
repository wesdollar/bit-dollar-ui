const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "crypto-logos/.assets");
const coins = [];

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  files.forEach(function (file) {
    coins.push(path.basename(`${directoryPath}/${file}`, ".png"));
  });
});

coins.forEach((coin) => {
  const cmd = exec(
    `bit create crypto-logo ${symbol} -s wesdollar.crypto-logos -p crypto-logos`,
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
});

cmd.on("exit", function (code) {
  console.log("Child process exited with exit code " + code);
});
