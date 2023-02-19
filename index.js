const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
function assertMissingArg(name) {
    console.trace(`Missing argument '${name}'`);
}
/* ARGUMENTS */
var NPMFile = process.argv[2];
if (!NPMFile)
    return assertMissingArg("NPMFile");
NPMFile = path.join(__dirname, NPMFile);
if (!fs.existsSync(NPMFile))
    return console.trace("The file provided does not exist.");
if (!NPMFile.endsWith(".npm")) 
    return console.trace("The file provided is not a .npm file.");
/* Main */
const raw = fs.readFileSync(NPMFile).toString();
raw.split("\n").forEach((line) => {
    const cmd = `npm ${line}`;
    if (!line.startsWith("npm"))
        cmd.replace("npm", "");
    child_process.exec(cmd, (error) => {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log(`done! - executed ${NPMFile}`);
        process.exit();
    });
})