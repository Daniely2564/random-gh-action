const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  core.notice("Hello from my custom Javascript Action!");

  const arr = core.getInput("arr", {
    required: true,
  });

  console.log(arr);
}

run();
