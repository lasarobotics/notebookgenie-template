const open = require('open');
const fs = require('fs');
const exec = require('child_process').exec;
const spawn = require('child_process').spawn;

const SHOULD_OPEN = true;

console.log("[Prince] Generating PDF...")

const prince = spawn('prince', ['--verbose', '--javascript', 'dist/test.html', '-o', 'dist/raw.pdf'],
{
  stdio: "inherit"
});

prince.on('close', (code) => {
  console.log('[Prince] Exited with code ' + code);
  rmPages(function()
  {
    if (SHOULD_OPEN)
    {
      open('file://' + __dirname + "/dist/output.pdf", function (err) {
        if (err) throw err;
        console.log("[Open] Browser window closed.");
      });
    }
  });
});

function rmPages(cb)
{
  console.log("[PDFToolkit] Modifying PDF...");
  const child = exec('pdftk dist/raw.pdf cat 3-end output dist/output.pdf dont_ask allow AllFeatures drop_xfa',
    (error, stdout, stderr) => {
    console.log(`[PDFToolkit] ${stdout}\r\n${stderr}`);
    if (error !== null) {
      throw error;
    }
    cb();
  });
}
