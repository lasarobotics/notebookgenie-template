var exec = require("child_process").exec;
var spawn = require("child_process").spawn;
var rmrf = require("rimraf");

process.chdir(__dirname);

function install_npm()
{
  console.log("[NPM] Installing...");
  exec('npm install', function(error, stdout, stderr)
  {
    if (error) throw error;
    console.log(stdout);
    console.log(stderr);
    install_bower();
  });
}

function install_bower()
{
  console.log("[Bower] Installing...");
  exec('bower install --allow-root', function(error, stdout, stderr)
  {
    if (error) throw error;
    console.log(stdout);
    console.log(stderr);
    rm_temp_dirs();
  });
}

function rm_temp_dirs()
{
  rmrf("dist", gulp);
}

function gulp()
{
  console.log("[Gulp] Building...");
  exec('gulp', function(error, stdout, stderr)
  {
    if (error) throw error;
    console.log(stdout);
    console.log(stderr);
    console.log("[Builder] Done!");
    process.exit(0);
  });
}

install_npm();
