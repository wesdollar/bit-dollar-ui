const { execSync } = require("child_process");

execSync(`bit tag --all`, function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log("Error code: " + error.code);
    console.log("Signal received: " + error.signal);
  }
  console.log("Child Process STDOUT: " + stdout);
  console.log("Child Process STDERR: " + stderr);
  console.log("tagging complete");
});

execSync(`bit export`, function (error, stdout, stderr) {
  console.log("exporting");
  if (error) {
    console.log(error.stack);
    console.log("Error code: " + error.code);
    console.log("Signal received: " + error.signal);
  }
  console.log("Child Process STDOUT: " + stdout);
  console.log("Child Process STDERR: " + stderr);
  console.log("export complete");
});
