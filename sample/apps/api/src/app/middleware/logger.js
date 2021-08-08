const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

export default new Console({ stdout: output, stderr: errorOutput });


